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



function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const data = await analyzeResume(file, jobDescription);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check the console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6FB]">

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
    <ATSScore score={result.ats_score} />
    
    <ResumeSummary summary={result.summary} />

    <div className="grid md:grid-cols-2 gap-8">
      <SkillsCard title="Matched Skills" skills={result.matched_skills || []} type="matched" />
      <SkillsCard title="Missing Skills" skills={result.missing_skills} type="missing" />
    </div>

    <InterviewQuestions questions={result.questions} />
    <BulletImprovements improvements={result.bullet_improvements} />
    <LearningRoadmap roadmap={result.roadmap} />
  </div>
)}

      </div>

    </div>
  );
}

export default App;