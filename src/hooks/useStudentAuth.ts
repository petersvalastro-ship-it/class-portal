import { useCallback, useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';

export type SectionProgress = { completed: boolean; notes: string };
export type ProgressMap = Record<string, SectionProgress>;

const LOCAL_KEY = 'launchpad-progress-v1';

function readLocal(): ProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(LOCAL_KEY) || '{}') as ProgressMap;
  } catch {
    return {};
  }
}

function writeLocal(progress: ProgressMap) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(progress));
  } catch {
    /* storage unavailable */
  }
}

export function useStudentAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    setProgress(readLocal());
    const { data: sub } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setAuthLoading(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
      setAuthLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // Load saved cloud progress once signed in, merging any local work.
  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) return;
    let cancelled = false;
    (async () => {
      setSyncing(true);
      const { data, error } = await supabase
        .from('launchpad_progress')
        .select('section_id, completed, notes');
      if (!cancelled && !error && data) {
        const remote: ProgressMap = {};
        for (const row of data) {
          remote[row.section_id] = { completed: !!row.completed, notes: row.notes ?? '' };
        }
        const local = readLocal();
        const merged: ProgressMap = { ...local, ...remote };
        setProgress(merged);
        writeLocal(merged);
        // Push any local-only work up so it is not lost.
        const localOnly = Object.entries(local).filter(([id]) => !remote[id]);
        if (localOnly.length) {
          await supabase.from('launchpad_progress').upsert(
            localOnly.map(([section_id, value]) => ({
              user_id: userId,
              section_id,
              completed: value.completed,
              notes: value.notes ?? '',
            })),
            { onConflict: 'user_id,section_id' },
          );
        }
      }
      if (!cancelled) setSyncing(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  const saveSection = useCallback(
    async (sectionId: string, value: SectionProgress) => {
      setProgress((current) => {
        const next = { ...current, [sectionId]: value };
        writeLocal(next);
        return next;
      });
      const userId = session?.user?.id;
      if (!userId) return;
      setSyncing(true);
      await supabase.from('launchpad_progress').upsert(
        {
          user_id: userId,
          section_id: sectionId,
          completed: value.completed,
          notes: value.notes ?? '',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,section_id' },
      );
      setSyncing(false);
    },
    [session?.user?.id],
  );

  const signIn = useCallback(async () => {
    const result = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      console.error(result.error);
      return { error: result.error };
    }
    return {};
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
  }, []);

  const user = session?.user ?? null;
  const displayName =
    (user?.user_metadata?.full_name as string | undefined) ||
    (user?.user_metadata?.name as string | undefined) ||
    user?.email ||
    'Student';

  return { user, displayName, authLoading, progress, saveSection, signIn, signOut, syncing };
}
