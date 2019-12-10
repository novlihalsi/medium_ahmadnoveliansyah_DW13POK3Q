import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TransitionModal from '../Register';
// import ModalLogin from '../Login';
// import Fab from '@material-ui/core/Fab';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    paddingLeft: '50px',
    paddingRight: '50px'
  },
  
}));



function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="white"> */}
      {/* <React.Fragment> */}
      <div>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Medium
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          {/* <ModalLogin/> */}
          <TransitionModal/>
          {/* <Fab size="small" color="secondary">
            R
          </Fab> */}
          
        </Toolbar>
      </div>
      {/* </AppBar> */}
      {/* </React.Fragment> */}
    </div>
  );
}

export default ButtonAppBar;