import React, {Component} from 'react'
import { Typography, Button } from '@material-ui/core'
import ButtonAppBar from '../components/Navbar'
import TabStats from './TabStats'
import TabDetail from './TabDetail'
import {Link} from 'react-router-dom'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



class Stats extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar/>
        <div style={{margin:'0 350px 0 350px' }}>

          <div style={{marginTop:80}}>
            <Typography variant="h3">
              Stats
            </Typography>

          </div>

          <div style={{display:'flex', margin:'30px 0 0 0'}}>
            <Typography variant="h7" style={{color: 'grey', marginRight:700}}>
              Click story below to view detailed stats
            </Typography>

            <Link style={{fontSize:15, textDecoration:'none', color:'grey'}}>Leart more about using stats</Link>

          </div>

          <div style={{marginTop:30}}>
            <TabStats/>
          </div>

          <div style={{display:'flex', justifyContent:'center'}}>
            <Button size="small"><ChevronLeftIcon/>Prev 30 days</Button>
            <Typography style={{fontSize:20}}>|</Typography>
            <Button size="small">Prev 30 days<ChevronRightIcon/></Button>

          </div>

          <div style={{marginTop:30}}>
            <TabDetail/>
          </div>



        </div>

      </div>
    )
  }
}

export default Stats;