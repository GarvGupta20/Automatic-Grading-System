import uvicorn
from fastapi import FastAPI
from services.ocr.ocr import get_text
from pydantic import BaseModel
from services.sensi import FindScore

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    first: str
    second: str

@app.get("/api")
def check():
    return {"message": "Hello World"}

@app.get("/")
def read_root():
    text = FindScore("hello", "hello")
    print(text)
    return {"text": text}
@app.post("/add")
def add_points(item:Item):
    text = FindScore(item.first, item.second)
    return {"score": text}


# for traditional start
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
