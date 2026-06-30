import { useState } from "react";
import { FiChevronDown, FiEdit3 } from "react-icons/fi";

function BulletImprovements({ improvements }) {
  const [isOpen, setIsOpen] = useState(false);

  // Parse "ORIGINAL: ... IMPROVED: ..." pairs
  const pairs = improvements
    .split(/ORIGINAL:/)
    .filter(p => p.trim().length > 0)
    .map(p => {
      const [original, improved] = p.split("IMPROVED:");
      return {
        original: original?.trim(),
        improved: improved?.trim()
      };
    });

  return (
    <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
            <FiEdit3 />
          </div>
          <h3 className="font-bold text-xl text-slate-800">Resume Improvements</h3>
        </div>
        <FiChevronDown className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="px-8 pb-8 space-y-5">
          {pairs.map((pair, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-red-50 text-red-700 p-3 rounded-xl text-sm">
                <span className="font-semibold">Original: </span>{pair.original}
              </div>
              <div className="bg-green-50 text-green-700 p-3 rounded-xl text-sm">
                <span className="font-semibold">Improved: </span>{pair.improved}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BulletImprovements;