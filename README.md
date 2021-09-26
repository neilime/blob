<h1 align="center">Raise your Blob - Experience 👋</h1>
<p align="center" style="background-color: #121212;">
    <img alt="Logo" src="https://repository-images.githubusercontent.com/410271082/cbd1fddf-d58b-4094-a797-76f56844794e" width="400">
</p>

# Intro

CNES proposes experiments based on the study of the behavior of Physarum Polycephalum or Blob in collaboration with the Alpha mission of Thomas Pesquet.

On Earth, 2 000 classes will follow Audrey Dussutour's protocols to reproduce the same experiments and transmit their results.

Here are the experiments performed by the classes of 5ème 1 & 5ème 2 of the Jean Moulin high school in Marseille

# Stack

![GitHub Logo](./diagram.jpg)

```mermaid
sequenceDiagram
    Raspberry->>Raspberry: Turns on the LEDs
    Raspberry->>Raspberry: Initializes camera and take the picture
    Raspberry->>Contentful: Create and publish new picture as Asset
    Contentful->>Contentful: Stores pictures as Assets
    Raspberry->>Raspberry: Turns off the LEDs
    Website->>Contentful: Fetch new picture (Asset) on page refresh and every 10 minutes
```

## Raspberry

[See documentation](../raspberry/README.md)

## Website

[See documentation](../website/README.md)

## Contentful

Contentful is a headless content management system (CMS)

[See more](https://www.contentful.com/)

![GitHub Logo](/images/logo.png)
