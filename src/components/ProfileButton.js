import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Register from "../Register";
// import ModalLogin from '../Login';
// import Fab from '@material-ui/core/Fab';
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar } from "@material-ui/core";
import NewStories from "../content/NewStory";
import { connect } from "react-redux";
import { login } from "../_actions/login";

function ProfilButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    props.dispatch(login(false));
    // this.props.history.push("/login");
  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}

      <IconButton
        color="inherit"
        aria-controls="simple-menu"
        aria-hanspopup="true"
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: 40 }}
      >
        <MenuItem>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, marginRight: 8, marginTop: 5 }}>
              <Avatar src="https://miro.medium.com/fit/c/48/48/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg" />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                {localStorage.getItem("fullname")}
              </Typography>
              <Link
                to="/articleperson"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="caption">
                  @{localStorage.getItem("username")}
                </Typography>
              </Link>
            </div>
          </div>
        </MenuItem>
        <MenuItem style={{ color: "green" }}>Become a member</MenuItem>
        <hr />
        <Link to="/newstory" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem>New Story</MenuItem>
        </Link>
        <Link
          to="/yourstories"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem>Stories</MenuItem>
        </Link>
        <Link to="/stats" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem>Stats</MenuItem>
        </Link>

        <hr />
        <Link to="/bookmark" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem>Bookmark</MenuItem>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem>Profile</MenuItem>
        </Link>

        <MenuItem onClick={handleClose}>Setting</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(ProfilButton);
