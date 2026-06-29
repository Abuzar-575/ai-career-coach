import spacy

nlp = spacy.load("en_core_web_sm")

TECH_SKILLS = [
    # Languages
    "python", "javascript", "typescript", "java", "c++", "c", "sql", "r", "assembly",
    # ML/AI
    "machine learning", "deep learning", "nlp", "computer vision", "random forest",
    "logistic regression", "knn", "k-means", "dbscan", "xgboost", "neural network",
    "scikit-learn", "keras", "tensorflow", "pytorch", "spacy", "sentence transformers",
    # Data
    "pandas", "numpy", "matplotlib", "seaborn", "sympy", "eda", "data analysis",
    "data visualization", "statistical analysis", "statistics", "probability",
    # Web
    "react", "node.js", "express.js", "fastapi", "flask", "django", "vite",
    "rest api", "jwt", "html", "css", "tailwind",
    # Databases
    "mysql", "postgresql", "mongodb", "sql server",
    # Tools
    "git", "github", "docker", "linux", "postman", "trello", "aws", "azure",
    # Concepts
    "oop", "mvc", "agile", "scrum", "streamlit"
]

def extract_skills_from_text(text: str):
    text_lower = text.lower()
    found_skills = set()

    # match known tech skills.
    for skill in TECH_SKILLS:
        if skill in text_lower:
            found_skills.add(skill)

    #not found one.
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ in ["ORG", "PRODUCT"]:
            ent_text = ent.text.lower().strip()
            if 2 < len(ent_text) < 30:
                found_skills.add(ent_text)

    return sorted(list(found_skills))