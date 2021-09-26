import Image from "next/image";
import React, { ReactElement } from "react";
import Slider from "react-slick";

import { Frame } from "../lib/Frame";

export const Framelapse = ({ frames }: { frames: Frame[] }): ReactElement => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {frames.map((frame) => (
        <FramelapseItem key={frame.createdAt} frame={frame} />
      ))}
    </Slider>
  );
};

export const FramelapseItem = ({ frame }: { frame: Frame }): ReactElement => {
  return (
    <div>
      <Image src={frame.src} />
    </div>
  );
};
