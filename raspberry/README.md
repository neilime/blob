# Raspberry

## Materials

- Raspberry Pi 4 Model B
- Micro-SD NOOBS 16Go
- Power (Official) 15.3W USB-C
- Pibow for Raspberry Pi4
- LED ring 24 bits 24 X WS2812 5050 WS2812
- 3 Jumpers male-female 200mm to connect the LEDs ring
- Camera 5MP for Raspberry Pi 3 160°
- Huawei E3372 - USB Network Adapter (150 Mbps, 4G LTE) + 3G SIM card

## Docs

### LEDs

- https://youtu.be/M-bn7BE6qNA
- https://circuitpython.readthedocs.io/projects/neopixel/en/latest/

##### Pins

2 (black): Power 5v => PWR
6: Ground => G
12: GPIO IN => In

### Pibow

- https://youtu.be/utk3cjzCLog

### Camera

- https://picamera.readthedocs.io/en/release-1.13/

Plug blue side lloking at usb ports

### USB Network Adapter

- https://consumer.huawei.com/en/support/routers/e3372/
- https://www.raspberrypi.org/forums/viewtopic.php?f=29&t=159344

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
# Run script every 30 minutes
*/30 * * * * python3 /var/www/src/index.py
```

### Huawei E3372 - USB Network Adapter

- Configure the dongle on computer (enter and save PIN code)
- Plug the key in the raspberry
- The dongle's led indicator should be blue
- Check the configuration (`ifconfig`) new interface should exist `eth1`

# Commands

- Execute script: `sudo python3 /var/www/src/index.py`
- Reboot: `sudo reboot`
- Shutdown: `sudo halt`
