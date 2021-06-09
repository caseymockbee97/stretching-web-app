import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useStore } from "../Store/Store";

const useStyles = makeStyles((theme) => ({
  noStyle: {
    textDecoration: "inherit",
    color: "inherit",
    cursor: "auto",
  },
}));

export default function SideBarContentsComponent(props) {
  const classes = useStyles();
  const selectedInput = useStore((state) => state.selectedInput);
  const setSelectedInput = useStore((state) => state.setSelectedInput);

  return (
    <div className={props.classes.drawerContainer}>
      <List>
        <Link to="/main" className={classes.noStyle}>
          <ListItem button selected={selectedInput === 1}>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Discover"} />
          </ListItem>
        </Link>
        <Link to="/main/profile" className={classes.noStyle}>
          <ListItem button selected={selectedInput === 2}>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </Link>
        <Link to="/main/saved" className={classes.noStyle}>
          <ListItem button selected={selectedInput === 3}>
            <ListItemIcon>
              <BookmarksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Saved"} />
          </ListItem>
        </Link>
        <Link to="/main/create" className={classes.noStyle}>
          <ListItem button selected={selectedInput === 4}>
            <ListItemIcon>
              <AddBoxOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Create"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/main/settings" className={classes.noStyle}>
          <ListItem button selected={selectedInput === 5}>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText secondary={"Settings"} />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppOutlinedIcon />
          </ListItemIcon>
          <ListItemText secondary={"Log Out"} />
        </ListItem>
      </List>
    </div>
  );
}
