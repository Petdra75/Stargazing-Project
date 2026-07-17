import json
import os
import random

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


def get_neow_data(api_key, date):
    raw_response = requests.get(
        f"https://api.nasa.gov/neo/rest/v1/feed?start_date={date}&end_date={date}&api_key={api_key}"
    ).text
    response = json.loads(raw_response)
    return response

def get_neow_image(key, date):
    return_data = {}
    response = get_neow_data(key, date)
    return_data['element_count'] = response["element_count"]
    processed_objects = []
    for object in response["near_earth_objects"][date]:
        new_object = {}
        new_object['id'] = object["id"]
        new_object['name'] = object["name"]
        new_object['absolute_magnitude_h'] = object["absolute_magnitude_h"]
        new_object['estimated_diameter'] = object["estimated_diameter"]["kilometers"]
        new_object['miss_distance'] = object["close_approach_data"][0]["miss_distance"]
        processed_objects.append(new_object)
    return_data['close_objects'] = processed_objects
    return return_data

def get_epic_list(api_key, date):
    raw_response = requests.get(
        f" https://api.nasa.gov/EPIC/api/natural/date/{date}?api_key={api_key}"
    ).text
    response = json.loads(raw_response)
    return response

def get_epic_rndm_image(api_key, date):
    list = get_epic_list(api_key, date)
    rndm = random.randint(0, len(list))
    image_string = list[rndm]["image"] + ".png"
    days = date.split("-", 2)
    raw_response = requests.get(
        f" https://api.nasa.gov/EPIC/archive/natural/{days[0]}/{days[1]}/{days[2]}/png/{image_string}?api_key={api_key}"
    ).content
    with open(f"data/earth_{date}.jpg", "wb") as file:
       file.write(raw_response)
    

