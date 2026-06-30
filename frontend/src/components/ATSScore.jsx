function ATSScore({ score }) {
  const getColor = () => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const getLabel = () => {
    if (score >= 75) return "Excellent Match";
    if (score >= 50) return "Good Match";
    return "Needs Improvement";
  };

  return (
    <div className="bg-white rounded-3xl border shadow-sm p-8 text-center">
      <h3 className="text-slate-500 font-medium mb-4">ATS Match Score</h3>
      
      <div className={`text-7xl font-black ${getColor()}`}>
        {score}%
      </div>

      <p className={`mt-3 font-semibold ${getColor()}`}>
        {getLabel()}
      </p>

      <div className="mt-6 w-full bg-slate-100 rounded-full h-3">
        <div 
          className={`h-3 rounded-full transition-all ${
            score >= 75 ? "bg-green-500" : score >= 50 ? "bg-amber-500" : "bg-red-500"
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default ATSScore;