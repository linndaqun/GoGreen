import React, {useEffect, useContext} from "react";
// import "./index.css";
// import "././index.css";
// import { Link } from "react-router-dom";
// import southdorm from "./southdorm.jpg";
// import ActionCard from
// import * as ROUTES from "../../constants/routes";
// import Tabs from '@material-ui/core/Tabs';

// import { db } from "..,Firebase/firebase.js";
// import { PasswordForgetForm } from "../PasswordForget";
// import PasswordChangeForm from "../PasswordChange";


import TotalPointsCard from "./points.js";

import DormCard from "./dorm.js";
import {leaderBoardUpdate, assignRanking} from '../Leaderboard';
import {getUser, getDorm} from "../Firebase";

// import SignOutButton from "../SignOut";
import { AuthUserContext, withAuthorization } from "../Session";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import PhoneIcon from "@material-ui/icons/Phone";
import PersonPinIcon from "@material-ui/icons/PersonPin";
// import HelpIcon from "@material-ui/icons/Help";
// import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
// import ThumbDown from "@material-ui/icons/ThumbDown";
// import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

// export function getPoints() {
// db.collection("users").document(FirebaseAuth.getInstance().getCurrentUser().getUid())
//         .get().addOnCompleteListener(task -> {
//     if(task.isSuccessful() && task.getResult() != null){
//         String points = task.getResult().getNumber("points);

//         //other stuff
//     }else{
//         //deal with error
//     }
//     return points;
// })
// };

function assignDorm(data) {
  if (data.userDorm === ""){
    alert("Sorry, please choose your dorm in setting!")
  }else{
    localStorage.setItem("dorm", data.userDorm)
  }
}

function AccountPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      leaderBoardUpdate()
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const authContext = useContext(AuthUserContext);

  getUser(authContext.email).onSnapshot(docSnapshot => {
    if (docSnapshot.exists) {
      assignDorm(docSnapshot.data())
    } else {
      alert("Sorry, please choose your dorm in setting!")
    }
  }, err => {
  console.log(`Encountered error: ${err}`);
})

  getDorm().doc(localStorage.getItem('dorm')).onSnapshot(docSnapshot => {
    assignRanking(docSnapshot.data())
  }, error => {
    console.error("Error: ", error)
  })

  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div className="base-container">
            {/* <h1>Profile</h1>
            <p>{authUser.email}'s page!</p> */}
            <div className={classes.root}>
              <AppBar position="static" color="primary">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  scrollButtons="off"
                  indicatorColor="primary"
                  textColor="default"
                  aria-label="scrollable tabs"
                  centered="true"
                  width="100%"
                >

                  <Tab
                    label="Your Points"
                    icon={<PersonPinIcon />}
                    {...a11yProps(0)}
                    style={{ backgroundColor: "transparent" }}
                  />
                
                  <Tab
                    label="Your Dorm"
                    icon={<HomeIcon />}
                    {...a11yProps(1)}
                    style={{ backgroundColor: "transparent" }}
                  />
                 
                 
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <TotalPointsCard />
              </TabPanel>
              {/* <TabPanel value={value} index={1}>
                <FaveCard /> */}
              {/* </TabPanel>  */}
              <TabPanel value={value} index={1}>
                <DormCard />
              </TabPanel>
              
            </div>
            {/* <div class="signout-btn">
              <SignOutButton />
            </div> */}
          </div>
        )}
      </AuthUserContext.Consumer>
    </div>
  );
}


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
