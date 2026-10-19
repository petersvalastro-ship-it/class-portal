import html from '@/content/assumption-buster.html?raw';

export default function AssignmentPage({ highContrast }: { highContrast: boolean }) {
  return (
    <div className="space-y-4">
      <h2 className={`text-2xl font-bold ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>10/19/26 Assignment</h2>
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
