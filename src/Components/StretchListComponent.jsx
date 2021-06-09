import { Grid } from "@material-ui/core";
import React from "react";
import StretchInfoCardComponent from "./StretchInfoCardComponent";

export default function StretchListComponent(props) {
  return (
    <Grid container>
      <Grid item sm={false} md={1} lg={2}></Grid>
      <Grid item sm={12} md={10} lg={8}>
        {props.stretchList.map((stretch) => (
          <StretchInfoCardComponent
            title={stretch.title}
            username={stretch.username}
            description={stretch.description}
            profileImage={stretch.profileImage}
            arr={stretch.arr}
            key={stretch.id}
          />
        ))}
      </Grid>
      <Grid item sm={false} md={1} lg={2}></Grid>
    </Grid>
  );
}
