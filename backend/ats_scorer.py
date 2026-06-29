from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')

def calculate_ats_score(resume_skills: list, jd_skills: list):
    if not jd_skills or not resume_skills:
        return {"score": 0, "matched_skills": [], "missing_skills": jd_skills}

    resume_embeddings = model.encode(resume_skills, convert_to_tensor=True)
    jd_embeddings = model.encode(jd_skills, convert_to_tensor=True)

    matched = []
    missing = []

    for i, jd_skill in enumerate(jd_skills):
        similarities = util.cos_sim(jd_embeddings[i], resume_embeddings)[0]
        best_score = float(similarities.max())
        if best_score >= 0.75:
            matched.append(jd_skill)
        else:
            missing.append(jd_skill)

    score = round((len(matched) / len(jd_skills)) * 100, 2)

    return {
        "score": score,
        "matched_skills": matched,
        "missing_skills": missing
    }