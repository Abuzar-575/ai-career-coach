function AnalyzeButton({ onAnalyze, loading, disabled }) {
  return (
    <button
      onClick={onAnalyze}
      disabled={disabled || loading}
      className="w-full bg-indigo-600 text-white rounded-3xl py-5 text-lg font-bold hover:bg-indigo-700 transition disabled:bg-slate-300 disabled:cursor-not-allowed"
    >
      {loading ? "Analyzing..." : "Analyze Resume"}
    </button>
  );
}

export default AnalyzeButton;