import { useState } from "react";
import { FiChevronDown, FiEdit3 } from "react-icons/fi";

function BulletImprovements({ improvements }) {
  const [isOpen, setIsOpen] = useState(false);

  const pairs = improvements
    .split(/ORIGINAL:/)
    .filter(p => p.trim().length > 0)
    .map(p => {
      const [original, improved] = p.split("IMPROVED:");
      return { original: original?.trim(), improved: improved?.trim() };
    });

  return (
    <div className="bg-white rounded-2xl border-l-4 border-l-brass border border-slate/15 overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-brass/15 text-brass flex items-center justify-center">
            <FiEdit3 />
          </div>
          <h3 className="font-display text-xl font-semibold text-ink">Resume improvements</h3>
        </div>
        <FiChevronDown className={`text-slate transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="px-8 pb-8 space-y-5">
          {pairs.map((pair, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-paper text-slate p-3 rounded-xl text-sm">
                <span className="font-medium text-ink">Original: </span>{pair.original}
              </div>
              <div className="bg-forest-light text-forest p-3 rounded-xl text-sm">
                <span className="font-medium">Improved: </span>{pair.improved}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BulletImprovements;