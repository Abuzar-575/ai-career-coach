export default function Hero() {
  return (
    <div className="bg-paper">

      {/* ── Wordmark nav ── */}
      <nav className="px-6 py-4 border-b border-ink/10 flex items-center justify-between">
        <span className="font-display text-lg font-semibold text-ink tracking-tight">
          AI Career Coach
        </span>
        <span className="text-xs text-slate font-mono uppercase tracking-widest hidden md:block">
          Resume · ATS · Interview Prep
        </span>
      </nav>

      {/* ── Hero body ── */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-block bg-forest text-forest-light text-xs font-medium px-3 py-1.5 rounded mb-5 tracking-wide">
            AI-powered analysis
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-ink mb-4">
            Know exactly<br />where you stand.
          </h1>
          <p className="text-slate text-[15px] leading-relaxed max-w-md mb-6">
            Upload your resume, paste any job description, and get a precise
            match score, skill gaps, and an interview prep plan.
          </p>
        </div>

        <div className="bg-ink rounded-xl p-7 flex flex-col items-center">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="58" fill="none" stroke="#2B3440" strokeWidth="10" />
            <circle
              cx="70" cy="70" r="58" fill="none"
              stroke="#B8854A" strokeWidth="10" strokeLinecap="round"
              strokeDasharray="364" strokeDashoffset="180"
              transform="rotate(-90 70 70)"
            />
            {/* x="70" y="70" + dominantBaseline="central" = perfect center */}
            <text
              x="70" y="66"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="22" fontWeight="600" fill="#F7F5EF"
              fontFamily="'JetBrains Mono', monospace"
            >
              --
            </text>
            <text x="70" y="84" textAnchor="middle" fontSize="11" fill="#8A8F98">
              your score awaits
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}