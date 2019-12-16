import React, {Component} from 'react'
import { Typography, Button, Avatar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import ButtonAppBar from '../../components/Navbar'
import TabArticlePerson from './TabArticlePerson'

class ArticlePerson extends Component {
  render () {
    return(

      <div>
        <ButtonAppBar/>

        <div style={{margin:'0 350px 0 350px', padding:"60px 150px 0 150px"}}>
          <Grid container justify="space-between" alignItems="center" style={{}}>

            <Grid item >
              <div style={{display:'flex', }}>
                  <Typography variant="h4" style={{marginRight:60}}>
                    Andy Raskin
                  </Typography>
                  <Button variant="outlined">
                    Edit Profile
                  </Button>
              </div>

              <div>
                <Typography>
                  1 Followers
                </Typography>
              </div>

            </Grid>
            <Grid item>
              <Avatar src="https://miro.medium.com/fit/c/128/128/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg" style={{height:150, width:150}}></Avatar>
            </Grid>
          </Grid>

          <div style={{marginTop:60}}>
            <TabArticlePerson/>
          </div>
        </div>
      </div>

    );
  }
}

export default ArticlePerson;