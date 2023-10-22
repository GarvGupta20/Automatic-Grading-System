from PIL import Image
import pytesseract


image_path = 'tests/data/test1.png'

text = pytesseract.image_to_string(Image.open(image_path))

print(text)
