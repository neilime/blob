import { Stack } from "@mui/material";
import type { ReactElement } from "react";
import ReactPlayer from "react-player";
import { MediaPanel } from "./MediaPanel";

export const Video = (): ReactElement => {
  return (
    <MediaPanel>
      <Stack
        direction="column"
        spacing={1}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <h3>Le laboratoire</h3>
        <ReactPlayer
          src="/videos/blob.MOV"
          controls
          preload="metadata"
          style={{ width: "100%" }}
          aria-label="Le laboratoire du Blob"
        />
      </Stack>
    </MediaPanel>
  );
};
