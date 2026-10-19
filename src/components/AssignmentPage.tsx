import abPdf from '@/assets/assumption-buster-student-guide.pdf.asset.json';
import abHtml from '@/content/assumption-buster.html?raw';
import { withAutosave } from '@/lib/assignment-autosave';
import rebusHtml from '@/content/rebus-studio.html?raw';
import interviewHtml from '@/content/customer-interview-lab.html?raw';
import rebusPdf from '@/assets/rebus-studio-student-guide.pdf.asset.json';

const DOCS = {
  'assumption-buster': { title: 'Assumption Buster', html: abHtml, pdfUrl: abPdf.url, pdfName: 'Assumption-Buster-Student-Guide.pdf' },
  'rebus-studio': { title: 'Entrepreneurial Rebus Studio', html: rebusHtml, pdfUrl: rebusPdf.url, pdfName: 'Rebus-Studio-Student-Guide.pdf' },
  'customer-interview-lab': { title: 'Customer Interview Lab', html: interviewHtml },
} as const;
import { ArrowLeft, FileDown } from 'lucide-react';

export default function AssignmentPage({ highContrast, onBack, assignment = 'assumption-buster' }: { highContrast: boolean; onBack?: () => void; assignment?: keyof typeof DOCS }) {
  const doc = DOCS[assignment];
  const { title, html } = doc;
  const pdfUrl = 'pdfUrl' in doc ? doc.pdfUrl : undefined;
  const pdfName = 'pdfName' in doc ? doc.pdfName : 'Student-Guide.pdf';
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
      {pdfUrl && (
        <div className={`flex flex-wrap items-center gap-3 rounded-xl p-3 text-sm ${highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#E94928]/10 border border-[#E94928]/35 text-[#414042]'}`}>
          <FileDown className={`w-5 h-5 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`} />
          <span>Prefer to read it on paper? The full student guide is also available as a PDF.</span>
          <a href={pdfUrl} target="_blank" rel="noreferrer" download={pdfName}
            className={`ml-auto inline-block px-4 py-2 rounded-xl font-bold ${highContrast ? 'bg-yellow-400 text-black' : 'bg-[#E94928] text-white hover:bg-[#E94928]/90'}`}>
            View / Download PDF
          </a>
        </div>
      )}
      <div className={`rounded-xl p-4 text-sm ${highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#EFA835]/15 border border-[#EFA835]/40 text-[#414042]'}`}>
        <p className="font-bold">How to turn this in:</p>
        <ol className="list-decimal ml-5 mt-1 space-y-0.5">
          <li>Fill out every part of the assignment below.</li>
          <li>Click <b>Submit</b> or <b>Print / Save as PDF</b>, then choose <b>"Save as PDF"</b> as the destination.</li>
          <li>Email the PDF to your teacher.</li>
        </ol>
        <a href={`mailto:pietro.valastro@neiacademy.org?subject=${encodeURIComponent(title + " Assignment")}`}
          className={`mt-3 inline-block px-4 py-2 rounded-xl font-bold ${highContrast ? 'bg-yellow-400 text-black' : 'bg-[#C51C63] text-white'}`}>
          Email my PDF to my teacher
        </a>
      </div>
      <iframe
        title={`${title} Assignment`}
        srcDoc={withAutosave(html, assignment)}
        sandbox="allow-scripts allow-forms allow-modals allow-same-origin allow-popups"
        className={`w-full rounded-2xl bg-white ${highContrast ? 'border-2 border-yellow-400' : 'border border-[#414042]/15 shadow-md'}`}
        style={{ height: '85vh', minHeight: 700 }}
      />
    </div>
  );
}
