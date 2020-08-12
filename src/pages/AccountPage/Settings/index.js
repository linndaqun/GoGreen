import React from "react";
import { AuthUserContext } from "../../../services/Session";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { withTheme } from "../../../components/Theme";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DeleteIcon from "@material-ui/icons/Delete";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { audioContext } from "./audioContext";
import SignOutButton from "../../../components/SignOut";

// Styles for settings drawer
const useStyles = makeStyles((theme) => ({
  settingsIcon: {
    color: "white",
    padding: "0",
  },
  listItemIcon: {
    minWidth: "2.5rem",
  },
  listItemText: {
    marginRight: "1.5rem",
  },
  // Trash can at bottom of drawer
  deleteIcon: {
    minWidth: "2.5rem",
    color: theme.palette.error.main,
  },
  deleteAccount: {
    position: "fixed",
    bottom: "5px",
    color: theme.palette.error.main,
  },
}));

const UnmuteSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
// Main Component - Settings on top right corner of profile page
function SettingsDrawer(props) {
  const classes = useStyles();
  const { darkMode, setDarkMode } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const audio = React.useContext(audioContext)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* USER'S GREETING */}
        <ListItem>
          <ListItemText>
            <Typography variant="h5">Settings</Typography>
            <Typography variant="h6">
              Hi, {localStorage.getItem("name")}!
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />

        {/* USER'S EMAIL */}
        <ListItem>
          <ListItemIcon className={classes.listItemIcon}>
            <EmailIcon />
          </ListItemIcon>
          <AuthUserContext.Consumer>
            {(authUser) => (
              <ListItemText className={classes.listItemText}>
                {authUser.email}
              </ListItemText>
            )}
          </AuthUserContext.Consumer>
        </ListItem>

        {/* CHANGE PASSWORD */}
        <ListItem button component={Link} to={ROUTES.CHANGEPW}>
          <ListItemIcon className={classes.listItemIcon}>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Change password
          </ListItemText>
        </ListItem>

        {/* CHANGE YOUR DORM */}
        <ListItem button component={Link} to={ROUTES.CHANGEDORM}>
          <ListItemIcon className={classes.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Change your dorm
          </ListItemText>
        </ListItem>

        {/* DARK MODE TOGGLE */}
        <ListItem
          button
          checked={darkMode}
          onClick={() => {
            setDarkMode(!darkMode);
            window.location.reload();
          }}
        >
          {/* toggle dark/light icons depending on if darkMode is true or false */}
          <ListItemIcon className={classes.listItemIcon}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </ListItemIcon>
          {/* toggle dark/light text depending on if darkMode is true or false */}
          <ListItemText className={classes.listItemText}>
            {darkMode ? (
              <Typography>Dark Mode</Typography>
            ) : (
              <Typography>Light Mode</Typography>
            )}
          </ListItemText>
        </ListItem>

        {/* INFO PAGE */}
        <ListItem button component={Link} to={ROUTES.INFO}>
          <ListItemIcon className={classes.listItemIcon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            More Info
          </ListItemText>
        </ListItem>

        {/* CONTACT US FORM */}
        <ListItem button component={Link} to={ROUTES.CONTACT}>
          <ListItemIcon className={classes.listItemIcon}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Contact Us
          </ListItemText>
        </ListItem>

        {/* MUTE TOGGLE */}
        <ListItem>
          <ListItemText className={classes.listItemText}>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Audio Off</Grid>
                <Grid item>
                  <UnmuteSwitch
                    checked={audio.unmute}
                    onChange={audio.muteAudio}
                    name="mute"
                  />
                </Grid>
                <Grid item>Audio On</Grid>
              </Grid>
            </Typography>
          </ListItemText>
        </ListItem>

        {/* SIGNOUT BUTTON */}
        <ListItem className={classes.listItemIcon}>
          <ListItemText>
            {/* styles for signout button are in components/Navigation/navigation.css */}
            <SignOutButton />
          </ListItemText>
        </ListItem>

        {/* DELETE ACCOUNT */}
        <ListItem
          button
          component={Link}
          to={ROUTES.DELETE_ACCOUNT}
          className={classes.deleteAccount}
        >
          <ListItemIcon className={classes.deleteIcon}>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            Delete your account
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment key={"right"}>
      {/* SETTINGS ICON */}
      {/* these 3 lines get rid of ripple effect! */}
      <IconButton
        disableFocusRipple
        disableRipple
        aria-label="settings icon"
        style={{ backgroundColor: "transparent" }}
        className={classes.settingsIcon}
        onClick={toggleDrawer("right", true)}
      >
        {<SettingsIcon />}
      </IconButton>
      {/* SETTINGS DRAWER- opens when user clicks icon */}
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default withTheme(SettingsDrawer);
