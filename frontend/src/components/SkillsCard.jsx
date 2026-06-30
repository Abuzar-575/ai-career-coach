import { useState } from "react";
import { FiChevronDown, FiCheck, FiX } from "react-icons/fi";

function SkillsCard({ title, skills, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMatched = type === "matched";

  return (
    <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6"
      >
        <div className="flex items-center gap-3">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isMatched ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
            {isMatched ? <FiCheck /> : <FiX />}
          </div>
          <h3 className="font-bold text-lg text-slate-800">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            {skills.length}
          </span>
          <FiChevronDown className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-2">
          {skills.length === 0 && (
            <p className="text-slate-400 text-sm">None found</p>
          )}
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm bg-slate-50 text-slate-700"
            >
              {isMatched ? <FiCheck className="text-green-600" /> : <FiX className="text-red-500" />}
              <span className="capitalize">{skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillsCard;