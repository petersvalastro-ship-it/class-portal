import { useMemo, useState } from 'react';
import { BookOpen, ExternalLink, Search, MessageCircleQuestion } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/case-studies';

const TRAITS = ['Curiosity', 'Resilience', 'Empathy', 'Resourcefulness', 'Leadership', 'Creativity', 'Initiative', 'Iteration', 'Partnerships'];

export default function CaseStudiesPage({ highContrast }: { highContrast: boolean }) {
  const [q, setQ] = useState('');
  const [trait, setTrait] = useState<string | null>(null);
  const hc = highContrast;

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return CASE_STUDIES.filter((c) => {
      if (trait && !c.mindset.toLowerCase().includes(trait.toLowerCase())) return false;
      return !s || `${c.founder} ${c.company} ${c.mindset}`.toLowerCase().includes(s);
    });
  }, [q, trait]);

  const pill = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
      hc
        ? active ? 'bg-yellow-400 text-black border-white' : 'bg-black text-white border-yellow-400'
        : active ? 'bg-[#C51C63] text-white border-[#C51C63]' : 'bg-white text-[#414042] border-[#414042]/20 hover:border-[#C51C63]'
    }`;

  return (
    <div className="space-y-5">
      <div>
        <h2 className={`text-2xl font-bold flex items-center gap-2 ${hc ? 'text-yellow-300' : 'text-[#414042]'}`}>
          <BookOpen className={hc ? 'text-yellow-300' : 'text-[#C51C63]'} />
          Case Studies
        </h2>
        <p className={`mt-1 text-sm ${hc ? 'text-white' : 'text-[#414042]/70'}`}>
          NEIA Entrepreneurship Companion Guide (Grades 7–8) – 25 Direct Case Readings
        </p>
      </div>
      <div className="relative max-w-xl">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${hc ? 'text-yellow-300' : 'text-[#414042]/50'}`} />
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title, founder, or mindset trait" aria-label="Search case studies"
          className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm outline-none ${hc ? 'bg-black text-white border-2 border-yellow-400' : 'bg-white border border-[#414042]/20 focus:border-[#C51C63]'}`} />
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by mindset trait">
        <button className={pill(trait === null)} aria-pressed={trait === null} onClick={() => setTrait(null)}>All</button>
        {TRAITS.map((t) => (
          <button key={t} className={pill(trait === t)} aria-pressed={trait === t} onClick={() => setTrait(trait === t ? null : t)}>{t}</button>
        ))}
      </div>
      <p className={`text-xs ${hc ? 'text-white' : 'text-[#414042]/60'}`}>{list.length} of {CASE_STUDIES.length} case studies</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((c) => (
          <article key={c.n} className={`flex flex-col rounded-2xl p-5 ${hc ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-white border border-[#414042]/15 shadow-md'}`}>
            <div className={`text-xs font-bold uppercase tracking-wide ${hc ? 'text-yellow-300' : 'text-[#E94928]'}`}>Case {c.n}</div>
            <h3 className={`mt-1 text-lg font-bold leading-snug ${hc ? 'text-white' : 'text-[#414042]'}`}>{c.company}</h3>
            <p className={`text-sm ${hc ? 'text-white/80' : 'text-[#414042]/70'}`}>{c.founder}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.mindset.split(/,\s*(?:and\s+)?|\s+and\s+/).filter(Boolean).map((m) => (
                <span key={m} className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${hc ? 'bg-yellow-400 text-black' : 'bg-[#EFA835]/20 text-[#414042]'}`}>
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </span>
              ))}
            </div>
            <p className={`mt-3 text-sm ${hc ? 'text-white' : 'text-[#414042]/85'}`}><span className="font-semibold">Reading focus: </span>{c.focus}</p>
            <div className={`mt-3 rounded-xl p-3 text-sm flex gap-2 ${hc ? 'bg-black border border-yellow-400' : 'bg-[#C51C63]/5 border border-[#C51C63]/15'}`}>
              <MessageCircleQuestion className={`w-4 h-4 shrink-0 mt-0.5 ${hc ? 'text-yellow-300' : 'text-[#C51C63]'}`} />
              <span><span className="font-semibold">Presentation question: </span>{c.question}</span>
            </div>
            <div className="flex-1" />
            <a href={c.link} target="_blank" rel="noopener noreferrer"
              className={`mt-4 self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold ${hc ? 'bg-yellow-400 text-black border-2 border-white' : 'bg-[#C51C63] text-white shadow-md shadow-[#C51C63]/20 hover:bg-[#C51C63]/90'}`}>
              <ExternalLink className="w-4 h-4" /> Read Case Study
            </a>
          </article>
        ))}
      </div>
      {list.length === 0 && <p className={`text-sm ${hc ? 'text-white' : 'text-[#414042]/70'}`}>No case studies match. Try another search or trait.</p>}
    </div>
  );
}
