import { useState } from "react";
import { FiChevronDown, FiMessageSquare } from "react-icons/fi";

function InterviewQuestions({ questions }) {
  const [isOpen, setIsOpen] = useState(false);

  const questionList = questions
    .split(/\d+\.\s/)
    .filter(q => q.trim().length > 0);

  return (
    <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <FiMessageSquare />
          </div>
          <h3 className="font-bold text-xl text-slate-800">Interview Questions</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            {questionList.length}
          </span>
          <FiChevronDown className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <div className="px-8 pb-8 space-y-3">
          {questionList.map((question, index) => (
            <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="bg-slate-900 text-white h-7 w-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-slate-700 pt-0.5 text-sm">{question.trim()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InterviewQuestions;