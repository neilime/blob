import { Paper, Skeleton, styled } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import { getLastFrame } from "../lib/content";
import { Frame } from "../lib/Frame";

const FrameBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 15,
}));

const FrameImage = styled("img")(({ theme }) => ({
  borderColor: theme.palette.text.secondary,
}));

const REFRESH_INTERVALL = 1000 * 60 * 5; // 5 minutes

export const LastFrame = (): ReactElement => {
  const [lastFrame, setLastFrame] = useState<Frame>();
  useEffect(() => {
    const interval = setInterval(() => {
      getLastFrame().then((data) => {
        setLastFrame(data);
      });
    }, REFRESH_INTERVALL);

    getLastFrame().then((data) => {
      setLastFrame(data);
    });
    return () => clearInterval(interval);
  }, []);

  const shouldDisplayFrame = Boolean(lastFrame);

  return (
    <FrameBox>{shouldDisplayFrame ? <FramePaper frame={lastFrame} /> : <FrameSkeleton />}</FrameBox>
  );
};

export const FramePaper = ({ frame }: { frame: Frame }): ReactElement => {
  const legend = `Dernière capture - ${new Date(frame.createdAt).toLocaleString()}`;

  return (
    <>
      <h3>{legend}</h3>
      <FrameImage src={frame.src} alt={legend} width="100%" />
    </>
  );
};

export const FrameSkeleton = (): ReactElement => {
  return (
    <>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={350} height={200} />
    </>
  );
};
