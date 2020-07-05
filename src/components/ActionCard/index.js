import React, { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";

import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";

import ActionData from "../ActionData";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 280,
    backgroundColor: "var(--text-secondary)",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "25rem",
    margin: "5px",
  },
  actionContainer: {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "var(--theme)",
  },
  cardContent: {
    textAlign: "left",
    paddingBottom: "0",
  },
  cardActions: {
    paddingTop: "0",
  },
}));

const ActionCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [actionData, setActionData] = useState(ActionData);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const getActionCard = (actionId) => {
    console.log(actionData[`${actionId}`]);
    const { title, points } = actionData[`${actionId}`];

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Grid item xs={12} md={6} lg={4} key={actionId}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.cardContent}
            // avatar={
            //   <Avatar aria-label="recipe" className={classes.avatar}>
            //     R
            //   </Avatar>
            // }
            action={
              <IconButton aria-label="settings">
                <AddCircleIcon fontSize="large" />
              </IconButton>
            }
            title={`${title}`}
            subheader={`${points}`}
          />
          {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent> */}
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <CardMedia
                className={classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQglBrvos1eYpEK-0d41uUgv_tmIgENlB_-GQ&usqp=CAU"
                title="Recycle water bottle image"
              />
              <Typography paragraph>Impact:</Typography>
              <Typography paragraph>
                Plastic water bottles are becoming a growing segment of the
                municipal solid waste stream in the United States. The American
                Chemistry Council estimates that the average consumer uses 166
                plastic water bottles each year and that 2.5 million plastic
                bottles are thrown away every hour. While plastic water bottles
                offer convenience, they also create unnecessary waste in
                landfills. By recycling your plastic water bottles, you can
                positively impact the environment in several ways.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <Toolbar>
        <div className={classes.searchContainer}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon className={classes.searchIcon} />
            </Grid>
            <Grid item>
              <TextField
                onChange={handleSearchChange}
                className={classes.searchInput}
                label="Search Actions"
                variant="standard"
                color="primary"
              />
            </Grid>
          </Grid>
        </div>
      </Toolbar>
      <Grid container spacing={3} className={classes.actionContainer}>
        {Object.keys(actionData).map(
          (actionId) =>
            actionData[actionId].title.includes(filter) &&
            getActionCard(actionId)
        )}
      </Grid>
    </>
  );
};

export default ActionCard;
