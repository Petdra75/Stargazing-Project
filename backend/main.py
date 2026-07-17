from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from src.nasa import *


app = FastAPI()

key = "yUYWh31aJxLD1JmUmWcSrpcMts3pMMq5ufqq74pE"
origins = [
    "http://localhost:5173",  # The origin for your React app on your local machine/development environment
    "https://your-production-frontend.com",
]

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
    return {"status": "tiam luato"}


@app.get("/neow")
async def get_neow_image():
    return_data = {}
    response = get_neow_data(key)
    return_data['element_count'] = response["element_count"]
    processed_objects = []
    for object in response["near_earth_objects"]["2026-07-17"]:
        new_object = {}
        new_object['id'] = object["id"]
        new_object['name'] = object["name"]
        new_object['absolute_magnitude_h'] = object["absolute_magnitude_h"]
        new_object['estimated_diameter'] = object["estimated_diameter"]["kilometers"]
        new_object['miss_distance'] = object["close_approach_data"][0]["miss_distance"]
        processed_objects.append(new_object)
    return_data['close_objects'] = processed_objects
    return return_data


