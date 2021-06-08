import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";

export default function ProfileComponent() {
  return (
    <Grid container>
      <Grid item sm={false} md={1} lg={2}></Grid>
      <Grid item sm={12} md={10} lg={8}>
        <Card>
          <CardContent>This is the profile section.</CardContent>
        </Card>
      </Grid>
      <Grid item sm={false} md={1} lg={2}></Grid>
    </Grid>
  );
}
