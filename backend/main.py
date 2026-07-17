from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from src.nasa import *
from dotenv import load_dotenv, find_dotenv
from pathlib import Path

app = FastAPI()
load_dotenv()

origins = [
    "http://localhost:5173",  # The origin for your React app on your local machine/development environment
    "https://your-production-frontend.com",
]
key = os.getenv("KEY")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type", "Accept"],
    max_age=3600,  # Cache preflight response for 1 hour (3600 seconds)
)
@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/apod")
async def get_apod_image():
    response = get_data(key)
    download_image(get_hdurl(response), get_date(response))
    return {"status": "ok"}


@app.get("/neow/{date}")
async def get_neow(date: str):
    return get_neow_image(key, date)

@app.get("/epic/{date}")
async def get_epic_image(date: str):
    get_epic_rndm_image(key, date)
    return {"status": "ok"}
  