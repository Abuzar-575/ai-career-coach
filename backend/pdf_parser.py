import fitz


def extract_pdf_text(contents: bytes) -> str:
    # Extract all text from a PDF file.

    pdf = fitz.open(stream=contents, filetype="pdf")

    text = ""

    for page in pdf:
        text += page.get_text()

    pdf.close()

    return text