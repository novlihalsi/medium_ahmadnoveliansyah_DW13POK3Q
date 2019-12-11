import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px',
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

const sections = [
  { title: 'HOME', url: '#' },
  { title: 'ONEZERO', url: '/CategoryPage' },
  { title: 'ELEMENTAL', url: '#' },
  { title: 'GEN', url: '#' },
  { title: 'ZORA', url: '#' },
  { title: 'FORGE', url: '#' },
  { title: 'HUMAN PARTS', url: '#' },
  { title: 'MARKER', url: '#' },
  { title: 'LEVEL', url: '#' },
  { title: 'HEATED', url: '#' },
  { title: 'MODUS', url: '#' },
  { title: 'MC', url: '#' },
];





function Category() {
  const classes = useStyles();

  // const { sections } = props;


  return (
    <div className={classes.root}>
      <div>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
        <Link to={section.url}><Button>{section.title}</Button></Link>
          
        ))}
      </Toolbar>
      </div>
    </div>
  );
}

export default Category;