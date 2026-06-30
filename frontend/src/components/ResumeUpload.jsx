import { useState } from "react";
import { FiUploadCloud, FiCheckCircle } from "react-icons/fi";

function ResumeUpload({ file, setFile }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate/15 p-8">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display text-2xl font-semibold text-ink">Upload resume</h3>
        <span className="bg-forest-light text-forest text-xs font-medium px-3 py-1 rounded-full">
          Step 1
        </span>
      </div>
      <p className="text-slate text-sm mb-6">PDF files only</p>

      <label
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`block border-2 border-dashed rounded-xl py-14 text-center cursor-pointer transition-colors ${
          isDragging ? "border-forest bg-forest-light/40" : "border-slate/25 hover:border-forest/50"
        }`}
      >
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="w-14 h-14 rounded-full bg-forest-light flex items-center justify-center mx-auto mb-4">
          <FiUploadCloud className="text-forest text-2xl" />
        </div>
        <p className="font-display text-lg font-semibold text-ink mb-1">Drag and drop resume</p>
        <p className="text-slate text-sm">or click anywhere to browse</p>
      </label>

      {file && (
        <div className="mt-5 flex items-center gap-3 bg-forest-light rounded-xl px-4 py-3">
          <FiCheckCircle className="text-forest text-lg shrink-0" />
          <div>
            <p className="text-forest text-sm font-medium">{file.name}</p>
            <p className="text-forest/70 text-xs">Resume uploaded successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;