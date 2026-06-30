function JobDescription({ jobDescription, setJobDescription }) {
  return (
    <div className="bg-white rounded-3xl border shadow-sm p-8">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-bold">
            Job Description
          </h2>

          <p className="text-slate-500 mt-2">
            Paste the role you're targeting
          </p>

        </div>

        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
          Step 2
        </div>

      </div>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the full job description here..."
        rows={8}
        className="mt-10 w-full border-2 border-slate-200 rounded-3xl p-6 text-slate-700 focus:outline-none focus:border-indigo-500 transition resize-none"
      />

      <div className="mt-4 text-sm text-slate-400">
        {jobDescription.length} characters
      </div>

    </div>
  );
}

export default JobDescription;