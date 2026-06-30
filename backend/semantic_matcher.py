from sentence_transformers import SentenceTransformer, util

# Load once when the server starts
model = SentenceTransformer("all-MiniLM-L6-v2")


def semantic_match(resume_skills, jd_skills, threshold=0.68):
    matched = []
    missing = []

    if not resume_skills or not jd_skills:
        return matched, jd_skills

    resume_embeddings = model.encode(
        resume_skills,
        convert_to_tensor=True,
        normalize_embeddings=True,
    )

    jd_embeddings = model.encode(
        jd_skills,
        convert_to_tensor=True,
        normalize_embeddings=True,
    )

    for i, jd_skill in enumerate(jd_skills):

        similarities = util.cos_sim(
            jd_embeddings[i],
            resume_embeddings,
        )[0]

        best_score = float(similarities.max())

        if best_score >= threshold:
            matched.append(jd_skill)
        else:
            missing.append(jd_skill)

    return matched, missing