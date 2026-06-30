const VERDICT_CONFIG = {
  YES: {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    text: "text-emerald-700",
    badge: "Strong Candidate",
  },

  MAYBE: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    text: "text-amber-700",
    badge: "Potential Candidate",
  },

  NO: {
    bg: "bg-red-50",
    border: "border-red-300",
    text: "text-red-700",
    badge: "Needs Improvement",
  },
};

export default function Recommendation({ data }) {
  if (!data) return null;

  const { stars, strength, verdict, reason } = data;

  const cfg = VERDICT_CONFIG[verdict] || VERDICT_CONFIG.MAYBE;

  return (
    <section className="max-w-7xl mx-auto mt-8">

      <div className="bg-[#181C23] rounded-[28px] shadow-2xl px-12 py-7">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-xs text-slate-400">
            Overall Recommendation
          </p>

          <div className="flex justify-center gap-1 mt-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={`text-3xl ${
                  n <= stars ? "text-amber-400" : "text-slate-600"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-bold text-white mt-3">
            {strength}
          </h1>

          <p className="text-slate-400 text-lg mt-1">
            AI hiring recommendation based on your resume analysis
          </p>

        </div>

        {/* Decision Card */}

        <div className="flex justify-center mt-7">

          <div
            className={`${cfg.bg} ${cfg.border}
            border rounded-2xl
            w-[560px]
            h-[95px]
            grid grid-cols-2
            overflow-hidden`}
          >

            {/* Left */}

            <div className="flex flex-col items-center justify-center">

              <p className="uppercase tracking-[0.3em] text-[13px] text-slate-500 font-medium">
                Hiring Decision
              </p>

              <h2 className={`text-[2.6rem] leading-none font-bold mt-1 ${cfg.text}`}>
                {verdict}
              </h2>

            </div>

            {/* Right */}

            <div className="border-l border-slate-200 flex flex-col justify-center items-center">

              <h3 className={`text-[1.7rem] font-semibold ${cfg.text}`}>
                {cfg.badge}
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                ATS Score + AI Evaluation
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-700 my-7"></div>

        {/* Reason */}

        <div className="max-w-4xl mx-auto">

          <p className="text-center text-slate-300 text-lg leading-9">
            {reason}
          </p>

        </div>

      </div>

    </section>
  );
}