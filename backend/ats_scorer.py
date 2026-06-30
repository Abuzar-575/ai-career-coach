from semantic_matcher import semantic_match


def calculate_ats_score(resume_skills, jd_skills):

    matched, missing = semantic_match(
        resume_skills,
        jd_skills,
    )

    if len(jd_skills) == 0:
        score = 0
    else:
        score = round(
            (len(matched) / len(jd_skills)) * 100,
            2,
        )

    return {
        "score": score,
        "matched_skills": sorted(matched),
        "missing_skills": sorted(missing),
    }