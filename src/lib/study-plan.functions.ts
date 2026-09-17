import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { z } from 'zod';

const PlanInput = z.object({
  displayName: z.string().default('Student'),
  xp: z.number().int().nonnegative(),
  masteredCount: z.number().int().nonnegative(),
  totalTerms: z.number().int().nonnegative(),
  scenariosCount: z.number().int().nonnegative(),
  totalScenarios: z.number().int().nonnegative(),
  sectionsDone: z.number().int().nonnegative(),
  totalSections: z.number().int().nonnegative(),
  completedSectionTitles: z.array(z.string()).default([]),
  remainingSectionTitles: z.array(z.string()).default([]),
  goals: z
    .array(z.object({ title: z.string(), metric: z.string(), target: z.number(), done: z.boolean() }))
    .default([]),
});

/**
 * Builds a personalised study plan from the student's saved progress and goals
 * using the Lovable AI Gateway, then stores it on their profile.
 */
export const generateStudyPlan = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => PlanInput.parse(input))
  .handler(async ({ data, context }) => {
    const apiKey = process.env['LOVABLE_API_KEY'];
    if (!apiKey) throw new Error('AI is not configured for this app yet.');

    const { streamText } = await import('ai');
    const { createOpenAI } = await import('@ai-sdk/openai');
    const { createLovableAiGatewayRunIdFetch } = await import('./ai-gateway.server');

    const runIdFetch = createLovableAiGatewayRunIdFetch();
    const lovable = createOpenAI({
      baseURL: 'https://ai.gateway.lovable.dev/v1',
      apiKey,
      headers: { 'Lovable-API-Key': apiKey, 'X-Lovable-AIG-SDK': 'vercel-ai-sdk' },
      fetch: runIdFetch.fetch as any,
    });

    const goalLines = data.goals.length
      ? data.goals
          .map((g) => `- ${g.title} (measure: ${g.metric}, target: ${g.target}, ${g.done ? 'marked done' : 'in progress'})`)
          .join('\n')
      : '- No goals set yet.';

    const prompt = [
      `Student: ${data.displayName}`,
      `Experience points earned: ${data.xp}`,
      `Glossary terms mastered: ${data.masteredCount} of ${data.totalTerms}`,
      `Real-world scenarios solved: ${data.scenariosCount} of ${data.totalScenarios}`,
      `LaunchPad textbook sections completed: ${data.sectionsDone} of ${data.totalSections}`,
      `Sections already finished: ${data.completedSectionTitles.join('; ') || 'none yet'}`,
      `Sections still open: ${data.remainingSectionTitles.slice(0, 12).join('; ') || 'none'}`,
      'Learning goals:',
      goalLines,
    ].join('\n');

    const result = streamText({
      model: lovable.responses('openai/gpt-6-astra'),
      system: [
        'You are a supportive middle school entrepreneurship coach for the NEIA Entrepreneur Hub.',
        'Write a personalised two-week study plan in plain markdown for a 6th-8th grade reader.',
        'Use these sections exactly: "## Where you are now", "## Your two-week plan" (with "### Week 1" and "### Week 2", each 3-4 short bullet tasks naming specific Hub activities: LaunchPad textbook sections, glossary terms, scenarios, the Math Lab calculators, the pitch builder), "## Goal check" (one line per learning goal with the next concrete step), "## One challenge" (a single stretch task).',
        'Be encouraging, concrete and brief: under 400 words, no emojis, no invented features.',
      ].join(' '),
      prompt,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: 'low',
          reasoningSummary: 'auto',
          store: false,
          include: ['reasoning.encrypted_content'],
        },
      },
    });

    const plan = (await result.text)?.trim();
    if (!plan) throw new Error('The plan came back empty. Please try again.');

    await context.supabase
      .from('student_profile')
      .upsert(
        { user_id: context.userId, study_plan: plan, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' },
      );

    return { plan };
  });
