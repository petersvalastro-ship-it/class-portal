import { ClipboardList, ArrowRight, CalendarDays, Sparkles } from 'lucide-react';

const ASSIGNMENTS = [
  {
    id: 'assumption-buster',
    title: 'Assumption Buster',
    due: 'Assigned October 19, 2026',
    focus: 'Questioning assumptions · Evidence-based thinking',
    description:
      'Spot a common assumption people make about entrepreneurs or business, test it with research, and explain what you found using evidence from our class case studies. Save your finished work as a PDF and email it to Mr. Valastro.',
  },
  {
    id: 'rebus-studio',
    title: 'Entrepreneurial Rebus Studio',
    due: 'Assigned October 19, 2026',
    focus: 'Creativity · Communicating ideas',
    description:
      'Read the case study, design three entrepreneurship rebus puzzles, peer-test and revise them, then finish the exit ticket. Save your finished work as a PDF and email it to Mr. Valastro.',
  },
];

export default function AssignmentsPage({ highContrast, onOpen }: { highContrast: boolean; onOpen: (id: string) => void }) {
  const hc = highContrast;
  const card = hc ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-white border border-[#414042]/15 shadow-md text-[#414042]';
  const accent = hc ? 'text-yellow-300' : 'text-[#C51C63]';
  const muted = hc ? 'text-white/85' : 'text-[#414042]/75';
  const badge = hc ? 'bg-yellow-400/20 border border-yellow-400 text-yellow-300' : 'bg-[#EFA835]/20 border border-[#EFA835]/50 text-[#414042]';
  const btn = hc ? 'bg-yellow-400 text-black border-2 border-white' : 'bg-[#C51C63] text-white shadow-md shadow-[#C51C63]/20 hover:bg-[#C51C63]/90';

  return (
    <div className="space-y-5">
      <div>
        <h2 className={`text-2xl font-bold flex items-center gap-2 ${hc ? 'text-yellow-300' : 'text-[#414042]'}`}>
          <ClipboardList className={accent} /> Assignments
        </h2>
        <p className={`mt-1 text-sm ${muted}`}>Class assignments for MS Entrepreneurship (Grades 7 &amp; 8). Open an assignment to complete it.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {ASSIGNMENTS.map((a) => (
          <div key={a.id} className={`rounded-2xl p-5 ${card}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${badge}`}>
                <CalendarDays className="w-3.5 h-3.5" /> {a.due}
              </span>
              <span className={`text-xs font-semibold uppercase tracking-wide ${hc ? 'text-yellow-300' : 'text-[#E94928]'}`}>{a.focus}</span>
            </div>
            <h3 className={`mt-3 text-xl font-bold ${hc ? 'text-white' : 'text-[#414042]'}`}>{a.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{a.description}</p>
            <button
              onClick={() => onOpen(a.id)}
              className={`mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition ${btn}`}
            >
              Open {a.title} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className={`rounded-2xl p-4 text-sm ${hc ? 'bg-zinc-900/60 border border-yellow-400/50 text-white/85' : 'bg-[#EFA835]/10 border border-[#EFA835]/40 text-[#414042]/80'}`}>
        <Sparkles className="w-4 h-4 inline mr-1.5 -mt-0.5" />
        New assignments will appear here as they are given in class.
      </div>
    </div>
  );
}
