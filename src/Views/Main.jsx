import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SideBarContentsComponent from "../Components/SideBarContentsComponent";
import { Route, Switch } from "react-router-dom";
import DiscoverView from "./DiscoverView";
import CreateView from "./CreateView";
import ProfileView from "./ProfileView";
import SavedView from "./SavedView";
import SettingsView from "./SettingsView";
import { Hidden } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    alignItems: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Stretch
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <SideBarContentsComponent classes={classes} />
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact path="/main">
            <DiscoverView />
          </Route>
          <Route path="/main/profile">
            <ProfileView />
          </Route>
          <Route path="/main/saved">
            <SavedView />
          </Route>
          <Route path="/main/create">
            <CreateView />
          </Route>
          <Route path="/main/settings">
            <SettingsView />
          </Route>
        </Switch>
      </main>
      <Hidden mdDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="right"
          classes={{
            paper: classes.drawerPaper,
          }}
        ></Drawer>
      </Hidden>
    </div>
  );
}
