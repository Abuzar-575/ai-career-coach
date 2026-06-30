function JobDescription({ jobDescription, setJobDescription }) {
  return (
    <div className="bg-white rounded-2xl border border-slate/15 p-8">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display text-2xl font-semibold text-ink">Job description</h3>
        <span className="bg-forest-light text-forest text-xs font-medium px-3 py-1 rounded-full">
          Step 2
        </span>
      </div>
      <p className="text-slate text-sm mb-6">Paste the role you're targeting</p>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the full job description here..."
        rows={10}
        className="w-full border border-slate/20 rounded-xl p-4 text-sm text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest resize-none"
      />

      <p className="text-slate/60 text-xs mt-3">{jobDescription.length} characters</p>
    </div>
  );
}

export default JobDescription;