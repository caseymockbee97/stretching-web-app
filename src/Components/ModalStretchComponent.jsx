import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function ModalStretchComponent(props) {
  const arr = props.arr;
  const setClose = props.setClose;
  const [count, setCount] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  useEffect(() => {
    window.myTimer = setInterval(() => {
      if (count + 1 >= arr.length) {
        setClose(false);
      }
      increaseCount();
      console.log("increased");
    }, arr[count].seconds * 1000);
    return () => {
      clearInterval(window.myTimer);
      console.log("I closed");
    };
  }, [increaseCount, count, arr, setClose]);

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "auto",
      width: "50vw",
      //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      marginTop: "10vh",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  return (
    <Card raised className={classes.paper}>
      <Typography variant="h4" color="primary">
        {arr[count].name}
      </Typography>
      {arr[count].img && (
        <img style={{ width: "200px" }} src={arr[count].img} alt="something" />
      )}
      <Divider />
      <CountdownCircleTimer
        key={count}
        isPlaying
        duration={arr[count].seconds}
        colors={[
          ["#004777", 0.5],
          ["#f50057", 0.5],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
      <div>
        {count > 0 && (
          <Button variant="contained" onClick={decreaseCount}>
            Go Back
          </Button>
        )}
        {count < arr.length - 1 && (
          <Button
            startIcon={<EmojiPeopleIcon />}
            variant="contained"
            onClick={increaseCount}
          >
            Skip
          </Button>
        )}
      </div>
    </Card>
  );
}
