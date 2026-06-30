import spacy
from sentence_transformers import SentenceTransformer, util

nlp = spacy.load("en_core_web_sm")

model = SentenceTransformer("all-MiniLM-L6-v2")

TECH_SKILLS = [
    "python","javascript","typescript","java","c++","c","sql","r",
    "machine learning","deep learning","nlp","computer vision",
    "random forest","logistic regression","knn","k-means","dbscan",
    "xgboost","neural network","tensorflow","keras","pytorch",
    "scikit-learn","spacy","sentence transformers",

    "pandas","numpy","matplotlib","seaborn","eda",
    "data analysis","data visualization","statistics",

    "react","node.js","express.js","fastapi","flask","django",
    "html","css","tailwind","vite","rest api","jwt",

    "mysql","postgresql","mongodb","sql server",

    "git","github","docker","linux","postman",
    "aws","azure","streamlit","agile","scrum"
]

skill_embeddings = model.encode(
    TECH_SKILLS,
    convert_to_tensor=True,
    normalize_embeddings=True
)


def extract_skills_from_text(text):

    doc = nlp(text.lower())

    candidates = set()

    # noun phrases
    for chunk in doc.noun_chunks:

        phrase = chunk.text.strip()

        if len(phrase) < 2:
            continue

        candidates.add(phrase)

    # exact keyword match
    for skill in TECH_SKILLS:

        if skill in text.lower():

            candidates.add(skill)

    found = set()

    for candidate in candidates:

        emb = model.encode(
            candidate,
            convert_to_tensor=True,
            normalize_embeddings=True
        )

        scores = util.cos_sim(
            emb,
            skill_embeddings
        )[0]

        best = scores.argmax()

        if float(scores[best]) >= 0.68:

            found.add(
                TECH_SKILLS[int(best)]
            )

    return sorted(found)