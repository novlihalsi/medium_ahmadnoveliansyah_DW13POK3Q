import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';


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





function Category(props) {
  const classes = useStyles();

  const { sections } = props;


  return (
    <div className={classes.root}>
      <div>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      </div>
    </div>
  );
}

export default Category;