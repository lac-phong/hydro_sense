#! /usr/bin/python3

import board
import busio
import adafruit_sht31d
import sys
import time
import firebase_admin
from pathlib import Path
from firebase_admin import credentials
from firebase_admin import db

# Get the absolute path of the script
script_dir = Path(__file__).resolve().parent

# Construct the absolute path to key.json, output.log, and error.log
data_path = script_dir / 'key.json'
log_path = script_dir / 'output.log'
error_log_path = script_dir / 'error.log'

# Redirect standard output and error to log files
sys.stdout = open(log_path, 'a')
sys.stderr = open(error_log_path, 'a')

cred = credentials.Certificate(data_path)
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://hydro-sense-default-rtdb.firebaseio.com/'
})

i2c = busio.I2C(board.SCL, board.SDA)
sensor = adafruit_sht31d.SHT31D(i2c)

while True:
    # Data variable initialization
    temperature = sensor.temperature
    humidity = round(sensor.relative_humidity, 2)

    # Temperature conversion from celsius to fahrenheit
    fahrenheit_temperature = round((temperature * 9/5) + 32, 2)

    # Display time in format
    node_name = time.strftime("%Y-%m-%d", time.localtime())
    current_time = time.strftime("%H:%M:%S", time.localtime())

    print(f"{node_name} {current_time}")
    print(f"Temperature: {fahrenheit_temperature}\u00B0F")
    print(f"Humidity: {humidity}%\n")

    # Send data to Firebase in JSON format
    ref = db.reference(f'test_data/{node_name}')
    ref.push({
        'temperature': fahrenheit_temperature,
        'humidity': humidity,
        'time': current_time
    })

    time.sleep(60)
