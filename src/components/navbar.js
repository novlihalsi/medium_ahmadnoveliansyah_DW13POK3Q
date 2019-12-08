import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TransitionModal from '../Register';
import ModalLogin from '../Login';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Medium
          </Typography>
          <ModalLogin/>
          <TransitionModal/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;