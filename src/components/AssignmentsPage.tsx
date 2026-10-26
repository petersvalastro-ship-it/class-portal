import { ClipboardList, ArrowRight, CalendarDays, Sparkles } from 'lucide-react';

const WEEKS = [
  { id: 'oct26', label: 'This Week', dates: 'Monday, October 26 – Friday, October 30, 2026', current: true },
  { id: 'oct19', label: 'Last Week', dates: 'Monday, October 19 – Friday, October 23, 2026', current: false },
];

const ASSIGNMENTS = [
  {
    id: 'founders-of-learning',
    week: 'oct26',
    title: 'Founders of Learning: Build, Teach, Improve',
    due: 'Monday, October 26 – Friday, October 30, 2026',
    focus: 'Teaching others · Feedback & iteration',
    description:
      'With your partner, plan, build, test and revise a 10-minute entrepreneurship lesson: plan Monday, build and test Tuesday, revise Thursday, final lesson ready Friday. Presentations begin next week. Click Submit to Pietro when your planning guide is finished.',
  },
  {
    id: 'assumption-buster',
    week: 'oct19',
    title: 'Assumption Buster',
    due: 'Monday, October 19, 2026',
    focus: 'Questioning assumptions · Evidence-based thinking',
    description:
      'Spot a common assumption people make about entrepreneurs or business, test it with research, and explain what you found using evidence from our class case studies. Click Submit to Pietro when you are finished.',
  },
  {
    id: 'rebus-studio',
    week: 'oct19',
    title: 'Entrepreneurial Rebus Studio',
    due: 'Tuesday, October 20, 2026',
    focus: 'Creativity · Communicating ideas',
    description:
      'Read the case study, design three entrepreneurship rebus puzzles, peer-test and revise them, then finish the exit ticket. Click Submit to Pietro when you are finished.',
  },
  {
    id: 'customer-interview-lab',
    week: 'oct19',
    title: 'Customer Interview Lab',
    due: 'Thursday, October 22, 2026',
    focus: 'Empathy · Turning assumptions into evidence',
    description:
      'Pick an assumption about your customer, plan and run a short customer interview, record what you heard, and decide what to do next based on the evidence. Click Submit to Pietro when you are finished.',
  },
  {
    id: 'friday-learning-loop',
    week: 'oct19',
    title: 'Friday Learning Loop: Week in Four Frames',
    due: 'Friday, October 23, 2026',
    focus: 'Connecting ideas · Collaboration · Reflection',
    description:
      'Warm up with the Brain Smart Start rebus, then work with your team to connect what we noticed, asked, learned and decided this week, create a new rebus, swap feedback in a gallery, and finish an individual reflection. Click Submit to Pietro when you are finished.',
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

      {WEEKS.map((w) => (
        <section key={w.id} className="space-y-3">
          <div className={`rounded-2xl px-5 py-4 flex flex-wrap items-center gap-3 ${w.current ? (hc ? 'bg-yellow-400 text-black' : 'bg-[#C51C63] text-white shadow-md') : (hc ? 'bg-zinc-800 border-2 border-white/40 text-white' : 'bg-[#414042]/10 border border-[#414042]/20 text-[#414042]')}`}>
            <CalendarDays className="w-6 h-6 shrink-0" />
            <div>
              <h3 className="text-xl font-extrabold leading-tight">{w.label}</h3>
              <p className="text-sm font-semibold opacity-90">{w.dates}</p>
            </div>
            {w.current && <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${hc ? 'bg-black text-yellow-300' : 'bg-[#EFA835] text-[#414042]'}`}>Current</span>}
          </div>
          <div className={`grid grid-cols-1 gap-4 ${w.current ? '' : 'opacity-90'}`}>
{ASSIGNMENTS.filter((a) => a.week === w.id).map((a) => (
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
        </section>
      ))}

      <div className={`rounded-2xl p-4 text-sm ${hc ? 'bg-zinc-900/60 border border-yellow-400/50 text-white/85' : 'bg-[#EFA835]/10 border border-[#EFA835]/40 text-[#414042]/80'}`}>
        <Sparkles className="w-4 h-4 inline mr-1.5 -mt-0.5" />
        New assignments will appear here as they are given in class.
      </div>
    </div>
  );
}
