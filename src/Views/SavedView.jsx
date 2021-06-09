import React, { useEffect } from "react";
import StretchListComponent from "../Components/StretchListComponent";
import { useStore } from "../Store/Store";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

export default function SavedView() {
  const classes = useStyles();
  const listOfStretches = useStore((state) => state.listOfStretches);
  const setSelectedInput = useStore((state) => state.setSelectedInput);

  useEffect(() => {
    setSelectedInput(3);
  }, [setSelectedInput]);

  return (
    <div className={classes.root}>
      <h1>Saved</h1>
      <StretchListComponent stretchList={listOfStretches} />
    </div>
  );
}
