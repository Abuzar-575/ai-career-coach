import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def generate_interview_questions(job_description: str, missing_skills: list):
    prompt = f"""Based on this job description, generate 10 highly relevant technical interview questions that more often come.

Job Description: {job_description}

Focus areas to emphasize: {', '.join(missing_skills) if missing_skills else 'general role requirements'}

Return only a numbered list of 10 questions, nothing else."""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
    )

    return response.choices[0].message.content


def generate_resume_summary(resume_text: str, job_description: str, matched_skills: list, missing_skills: list):
    prompt = f"""You are a career coach. Analyze this resume against the job description and give a brief, honest summary.

Resume skills found: {', '.join(matched_skills)}
Missing skills for this role: {', '.join(missing_skills)}

Job Description: {job_description}

Write a 3-4 sentence summary covering:
1. What the candidate's strengths are for this specific role
2. What's missing or weak
3. An honest overall verdict on fit

Be direct and specific, not generic. No bullet points, just a short paragraph."""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.6,
    )

    return response.choices[0].message.content


def improve_resume_bullets(resume_text: str):
    prompt = f"""You are a resume expert. Below is resume text. Find 3 weak, vague bullet points and rewrite them to be specific, quantified, and impactful using strong action verbs.

Resume: {resume_text}

Return in this exact format for each of the 3 points:

ORIGINAL: [original weak bullet point]
IMPROVED: [your improved version]

Do this for exactly 3 bullet points. No extra commentary."""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    return response.choices[0].message.content



def generate_learning_roadmap(missing_skills: list):
    if not missing_skills:
        return "No skill gaps found — you're well matched for this role!"

    prompt = f"""Create a week-by-week learning roadmap to help someone learn these missing skills: {', '.join(missing_skills)}

Format exactly like this for each skill:

Week X: [Skill Name]
- What to learn: [brief description]
- Resource: [one specific real resource - YouTube channel, official docs, or course name]

Keep it practical and realistic, one skill per week maximum 4 weeks total."""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.6,
    )

    return response.choices[0].message.content