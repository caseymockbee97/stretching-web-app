import React from "react";
import StretchListComponent from "../Components/StretchListComponent";
import { useStore } from "../Store/Store";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

export default function DiscoverView() {
  const classes = useStyles();
  const listOfStretches = useStore((state) => state.listOfStretches);
  return (
    <div className={classes.root}>
      <h1>Discover</h1>
      <StretchListComponent stretchList={listOfStretches} />
    </div>
  );
}