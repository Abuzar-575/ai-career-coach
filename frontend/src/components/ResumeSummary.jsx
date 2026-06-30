import { FiFileText } from "react-icons/fi";

function ResumeSummary({ summary }) {
  return (
    <div className="bg-white rounded-3xl border shadow-sm p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
          <FiFileText />
        </div>
        <h3 className="font-bold text-xl text-slate-800">AI Summary</h3>
      </div>
      <p className="text-slate-600 leading-7">{summary}</p>
    </div>
  );
}

export default ResumeSummary;