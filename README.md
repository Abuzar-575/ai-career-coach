# AI Career Coach 🎯

An AI-powered resume analysis tool that helps job seekers optimize their resumes, prepare for interviews, and identify skill gaps — all in one place.

---

## Features

- **ATS Score** — Semantic similarity scoring between your resume and job description using Sentence Transformers (all-MiniLM-L6-v2)
- **Skill Matching** — Identifies matched and missing skills from the job description
- **AI Interview Questions** — Generates 10 role-specific technical interview questions focused on your skill gaps
- **Resume Summary** — Honest AI assessment of your fit for the role
- **Bullet Point Improvements** — Rewrites weak resume bullets with quantified impact
- **Learning Roadmap** — Week-by-week plan with resources to close your skill gaps

---

## Tech Stack

**Backend**
- FastAPI
- PyMuPDF (PDF parsing)
- spaCy + custom keyword matching (skill extraction)
- Sentence Transformers — all-MiniLM-L6-v2 (semantic ATS scoring)
- Groq API — llama-3.3-70b-versatile (AI generation)
- Python-dotenv

**Frontend**
- React 19 + Vite
- Tailwind CSS v4
- Axios
- React Icons

---

## Project Structure

```
ai-career-coach/
├── backend/
│   ├── main.py               # FastAPI app, CORS, endpoints
│   ├── pdf_parser.py         # PDF text extraction (PyMuPDF)
│   ├── skill_extractor.py    # Hybrid skill extraction (keywords + spaCy NER)
│   ├── ats_scorer.py         # Semantic similarity scoring
│   ├── ai_generator.py       # Groq API — interview questions, summary, bullets, roadmap
│   ├── requirements.txt
│   └── .env                  # GROQ_API_KEY (not committed)
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── hero.jsx
    │   │   ├── ResumeUpload.jsx
    │   │   ├── JobDescription.jsx
    │   │   ├── AnalyzeButton.jsx
    │   │   ├── ATSScore.jsx
    │   │   ├── SkillsCard.jsx
    │   │   ├── InterviewQuestions.jsx
    │   │   ├── ResumeSummary.jsx
    │   │   ├── BulletImprovements.jsx
    │   │   └── LearningRoadmap.jsx
    │   ├── services/
    │   │   └── api.js
    │   └── App.jsx
    ├── package.json
    └── vite.config.js
```

---

## Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- A free [Groq API key](https://console.groq.com)

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python -m spacy download en_core_web_sm
```

Create a `.env` file in the `backend/` folder:
```
GROQ_API_KEY=your_groq_api_key_here
```

Run the backend:
```bash
uvicorn main:app --reload
```

Backend runs at `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/full-analysis` | Main endpoint — PDF + JD → full analysis |
| POST | `/extract-text` | Extract raw text from PDF |
| POST | `/extract-skills` | Extract skills from PDF |
| POST | `/extract-jd-skills` | Extract skills from job description |
| POST | `/ats-score` | ATS score only |

### `/full-analysis` Request
- `file` — PDF resume (multipart/form-data)
- `job_description` — Job description text (form field)

### `/full-analysis` Response
```json
{
  "ats_score": 72,
  "matched_skills": ["Python", "SQL", "Machine Learning"],
  "missing_skills": ["Docker", "Kubernetes"],
  "questions": "1. Explain...\n2. How would you...",
  "summary": "The candidate demonstrates...",
  "bullet_improvements": "ORIGINAL: ...\nIMPROVED: ...",
  "roadmap": "Week 1: ...\nWeek 2: ...",
  "recommendation": "..."
}
```

---

## How It Works

1. User uploads a PDF resume and pastes a job description
2. Backend extracts text from the PDF using PyMuPDF
3. Skills are extracted using a hybrid approach — hardcoded tech skill list + spaCy NER
4. ATS score is calculated using semantic cosine similarity (Sentence Transformers)
5. Groq API generates interview questions, resume summary, bullet improvements, and learning roadmap
6. Frontend renders all results in collapsible card components

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GROQ_API_KEY` | Your Groq API key from console.groq.com |

---

## Author

**M Abuzar Rizwan**  
BS Data Science — FAST-NUCES Lahore  
[GitHub](https://github.com/Abuzar-575) • [LinkedIn](https://linkedin.com/in/abuzar-rizwan)
