import React from "react";
import {
  Card,
  Button,
  TextField,
  Typography,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "400px",
    height: "300px",
  },
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
}));

export default function LoginView() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card} raised>
        <Typography variant="h2" component="h2" color="primary">
          Log In
        </Typography>

        <form>
          <TextField label="Username" variant="outlined" />
          <br />
          <TextField label="Password" variant="outlined" />
          <br />
          <Button variant="contained" color="primary" size="large">
            Log In
          </Button>
        </form>
        <Divider />
        <Typography color="textSecondary" align="center">
          Not a User? Sign up <Link to="/signup">here</Link>!
        </Typography>
      </Card>
    </div>
  );
}
