import { Alert, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";

import { Copyright } from "../components/Copyright";
import { LastFrame } from "../components/LastFrame";
import { Video } from "../components/Video";

export default function Index(): ReactElement {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <img src="/images/profile.jpg" alt="Blob" height={200} width={200} />
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Blob - Expérience
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            Collège Jean Moulin - Marseille
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Alert severity="info" sx={{ fontSize: 20, marginBottom: 5 }}>
          Le CNES propose des expériences basées sur l&apos;étude du comportement du Physarum
          Polycephalum ou Blob en collaboration avec la mission Alpha de Thomas Pesquet.
          <br />
          <br />
          Sur Terre, 2 000 classes vont suivre les protocoles d’Audrey Dussutour pour reproduire les
          mêmes expériences et transmettre leurs résultats.
          <br />
          <br />
          Voici les expériences réalisées par les classes de 5ème 1 &amp; 5ème 2 du collège Jean
          Moulin à Marseille
        </Alert>
      </Container>
      <Container maxWidth="xl">
        <Grid container direction="row" justifyContent="center" spacing={2} alignItems="strech">
          <Grid item xs={12} lg={6}>
            <LastFrame />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Video />
          </Grid>
        </Grid>
      </Container>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Copyright />
      </Grid>
    </>
  );
}
