import { useState } from "react";
import { FiChevronDown, FiMap } from "react-icons/fi";

function LearningRoadmap({ roadmap }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
            <FiMap />
          </div>
          <h3 className="font-bold text-xl text-slate-800">Learning Roadmap</h3>
        </div>
        <FiChevronDown className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="px-8 pb-8">
          <pre className="whitespace-pre-wrap text-sm text-slate-600 leading-7 font-sans">
            {roadmap}
          </pre>
        </div>
      )}
    </div>
  );
}

export default LearningRoadmap;