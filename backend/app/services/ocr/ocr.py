from PIL import Image
import pytesseract
import urllib.request
import io


# image_path = 'tests/data/test1.png'


def get_text(image_url):
    # Download the image
    urllib.request.urlretrieve( image_url, "image.png") 
    img = Image.open("image.png") 
    text = pytesseract.image_to_string(img)
    return text