import { useState } from "react";
import Hero from "./components/Hero";
import ResumeUpload from "./components/ResumeUpload";
import JobDescription from "./components/JobDescription";
import AnalyzeButton from "./components/AnalyzeButton";
import { analyzeResume } from "./services/api";
import ATSScore from "./components/ATSScore";
import SkillsCard from "./components/SkillsCard";
import InterviewQuestions from "./components/InterviewQuestions";
import ResumeSummary from "./components/ResumeSummary";
import BulletImprovements from "./components/BulletImprovements";
import LearningRoadmap from "./components/LearningRoadmap";
import Recommendation from "./components/Recommendation";

function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [visible, setVisible] = useState({
    ats: false, skills: false, summary: false,
    questions: false, bullets: false, roadmap: false, recommendation: false,
  });

  const revealResults = () => {
    const order = ["ats", "skills", "summary", "questions", "bullets", "roadmap", "recommendation"];
    order.forEach((key, i) => {
      setTimeout(() => {
        setVisible((prev) => ({ ...prev, [key]: true }));
      }, i * 400);
    });
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setResult(null);
    setVisible({ ats: false, skills: false, summary: false,
      questions: false, bullets: false, roadmap: false, recommendation: false });
    try {
      const data = await analyzeResume(file, jobDescription);
      setResult(data);
      revealResults();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check the console.");
    } finally {
      setLoading(false);
    }
  };

  const fadeClass = (key) =>
    `transition-all duration-500 ${
      visible[key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;

  return (
    <div className="min-h-screen bg-paper">
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <ResumeUpload file={file} setFile={setFile} />
          <JobDescription jobDescription={jobDescription} setJobDescription={setJobDescription} />
        </div>

        <div className="mt-8">
          <AnalyzeButton
            onAnalyze={handleAnalyze}
            loading={loading}
            disabled={!file || !jobDescription}
          />
        </div>

        {result && (
          <div className="mt-8 space-y-8">
            <div className={fadeClass("ats")}>
              <ATSScore score={result.ats_score} />
            </div>

            <div className={fadeClass("summary")}>
              <ResumeSummary summary={result.summary} />
            </div>

            <div className={fadeClass("skills")}>
              <div className="grid md:grid-cols-2 gap-8">
                <SkillsCard title="Matched Skills" skills={result.matched_skills || []} type="matched" />
                <SkillsCard title="Missing Skills" skills={result.missing_skills} type="missing" />
              </div>
            </div>

            <div className={fadeClass("questions")}>
              <InterviewQuestions questions={result.questions} />
            </div>

            <div className={fadeClass("bullets")}>
              <BulletImprovements improvements={result.bullet_improvements} />
            </div>

            <div className={fadeClass("roadmap")}>
              <LearningRoadmap roadmap={result.roadmap} />
            </div>

            <div className={fadeClass("recommendation")}>
              <Recommendation data={result.recommendation} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;