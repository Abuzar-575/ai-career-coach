import { useState } from "react";
import { FiChevronDown, FiMessageSquare } from "react-icons/fi";

function InterviewQuestions({ questions }) {
  const [isOpen, setIsOpen] = useState(false);

  const questionList = questions
    .split(/\d+\.\s/)
    .filter(q => q.trim().length > 0);

  return (
    <div className="bg-white rounded-2xl border-l-4 border-l-slate border border-slate/15 overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-paper text-slate flex items-center justify-center">
            <FiMessageSquare />
          </div>
          <h3 className="font-display text-xl font-semibold text-ink">Interview questions</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-paper text-slate font-medium">
            {questionList.length}
          </span>
          <FiChevronDown className={`text-slate transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <div className="px-8 pb-8 space-y-3">
          {questionList.map((question, index) => (
            <div key={index} className="flex gap-4 p-4 bg-paper rounded-xl">
              <div className="bg-ink text-paper h-7 w-7 rounded-full flex items-center justify-center text-sm font-mono flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-ink pt-0.5 text-sm">{question.trim()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InterviewQuestions;