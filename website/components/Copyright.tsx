import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid, Typography } from "@mui/material";
import React, { ReactElement } from "react";

import Link from "./Link";

export const Copyright = (): ReactElement => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      spacing={2}
      alignItems="flex-end"
      sx={{ mt: 5 }}
    >
      <Grid item>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link href="/">Blob - Expérience</Link> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
      <Grid item>
        <Link href="https://github.com/neilime/blob">
          <GitHubIcon /> Ressources
        </Link>
      </Grid>
    </Grid>
  );
};
