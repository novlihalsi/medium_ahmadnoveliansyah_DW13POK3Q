import React from "react";
import ProfilButton from "../components/ProfileButton";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },

  title: {
    flexGrow: 1,
    textDecoration: "none",
    "&:visited": { color: "black" }
  }
}));

function NewStory() {
  const classes = useStyles();
  return (
    <div style={{ margin: "0 350px 0 350px" }}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <img
            src="https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png"
            style={{ width: 40, height: 40 }}
          />
        </Link>

        <Button
          variant="contained"
          size="small"
          disableElevation
          style={{ backgroundColor: "green", color: "white" }}
        >
          Publish
        </Button>

        <IconButton>
          <MoreHorizIcon />
        </IconButton>

        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <ProfilButton />
      </Toolbar>

      <div style={{ margin: "100px 100px 0 100px" }}>
        <div>
          <IconButton>
            <AddIcon />
          </IconButton>

          <TextField placeholder="Title" multiline style={{ width: 200 }} />
        </div>
        <div style={{ marginTop: 30 }}>
          <IconButton>
            <AddIcon />
          </IconButton>

          <TextField
            placeholder="Tell Your Story"
            multiline
            style={{ width: 500 }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewStory;
