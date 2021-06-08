import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { useStore } from "../Store/Store";
import ModalStretchComponent from "./ModalStretchComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(1),
    display: "flex",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  bulk: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
  },
  paragraph: {
    textAlign: "left",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  profile: {
    position: "absolute",
    margin: theme.spacing(1),
  },
  buttonGroup: {
    textAlign: "center",
  },
}));

export default function StretchInfoCardComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const setClose = () => {
    setIsOpen(false);
  };
  const arr = useStore((state) => state.arr);
  const classes = useStyles();
  const { title, username, description, profileImage } = props;
  return (
    <div>
      <Card className={classes.root} raised>
        {profileImage ? (
          <Avatar src={profileImage} className={classes.profile}>
            <PersonOutlineIcon />
          </Avatar>
        ) : (
          <Avatar className={classes.profile}>
            <PersonOutlineIcon />
          </Avatar>
        )}

        <div>
          <div className={classes.title}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {username}
            </Typography>
          </div>
          <div className={classes.bulk}>
            <CardContent className={classes.paragraph}>
              <Typography paragraph>{description}</Typography>
            </CardContent>
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.buttonGroup}>
            <IconButton aria-label="play" onClick={() => setIsOpen(true)}>
              <PlayCircleOutlineIcon
                color="primary"
                className={classes.playIcon}
              />
            </IconButton>
            mm:ss
          </div>
        </div>
      </Card>
      <Modal open={isOpen} onClose={setClose}>
        <ModalStretchComponent arr={arr} setClose={setClose} />
      </Modal>
    </div>
  );
}
