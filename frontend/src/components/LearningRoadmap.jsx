import { useState } from "react";
import { FiChevronDown, FiMap } from "react-icons/fi";

function LearningRoadmap({ roadmap }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border-l-4 border-l-forest border border-slate/15 overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-forest-light text-forest flex items-center justify-center">
            <FiMap />
          </div>
          <h3 className="font-display text-xl font-semibold text-ink">Learning roadmap</h3>
        </div>
        <FiChevronDown className={`text-slate transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="px-8 pb-8">
          <pre className="whitespace-pre-wrap text-sm text-slate leading-7 font-sans">
            {roadmap}
          </pre>
        </div>
      )}
    </div>
  );
}

export default LearningRoadmap;