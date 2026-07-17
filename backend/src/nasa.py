import json
import os

import requests
from PIL import Image

def get_data(api_key):
    raw_response = requests.get(
        f"https://api.nasa.gov/planetary/apod?api_key={api_key}"
    ).text
    response = json.loads(raw_response)
    return response


def get_date(response):
    date = response["date"]
    return date

def get_hdurl(response):
    hdurl = response["hdurl"]
    return hdurl


def download_image(url, date):
    if os.path.isfile(f"data/{date}.png") == False:
        raw_image = requests.get(url).content
        with open(f"data/{date}.jpg", "wb") as file:
            file.write(raw_image)

    else:
        return FileExistsError


def get_neow_data(api_key):
    raw_response = requests.get(
        f"https://api.nasa.gov/neo/rest/v1/feed?api_key={api_key}"
    ).text
    response = json.loads(raw_response)
    return response
