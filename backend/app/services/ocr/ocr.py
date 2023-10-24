from PIL import Image
import pytesseract


# image_path = 'tests/data/test1.png'


def get_text(image_path):
    text = pytesseract.image_to_string(Image.open(image_path))
    return text
