import { Skeleton, styled } from "@mui/material";
import { type ReactElement, useEffect, useState } from "react";
import { getLastFrame } from "../lib/content";
import type { Frame } from "../lib/Frame";
import { MediaPanel } from "./MediaPanel";

const FrameImage = styled("img")(({ theme }) => ({
  borderColor: theme.palette.text.secondary,
}));

const REFRESH_INTERVAL = 1000 * 60 * 5; // 5 minutes

export const LastFrame = (): ReactElement => {
  const [lastFrame, setLastFrame] = useState<Frame | null>(null);
  useEffect(() => {
    let active = true;
    const refresh = async () => {
      try {
        const frame = await getLastFrame();
        if (active) setLastFrame(frame);
      } catch {
        // Keep the previous frame when the remote service is unavailable.
      }
    };
    void refresh();
    const interval = setInterval(refresh, REFRESH_INTERVAL);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <MediaPanel>
      {lastFrame ? <FramePaper frame={lastFrame} /> : <FrameSkeleton />}
    </MediaPanel>
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
