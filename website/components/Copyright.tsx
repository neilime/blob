import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid, Typography } from "@mui/material";
import type { ReactElement } from "react";

import Link from "./Link";

export const Copyright = (): ReactElement => {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ mt: 5, justifyContent: "center", alignItems: "flex-end" }}
    >
      <Grid>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link href="/">Blob - Expérience</Link> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
      <Grid>
        <Link href="https://github.com/neilime/blob">
          <GitHubIcon /> Ressources
        </Link>
      </Grid>
    </Grid>
  );
};
