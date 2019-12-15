import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Chart from './Chart'
import Paper from '@material-ui/core/Paper'

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

function TabStats() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function Number() {
    return (
      
        <Typography>Test</Typography>
      
    )
  }

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
          <Tab label="0 Views (30 days)" {...a11yProps(0)}/>
          <Tab label="0 Reads (30 days)" {...a11yProps(1)} />
          <Tab label="0 Fans (30 days)" {...a11yProps(2)} />
          
          
        </Tabs>
      
      <TabPanel value={value} index={0}>
  
      <div style={{display:'flex', justifyContent:'center'}}>
        <Chart/>
      </div>
                
              
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Chart/>
      </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Chart/>
      </div>
      </TabPanel>

      
    </div>
  );
}

export default TabStats;