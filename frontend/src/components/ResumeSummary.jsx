import { FiFileText } from "react-icons/fi";

function ResumeSummary({ summary }) {
  return (
    <div className="bg-white rounded-2xl border border-slate/15 p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-forest-light text-forest flex items-center justify-center">
          <FiFileText />
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">AI summary</h3>
      </div>
      <p className="text-slate leading-7 text-sm">{summary}</p>
    </div>
  );
}

export default ResumeSummary;