import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Register from '../Register';
// import ModalLogin from '../Login';
// import Fab from '@material-ui/core/Fab';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';



export function ProfilButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}

      <IconButton color="inherit" aria-controls="simple-menu" aria-hanspopup="true" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{marginTop:40}}
      >
        <MenuItem>
        <div style={{display:'flex'}}>
          <div style={{flex:1, marginRight:8, marginTop:5}}>
            <Avatar src="https://miro.medium.com/fit/c/48/48/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg"/>
            
          </div>
          <div style={{flex:1}}>
            <Typography variant="subtitle1" style={{fontWeight:'bold'}}>Andy Raskin</Typography>
            <Typography variant="caption">@AndyRaskin1902982717</Typography>
          </div>

          
        </div>
        </MenuItem>
        <MenuItem style={{color:'green'}}>Become a member</MenuItem>
        <hr/>
        <MenuItem onClick={handleClose}>New Story</MenuItem>
        <MenuItem onClick={handleClose}>Stories</MenuItem>
        <MenuItem onClick={handleClose}>Stats</MenuItem>
        <hr/>
        <MenuItem onClick={handleClose}>Bookmark</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Setting</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px',
  },
  
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    '&:visited': {color: 'black'},
    
  },


  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  
}));



function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
      {/* <React.Fragment> */}
      <div>
        <Toolbar style={{marginRight:320, marginLeft:330}}>
          <Link to="/" className={classes.title}><Typography variant="h4">
            Medium
          </Typography></Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          {/* <ModalLogin/> */}
          <Link to="/register" style={{textDecoration:'none'}}><Button variant="outlined">Sign Up</Button></Link>
          {/* <Register name="Sign Up"/> */}
          {/* <Fab size="small" color="secondary">
            R
          </Fab> */}
          {/* <IconButton color="inherit">
              <AccountCircle />
            </IconButton> */}

            <ProfilButton/>
          
        </Toolbar>
      </div>
      </AppBar>
      {/* </React.Fragment> */}
    </div>
  );
}

export default ButtonAppBar;