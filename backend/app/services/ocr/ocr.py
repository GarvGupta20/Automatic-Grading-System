from PIL import Image
import pytesseract


image_path = 'tests/data/test1.png'

print(pytesseract.image_to_string(Image.open(image_path)))
