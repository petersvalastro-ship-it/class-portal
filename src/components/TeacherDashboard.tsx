import { useEffect, useMemo, useState } from 'react';
import { Users, Trophy, BookOpen, RefreshCw, ClipboardList, Search, AlertTriangle, KeyRound, Check } from 'lucide-react';
import { getClassProgress, resetStudentPassword, type StudentRow } from '@/lib/teacher.functions';
import { LAUNCHPAD_CHAPTERS, ALL_LAUNCHPAD_SECTION_IDS } from '@/lib/launchpad-content';

type Props = { highContrast: boolean };

const SECTION_TITLES: Record<string, string> = Object.fromEntries(
  LAUNCHPAD_CHAPTERS.flatMap((chapter) =>
    chapter.sections.map((section) => [section.id, `${section.label} ${section.title}`]),
  ),
);

export default function TeacherDashboard({ highContrast }: Props) {
  const [rows, setRows] = useState<StudentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [openStudent, setOpenStudent] = useState<string | null>(null);
  const [resetFor, setResetFor] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [resetBusy, setResetBusy] = useState(false);
  const [resetError, setResetError] = useState<string | null>(null);
  const [resetDone, setResetDone] = useState<string | null>(null);

  const submitReset = async (userId: string) => {
    setResetBusy(true);
    setResetError(null);
    try {
      await resetStudentPassword({ data: { userId, newPassword } });
      setResetDone(userId);
      setResetFor(null);
      setNewPassword('');
    } catch (err) {
      setResetError(err instanceof Error ? err.message : 'Could not reset that password.');
    } finally {
      setResetBusy(false);
    }
  };

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getClassProgress();
      setRows(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load class progress.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => row.name.toLowerCase().includes(q) || row.email.toLowerCase().includes(q));
  }, [rows, query]);

  const totals = useMemo(
    () => ({
      students: rows.length,
      xp: rows.reduce((sum, row) => sum + row.xp, 0),
      sections: rows.reduce((sum, row) => sum + row.sectionsDone, 0),
      notes: rows.reduce((sum, row) => sum + row.notes.length, 0),
    }),
    [rows],
  );

  const card = highContrast
    ? 'bg-zinc-900 border-2 border-yellow-400 text-white'
    : 'bg-white border border-[#414042]/12 text-[#414042]';
  const heading = highContrast ? 'text-yellow-300' : 'text-[#414042]';
  const muted = highContrast ? 'text-yellow-200' : 'text-[#414042]/70';
  const totalSections = ALL_LAUNCHPAD_SECTION_IDS.length;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${heading}`}>
            <Users className={highContrast ? 'text-yellow-300' : 'text-[#C51C63]'} />
            Teacher Dashboard
          </h2>
          <p className={`text-sm ${muted}`}>Class progress for every student who has signed in — XP, completed sections and their section notes.</p>
        </div>
        <button
          onClick={load}
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition ${
            highContrast ? 'bg-yellow-400 text-black' : 'bg-[#414042] text-white hover:bg-[#414042]/90'
          }`}
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
        </button>
      </div>

      {error && (
        <div className={`rounded-xl p-4 text-sm flex items-start gap-2 ${
          highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-200' : 'bg-[#E94928]/10 border border-[#E94928]/30 text-[#414042]'
        }`}>
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" /> {error}
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: Users, label: 'Students signed in', value: totals.students },
          { icon: Trophy, label: 'Total class XP', value: totals.xp },
          { icon: BookOpen, label: 'Sections completed', value: totals.sections },
          { icon: ClipboardList, label: 'Notes written', value: totals.notes },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl p-4 ${card}`}>
            <stat.icon className={`w-5 h-5 mb-2 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`} />
            <div className="text-2xl font-black">{stat.value}</div>
            <div className={`text-xs ${muted}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={`rounded-xl p-4 ${card}`}>
        <label className="flex items-center gap-2 text-sm">
          <Search className={`w-4 h-4 ${muted}`} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by student name or email"
            className={`w-full bg-transparent outline-none ${highContrast ? 'placeholder:text-yellow-200/60' : 'placeholder:text-[#414042]/40'}`}
          />
        </label>
      </div>

      {loading && rows.length === 0 ? (
        <p className={`text-sm ${muted}`}>Loading class progress…</p>
      ) : filtered.length === 0 ? (
        <p className={`text-sm ${muted}`}>No students to show yet. Progress appears here once students sign in and start working.</p>
      ) : (
        <div className="space-y-3">
          {filtered.map((row) => {
            const open = openStudent === row.userId;
            return (
              <div key={row.userId} className={`rounded-xl overflow-hidden ${card}`}>
                <button
                  onClick={() => setOpenStudent(open ? null : row.userId)}
                  className="w-full text-left px-4 py-3 flex flex-wrap items-center justify-between gap-3"
                >
                  <div>
                    <div className="font-bold">{row.name}</div>
                    <div className={`text-xs ${muted}`}>{row.email || 'no email on file'}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span><strong>{row.xp}</strong> <span className={muted}>XP</span></span>
                    <span><strong>{row.sectionsDone}</strong>/{totalSections} <span className={muted}>sections</span></span>
                    <span><strong>{row.masteredCount}</strong> <span className={muted}>terms</span></span>
                    <span><strong>{row.scenariosCount}</strong> <span className={muted}>scenarios</span></span>
                    <span className={`text-xs ${muted}`}>{row.notes.length} notes</span>
                  </div>
                </button>
                {open && (
                  <div className={`px-4 pb-4 space-y-2 text-sm ${highContrast ? 'border-t-2 border-yellow-400' : 'border-t border-[#414042]/10'}`}>
                    {row.notes.length === 0 ? (
                      <p className={`pt-3 ${muted}`}>This student has not written any section notes yet.</p>
                    ) : (
                      row.notes.map((note) => (
                        <div key={note.sectionId} className="pt-3">
                          <div className={`text-xs font-bold ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}>
                            {SECTION_TITLES[note.sectionId] || note.sectionId}
                          </div>
                          <p className="whitespace-pre-wrap">{note.note}</p>
                        </div>
                      ))
                    )}
                    {row.updatedAt && (
                      <p className={`pt-2 text-xs ${muted}`}>Last activity: {new Date(row.updatedAt).toLocaleString()}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
