function ATSScore({ score }) {
  const getColor = () => {
    if (score >= 75) return "#1F4D3D";
    if (score >= 50) return "#B8854A";
    return "#A32D2D";
  };

  const getLabel = () => {
    if (score >= 75) return "Excellent match";
    if (score >= 50) return "Good match";
    return "Needs improvement";
  };

  const color = getColor();
  const circumference = 2 * Math.PI * 58;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-ink rounded-2xl p-8 flex flex-col items-center">
      <h3 className="text-slate text-sm font-medium mb-4">ATS match score</h3>
      <svg width="160" height="160" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="58" fill="none" stroke="#2B3440" strokeWidth="10" />
        <circle
          cx="70" cy="70" r="58" fill="none"
          stroke={color} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 70 70)"
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
        {/* y="70" + dominantBaseline="central" fixes the offset */}
        <text
          x="70" y="70"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="22" fontWeight="600" fill="#F7F5EF"
          fontFamily="'JetBrains Mono', monospace"
        >
          {score}%
        </text>
      </svg>
      <p className="mt-3 font-medium" style={{ color }}>{getLabel()}</p>
    </div>
  );
}

export default ATSScore;