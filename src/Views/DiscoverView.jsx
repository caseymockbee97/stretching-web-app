import React, { useEffect } from "react";
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
  const setSelectedInput = useStore((state) => state.setSelectedInput);

  useEffect(() => {
    setSelectedInput(1);
  }, [setSelectedInput]);

  return (
    <div className={classes.root}>
      <h1>Discover</h1>
      <StretchListComponent stretchList={listOfStretches} />
    </div>
  );
}
