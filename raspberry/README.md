# Raspberry

## Materials

- Raspberry Pi 4 Model B
- Micro-SD NOOBS 16Go
- Power (Official) 15.3W USB-C
- Pibow for Raspberry Pi4
- LED ring 24 bits 24 X WS2812 5050 WS2812
- 3 Jumpers male-female 200mm to connect the LEDs ring
- Camera 5MP for Raspberry Pi 3 160°

## Docs

### LEDs

- https://youtu.be/M-bn7BE6qNA
- https://circuitpython.readthedocs.io/projects/neopixel/en/latest/

### Pibow

- https://youtu.be/utk3cjzCLog

### Camera

- https://picamera.readthedocs.io/en/release-1.13/

## Setup

### Install libraries

```sh
sudo pip3 install python-dotenv contentful_management;

# Libraries to manage leds
sudo pip3 install rpi_ws281x adafruit-circuitpython-neopixel;
sudo python3 -m pip install --force-reinstall adafruit-blinka;
```

### Enable camera

```sh
sudo raspi-config
# Interface Option => Camera
```

### Copy sources

Copy `raspberry/var` folder in raspberry root (`/`) path

Copy `.env.dist` to `.env`

```sh
cp /var/www/src/.env.dist /var/www/src/.env
```

Fill the required environment variables

### Execute script periodically

```sh
sudo crontab -e
```

Paste :

```
# Run script every 10 minutes
*/10 * * * * python3 /var/www/src/index.py
```

# Commands

- Execute script: `sudo python3 /var/www/src/index.py`
- Reboot: `sudo reboot`
- Shutdown: `sudo halt`
