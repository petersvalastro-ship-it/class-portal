import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';

export type StudentRow = {
  userId: string;
  name: string;
  email: string;
  xp: number;
  masteredCount: number;
  scenariosCount: number;
  sectionsDone: number;
  updatedAt: string | null;
  notes: { sectionId: string; note: string }[];
};

/**
 * Teacher-only class roster: XP, completed sections and section notes for every
 * signed-in student. The caller must hold the 'teacher' role.
 */
export const getClassProgress = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<StudentRow[]> => {
    const { data: roles, error: rolesError } = await context.supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', context.userId)
      .eq('role', 'teacher');
    if (rolesError) throw new Error(rolesError.message);
    if (!roles || roles.length === 0) {
      throw new Error('This dashboard is available to teachers only.');
    }

    const [{ data: profiles, error: profileError }, { data: progress, error: progressError }] =
      await Promise.all([
        context.supabase
          .from('student_profile')
          .select('user_id, display_name, email, xp, mastered_terms, completed_scenarios, updated_at'),
        context.supabase
          .from('launchpad_progress')
          .select('user_id, section_id, completed, notes'),
      ]);
    if (profileError) throw new Error(profileError.message);
    if (progressError) throw new Error(progressError.message);

    const byUser = new Map<string, StudentRow>();
    const ensure = (userId: string): StudentRow => {
      let row = byUser.get(userId);
      if (!row) {
        row = {
          userId,
          name: 'Student',
          email: '',
          xp: 0,
          masteredCount: 0,
          scenariosCount: 0,
          sectionsDone: 0,
          updatedAt: null,
          notes: [],
        };
        byUser.set(userId, row);
      }
      return row;
    };

    for (const profile of profiles ?? []) {
      const row = ensure(profile.user_id as string);
      row.name = (profile.display_name as string) || 'Student';
      row.email = (profile.email as string) || '';
      row.xp = Number(profile.xp) || 0;
      row.masteredCount = Array.isArray(profile.mastered_terms) ? profile.mastered_terms.length : 0;
      row.scenariosCount =
        profile.completed_scenarios && typeof profile.completed_scenarios === 'object'
          ? Object.keys(profile.completed_scenarios as Record<string, unknown>).length
          : 0;
      row.updatedAt = (profile.updated_at as string) ?? null;
    }

    for (const entry of progress ?? []) {
      const row = ensure(entry.user_id as string);
      if (entry.completed) row.sectionsDone += 1;
      const note = ((entry.notes as string) || '').trim();
      if (note) row.notes.push({ sectionId: entry.section_id as string, note });
    }

    return Array.from(byUser.values()).sort((a, b) => a.name.localeCompare(b.name));
  });

/**
 * Teacher-only password reset: sets a new password for one student account so a
 * student who forgot theirs can get back in. Verified against the caller's
 * 'teacher' role before any privileged call.
 */
export const resetStudentPassword = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { userId: string; newPassword: string }) => {
    const userId = String(input?.userId ?? '').trim();
    const newPassword = String(input?.newPassword ?? '');
    if (!userId) throw new Error('Pick a student first.');
    if (newPassword.length < 6) throw new Error('The new password must be at least 6 characters.');
    return { userId, newPassword };
  })
  .handler(async ({ data, context }): Promise<{ ok: true }> => {
    const { data: roles, error: rolesError } = await context.supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', context.userId)
      .eq('role', 'teacher');
    if (rolesError) throw new Error(rolesError.message);
    if (!roles || roles.length === 0) {
      throw new Error('Resetting passwords is available to teachers only.');
    }
    if (data.userId === context.userId) {
      throw new Error('Use your own Google account settings to change your own password.');
    }

    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.auth.admin.updateUserById(data.userId, {
      password: data.newPassword,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
