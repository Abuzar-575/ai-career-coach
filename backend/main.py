from fastapi import FastAPI, UploadFile, File, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from ats_scorer import calculate_ats_score
from pdf_parser import extract_pdf_text
from skill_extractor import extract_skills_from_text
from pydantic import BaseModel
from interview_generator import generate_interview_questions

class JobDescription(BaseModel):
    text: str


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def get_pdf_text(file: UploadFile):
    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    contents = await file.read()

    return extract_pdf_text(contents)

@app.get("/")
def root():
    return {
        "message": "AI Career Coach API is running"
    }

@app.post("/extract-text")
async def extract_text(file: UploadFile = File(...)):
    text = await get_pdf_text(file)
    return {"text": text}


@app.post("/extract-skills")
async def extract_skills(file: UploadFile = File(...)):
    text = await get_pdf_text(file)
    skills = extract_skills_from_text(text)
    return {"skills": skills}


@app.post("/extract-jd-skills")
async def extract_jd_skills(jd: JobDescription):
    skills = extract_skills_from_text(jd.text)
    return {"skills": skills}


@app.post("/ats-score")
async def ats_score(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):
    resume_text = await get_pdf_text(file)
    resume_skills = extract_skills_from_text(resume_text)
    jd_skills = extract_skills_from_text(job_description)
    result = calculate_ats_score(resume_skills, jd_skills)
    return result


@app.post("/generate-questions")
async def generate_questions(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):
    resume_text = await get_pdf_text(file)
    resume_skills = extract_skills_from_text(resume_text)
    jd_skills = extract_skills_from_text(job_description)
    result = calculate_ats_score(resume_skills, jd_skills)
    
    questions = generate_interview_questions(job_description, result["missing_skills"])
    
    return {
        "ats_score": result["score"],
        "matched_skills": result["matched_skills"],
        "missing_skills": result["missing_skills"],
        "questions": questions
    }