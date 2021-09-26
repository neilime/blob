import board
import neopixel
import time
from picamera import PiCamera
from contentful_management import Client
from dotenv import load_dotenv
import os

load_dotenv()

pixels = neopixel.NeoPixel(board.D18, 30)
ts = int(time.time())

pictureName = str(ts) + '.jpg'
picturesDirPath = '/var/www/public/images/' 
picturePath = picturesDirPath + pictureName

def lightsOn():
    print('Lights on')
    pixels.fill((255, 255, 255))

def lightsOff():
    pixels.deinit()
    print('Lights off')

def takePicture():

    print('Initializing camera...')
    camera = PiCamera()
    camera.start_preview()
    time.sleep(5)

    print('Taking picture...')
    camera.capture(picturePath)
    camera.stop_preview()
    print('Picture taken: ' + picturePath)

def publishPicture():
    token = os.getenv('CONTENTFUL_TOKEN')
    space_id = os.getenv('CONTENTFUL_SPACE_ID')
    environment_id = os.getenv('CONTENTFUL_ENVIRONMENT_ID')
    client = Client(token)


    print('Uploading picture...')
    with open(picturePath, 'rb') as file:
        new_upload = client.uploads(space_id).create(file)
        print('Picture uploaded')
        print('Creating asset...')
        asset = client.assets(space_id, environment_id).create(
            None,
            {
                'fields': {
                    'title': {
                        'en-US': pictureName
                    },
                    'file': {
                        'en-US': {
                            'fileName': pictureName,
                            'contentType': 'image/jpeg',
                            'uploadFrom': new_upload.to_link().to_json()
                        }
                    }
                }
            }
        )
        print('Asset created')
        print('Processing asset...')
        asset.process()
        print('Asset processed')
        print('Publishing asset...')
        asset.publish()
        print('Asset published')

def cleanOldPictures():
    import os, time

    now = time.time()
    lastWeekStamp = now - (7 * 24 * 60 * 60)

    for filename in os.listdir(picturesDirPath):
        filePath = os.path.join(picturesDirPath, filename)
        filestamp = os.stat(filePath).st_mtime
        if filestamp < lastWeekStamp:
            print("Remove file", filename)
            os.remove(filePath)


lightsOn()
takePicture()
lightsOff()
publishPicture()
cleanOldPictures()