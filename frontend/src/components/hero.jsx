import { HiSparkles } from "react-icons/hi2";

function Hero() {
  return (
    <section className="border-b bg-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex items-center gap-3">

          <div className="bg-indigo-600 text-white h-12 w-12 rounded-2xl flex items-center justify-center text-2xl">
            🤖
          </div>

          <div>
            <h2 className="font-bold text-2xl">AI Career Coach</h2>
            <p className="text-slate-500">Resume Intelligence Platform</p>
          </div>

        </div>

        <div className="mt-16">

          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
            <HiSparkles />
            AI Powered Analysis
          </div>

          <h1 className="mt-6 text-6xl font-black leading-tight text-slate-900">
            Get More Interviews,
            <br />
            <span className="text-indigo-600">Not More Rejections.</span>
          </h1>

          <p className="mt-6 text-xl text-slate-500 max-w-3xl leading-9">
            Upload your resume, compare it against any job description,
            discover missing skills, improve your ATS score and prepare
            for interviews with AI.
          </p>

        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
            <h3 className="font-bold text-lg mb-4">Quick Features</h3>
            <div className="space-y-3">
              <Feature title="ATS Analysis" />
              <Feature title="Skill Gap Detection" />
              <Feature title="Interview Questions" />
              <Feature title="Learning Roadmap" />
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
            <h3 className="font-bold text-lg mb-3">How it works</h3>
            <p className="text-slate-500 text-sm leading-6">
              Our AI scans your resume, compares it semantically against the job description using NLP, and identifies exact skill gaps — no generic keyword matching.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-6">
            <h3 className="text-lg font-bold">Ready?</h3>
            <p className="opacity-90 mt-2 text-sm leading-6">
              Upload your resume and receive an AI-powered analysis in seconds.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

function Feature({ title }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
      <p>{title}</p>
    </div>
  );
}

export default Hero;