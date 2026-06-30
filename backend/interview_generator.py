import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def generate_interview_questions(job_description: str, missing_skills: list):
    prompt = f"""Based on this job description, generate 5 relevant technical interview questions.

Job Description: {job_description}

Focus areas to emphasize: {', '.join(missing_skills) if missing_skills else 'general role requirements'}

Return only a numbered list of 5 questions, nothing else."""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
    )

    return response.choices[0].message.content