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
import ProfilButton from "./ProfileButton";

// export function ProfilButton(props) {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     props.dispatch(login(false));;
//   };

//   return (
//     <div>
//       {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//         Open Menu
//       </Button> */}

//       <IconButton
//         color="inherit"
//         aria-controls="simple-menu"
//         aria-hanspopup="true"
//         onClick={handleClick}
//       >
//         <AccountCircle />
//       </IconButton>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         style={{ marginTop: 40 }}
//       >
//         <MenuItem>
//           <div style={{ display: "flex" }}>
//             <div style={{ flex: 1, marginRight: 8, marginTop: 5 }}>
//               <Avatar src="https://miro.medium.com/fit/c/48/48/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg" />
//             </div>
//             <div style={{ flex: 1 }}>
//               <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
//                 Andy Raskin
//               </Typography>
//               <Link
//                 to="/articleperson"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 <Typography variant="caption">@AndyRaskin1902982717</Typography>
//               </Link>
//             </div>
//           </div>
//         </MenuItem>
//         <MenuItem style={{ color: "green" }}>Become a member</MenuItem>
//         <hr />
//         <Link to="/newstory" style={{ textDecoration: "none", color: "black" }}>
//           <MenuItem>New Story</MenuItem>
//         </Link>
//         <Link
//           to="/yourstories"
//           style={{ textDecoration: "none", color: "black" }}
//         >
//           <MenuItem>Stories</MenuItem>
//         </Link>
//         <Link to="/stats" style={{ textDecoration: "none", color: "black" }}>
//           <MenuItem>Stats</MenuItem>
//         </Link>

//         <hr />
//         <Link to="/bookmark" style={{ textDecoration: "none", color: "black" }}>
//           <MenuItem>Bookmark</MenuItem>
//         </Link>
//         <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
//           <MenuItem>Profile</MenuItem>
//         </Link>

//         <MenuItem onClick={handleClose}>Setting</MenuItem>
//         <MenuItem onClick={handleClose}>Help</MenuItem>

//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },

  title: {
    flexGrow: 1,
    textDecoration: "none",
    "&:visited": { color: "black" }
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  const login = props.login.islogin;
  // console.log(login);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        {/* <React.Fragment> */}
        <div>
          <Toolbar style={{ marginRight: 320, marginLeft: 330 }}>
            <Link to="/" className={classes.title}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Medium
              </Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* <ModalLogin/> */}
            {login ? (
              <ProfilButton />
            ) : (
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="outlined">Sign Up</Button>
              </Link>
            )}
            {/* <Register name="Sign Up"/> */}
            {/* <Fab size="small" color="secondary">
            R
          </Fab> */}
            {/* <IconButton color="inherit">
              <AccountCircle />
            </IconButton> */}

            {/* {login ?  : null} */}
          </Toolbar>
        </div>
      </AppBar>
      {/* </React.Fragment> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(ButtonAppBar);
