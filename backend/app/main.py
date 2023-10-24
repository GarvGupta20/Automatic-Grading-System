import uvicorn
from fastapi import FastAPI
from services.ocr.ocr import get_text

app = FastAPI()


@app.get("/")
def read_root():
    text = get_text('services/ocr/tests/data/test1.png')
    return {"text": text}


# for traditional start
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
