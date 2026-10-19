import html from '@/content/assumption-buster.html?raw';

export default function AssignmentPage({ highContrast }: { highContrast: boolean }) {
  return (
    <div className="space-y-4">
      <h2 className={`text-2xl font-bold ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>10/19/26 Assignment</h2>
      <div className={`rounded-xl p-4 text-sm ${highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#EFA835]/15 border border-[#EFA835]/40 text-[#414042]'}`}>
        <p className="font-bold">How to turn this in:</p>
        <ol className="list-decimal ml-5 mt-1 space-y-0.5">
          <li>Fill out every part of the assignment below.</li>
          <li>Click <b>Submit</b> or <b>Print / Save as PDF</b>, then choose <b>"Save as PDF"</b> as the destination.</li>
          <li>Email the PDF to your teacher.</li>
        </ol>
        <a href="mailto:pietro.valastro@neiacademy.org?subject=10%2F19%2F26%20Assignment%20-%20Assumption%20Buster"
          className={`mt-3 inline-block px-4 py-2 rounded-xl font-bold ${highContrast ? 'bg-yellow-400 text-black' : 'bg-[#C51C63] text-white'}`}>
          Email my PDF to Mr. Valastro
        </a>
      </div>
      <iframe
        title="Assumption Buster Assignment"
        srcDoc={html}
        sandbox="allow-scripts allow-forms allow-modals allow-same-origin allow-popups"
        className={`w-full rounded-2xl bg-white ${highContrast ? 'border-2 border-yellow-400' : 'border border-[#414042]/15 shadow-md'}`}
        style={{ height: '85vh', minHeight: 700 }}
      />
    </div>
  );
}
