function AnalyzeButton({ onAnalyze, loading, disabled }) {
  return (
    <button
      onClick={onAnalyze}
      disabled={disabled || loading}
      className="w-full bg-forest text-paper rounded-2xl py-5 text-lg font-display font-semibold hover:bg-forest/90 transition disabled:bg-slate/20 disabled:text-slate disabled:cursor-not-allowed"
    >
      {loading ? "Analyzing..." : "Analyze resume"}
    </button>
  );
}

export default AnalyzeButton;