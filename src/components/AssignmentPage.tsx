import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, FileDown } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { withAutosave } from '@/lib/assignment-autosave';
import { ASSIGNMENT_DOCS, type AssignmentKey } from '@/lib/assignment-docs';

function fmt(ts: string) {
  return new Date(ts).toLocaleString([], { weekday: 'long', hour: 'numeric', minute: '2-digit' });
}

export default function AssignmentPage({ highContrast, onBack, onNeedSignIn, assignment = 'assumption-buster' }: { highContrast: boolean; onBack?: () => void; onNeedSignIn?: () => void; assignment?: AssignmentKey }) {
  const doc = ASSIGNMENT_DOCS[assignment];
  const { title, html, pdfUrl, pdfName } = doc;
  const frame = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<string>('');

  const tell = (text: string) => { setStatus(text); frame.current?.contentWindow?.postMessage({ type: 'neia-submit-status', text }, '*'); };

  // Show the student's existing submission status.
  useEffect(() => {
    let alive = true;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;
      const { data } = await supabase.from('assignment_submission').select('submitted_at, submit_count').eq('student_id', session.user.id).eq('assignment_key', assignment).maybeSingle();
      if (alive && data) setStatus(`Submitted ${fmt(data.submitted_at)} ✓`);
    })();
    return () => { alive = false; };
  }, [assignment]);

  useEffect(() => {
    async function onMsg(e: MessageEvent) {
      if (e.source !== frame.current?.contentWindow || e.data?.type !== 'neia-submit') return;
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { tell('Sign in to your student account to submit — your work is saved.'); onNeedSignIn?.(); return; }
      const { data, error } = await supabase.from('assignment_submission')
        .upsert({ student_id: session.user.id, assignment_key: assignment, assignment_title: title, answers: e.data.answers ?? {} }, { onConflict: 'student_id,assignment_key' })
        .select('submitted_at, submit_count').single();
      if (error || !data) { tell('Could not submit — please try again, or use Print / Save as PDF.'); return; }
      tell(`${data.submit_count > 1 ? 'Resubmitted' : 'Submitted'} ${fmt(data.submitted_at)} ✓`);
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [assignment, title, onNeedSignIn]);

  return (
    <div className="space-y-4">
      {onBack && (
        <button
          onClick={onBack}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition ${
            highContrast
              ? 'bg-yellow-400 text-black border-2 border-white'
              : 'bg-white border border-[#414042]/15 shadow-sm text-[#414042] hover:bg-[#414042]/5'
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Assignments
        </button>
      )}
      <h2 className={`text-2xl font-bold ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>{title}</h2>
      <div className={`flex flex-wrap items-center gap-3 rounded-xl p-3 text-sm ${highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#E94928]/10 border border-[#E94928]/35 text-[#414042]'}`}>
        <FileDown className={`w-5 h-5 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`} />
        <span>Prefer to read it on paper? The full student guide is also available as a PDF.</span>
        <a href={pdfUrl} target="_blank" rel="noreferrer" download={pdfName}
          className={`ml-auto inline-block px-4 py-2 rounded-xl font-bold ${highContrast ? 'bg-yellow-400 text-black' : 'bg-[#E94928] text-white hover:bg-[#E94928]/90'}`}>
          View / Download PDF
        </a>
      </div>
      <div className={`rounded-xl p-4 text-sm ${highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#EFA835]/15 border border-[#EFA835]/40 text-[#414042]'}`}>
        <p className="font-bold">How to turn this in:</p>
        <ol className="list-decimal ml-5 mt-1 space-y-0.5">
          <li>Sign in to your student account, then fill out every part of the assignment below — your answers save as you type.</li>
          <li>Click <b>Submit to Pietro</b>. Your work goes straight to your teacher. You can fix something and submit again.</li>
          <li>Backup: click <b>Print / Save as PDF</b> and email the PDF if submitting doesn't work.</li>
        </ol>
        {status && <p className={`mt-2 font-bold ${highContrast ? 'text-yellow-300' : 'text-[#61249a]'}`}>{status}</p>}
      </div>
      <iframe
        ref={frame}
        title={`${title} Assignment`}
        srcDoc={withAutosave(html, assignment, title)}
        sandbox="allow-scripts allow-forms allow-modals allow-same-origin allow-popups allow-downloads"
        className={`w-full rounded-2xl bg-white ${highContrast ? 'border-2 border-yellow-400' : 'border border-[#414042]/15 shadow-md'}`}
        style={{ height: '85vh', minHeight: 700 }}
      />
    </div>
  );
}
