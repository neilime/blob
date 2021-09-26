import { Paper, Stack, styled } from "@mui/material";
import React, { ReactElement } from "react";
import ReactPlayer from "react-player";

const VideoBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 15,
}));

export const Video = (): ReactElement => {
  return (
    <VideoBox>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <h3>Le laboratoire</h3>
        <ReactPlayer url="/videos/blob.MOV" controls width="100%" />
      </Stack>
    </VideoBox>
  );
};
