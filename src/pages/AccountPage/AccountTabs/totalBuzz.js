import React from "react";
import styles from "./totalBuzz.module.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  //   borderBottom: {
  //     "&:after": {
  //       borderBottom: theme.palette.background.paper,
  //       //   borderBottom: "13px solid",
  //     },
  //   },
});

// cards to be rendered on the points page in account
class TotalBuzz extends React.Component {
  render() {

    return (
      <div className={styles.bannerShape}>
        <Grid
          container
          justify="center"
          style={{ placeItems: "center", marginBottom: "0.5rem"}}
        >
          <Typography
            variant="h3"
            component="h1"
            style={{ marginRight: "1rem" }}
          >
            {localStorage.getItem("buzzes")}
          </Typography>
          <Typography variant="h5">Action(s) Logged!</Typography>
          <Grid container justify="center">
            <Typography variant="body2">
              Click impact cards below for a fun surprise!
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(TotalBuzz);
