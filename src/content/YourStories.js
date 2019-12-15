import React, {Component} from 'react'
import { Typography, Button } from '@material-ui/core'
import ButtonAppBar from '../components/Navbar'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'theme.palette.background.paper',
  },
}));

function TabYourStories() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          
        </Tabs>
      
      <TabPanel value={value} index={0}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <Typography>
          You have no drafts
          Write on the go with our iOS and Android apps!
          </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}

class YourStories extends Component {
  render() {
    return (

      <div>
        <ButtonAppBar/>
        <div style={{margin:'0 350px 0 350px' }}>

          <div style={{display:'flex', margin:'80px 0 0 0'}}>
            <Typography variant="h3" style={{marginRight:650}}>
              Your Stories
            </Typography>

            <Button variant="outlined">
              Import a story
            </Button>

            <Button variant="outlined" style={{color:'green', marginLeft:20}}>
              Write a story
            </Button>

          </div>

          <div style={{marginTop:30}}>
            <TabYourStories/>
          </div>



        </div>

      </div>
      )
  }
}

export default YourStories;