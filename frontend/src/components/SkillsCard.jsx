import { useState } from "react";
import { FiChevronDown, FiCheck, FiX } from "react-icons/fi";

function SkillsCard({ title, skills, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMatched = type === "matched";

  return (
    <div className={`bg-white rounded-2xl border-l-4 border border-slate/15 overflow-hidden ${isMatched ? "border-l-forest" : "border-l-brass"}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isMatched ? "bg-forest-light text-forest" : "bg-brass/15 text-brass"}`}>
            {isMatched ? <FiCheck /> : <FiX />}
          </div>
          <h3 className="font-display font-semibold text-base text-ink">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-paper text-slate font-medium">
            {skills.length}
          </span>
          <FiChevronDown className={`text-slate transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-2">
          {skills.length === 0 && <p className="text-slate/60 text-sm">None found</p>}
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-paper text-ink">
              {isMatched ? <FiCheck className="text-forest" /> : <FiX className="text-brass" />}
              <span className="capitalize">{skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillsCard;