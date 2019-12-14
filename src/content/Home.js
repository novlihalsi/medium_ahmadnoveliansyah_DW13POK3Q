import React, {Component} from 'react';
import ButtonAppBar from '../components/Navbar';
import { Button, Typography } from '@material-ui/core';
import Article from './Article';
import MiniArticle from './Miniarticle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Category from '../components/Category';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recommendation from './Recommendation';
import Popular from './Popular';




const miniarticles = [
  {
    url:"https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg",
    judul:"What Good Sleepers Don’t Do", 
    user:"Dave Gershgorn", 
    time: "Dec 6 · 3 min read"
  },

  {
    url:"https://miro.medium.com/max/3436/1*V7Si4unlnDsQ03Hg674y_A.jpeg", 
    judul:"The Joy of Being an Untethered Woman.", 
    user:"Dave Gershgorn", 
    time:"Dec 6 · 3 min read"
  },

  {
    url:"https://miro.medium.com/max/5281/0*VahBqXSpvucxy1JF", 
    judul:"Your Family’s Behavioral Patterns Are in Your DNA", 
    user:"Dave Gershgorn", 
    time:"Dec 6 · 3 min read"
  }
]

const popular = [
  {id:"01",
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong",
    isi:"I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not", 
    user:"D.A. Kirk", 
    time:"Dec 13, 2018 · 7 min read"
  },
  
  {
    id:"02",
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg", 
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong", 
    isi:"I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not",
    user:"D.A. Kirk", 
    time:"Dec 13, 2018 · 7 min read"
  },
  
  {
    id:"03",
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong", 
    isi:"I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not", 
    user:"D.A. Kirk",
    time:"Dec 13, 2018 · 7 min read"
  },
  
  {
    id:"04",
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong", 
    isi:"I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not",
    user:"D.A. Kirk",
    time:"Dec 13, 2018 · 7 min read"
  },

  
  {
    id:"05",
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong",
    isi:"I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not",
    user:"D.A. Kirk",
    time:"Dec 13, 2018 · 7 min read"
  },
]

export const recommendation = [
    
  {
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong" ,
    isi: "I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" ,
    user: "D.A. Kirk" ,
    time: "Dec 13, 2018 · 7 min read",
  },

  {
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong" ,
    isi: "I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" ,
    user: "D.A. Kirk" ,
    time: "Dec 13, 2018 · 7 min read",
  },

  {
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong" ,
    isi: "I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" ,
    user: "D.A. Kirk" ,
    time: "Dec 13, 2018 · 7 min read",
  },

  {
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong" ,
    isi: "I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" ,
    user: "D.A. Kirk" ,
    time: "Dec 13, 2018 · 7 min read",
  },

  {
    url:"https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg",
    judul:"One Man’s Execution Convinced Me the Death Penalty Is Wrong" ,
    isi: "I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" ,
    user: "D.A. Kirk" ,
    time: "Dec 13, 2018 · 7 min read",
  },

]
  


class Home extends Component {
  
  render () {
    return (

      // <Container maxWidth="lg">
      <div>
          <div >
            <ButtonAppBar/>
            
          </div>

          <div style={{margin:'0 350px 0 350px', position:'sticky', top:'0', zIndex:'1000', backgroundColor:'white'}}>
            <Category/>
          </div >

          <div style={{flexGrow: 1, margin:'0 350px 0 350px'}}>
              <div>
              
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Article url="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" 
                      judul="The Greatest Sales Deck I’ve Ever Seen" 
                      isi="For employees of the suitcase company Away, it might have been valid complaints in a private Slack channel about how the company was not as progressive" 
                      user="Andy Raskin" 
                      time="Dec 6 · 3 min read"/>
                  </Grid>
                  <Grid container item md={4}>
                    {miniarticles.map(item => 
                      <MiniArticle
                        url={item.url}
                        judul={item.judul} 
                        user={item.user}
                        time={item.time}/>  
                      )}
                  </Grid>
                  <Grid item md={4}>
                    <Article 
                      url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                      judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                      isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                      user="D.A. Kirk" 
                      time="Dec 13, 2018 · 7 min read"/>
                  </Grid>
              </Grid>
            </div>
            
            <div style={{display: 'flex', justifyContent:'flex-end', marginTop:'20px'}}>
              <Button color='primary'>
                SEE ALL FEATURED<ArrowForwardIosIcon/>
              </Button>
            </div>

            <div style={{padding:'10px 0 20px 0', marginBottom:'30px'}}>
              <hr/>
            </div>

            <div>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <div style={{margin:'50px 70px 50px 70px', position:'sticky', top:'50px'}}>
                    <div style={{margin:'10px 10px 30px 10px'}}>
                      <Typography variant="h5">Popular on Medium</Typography>
                      <hr/>
                    </div>
                    <div style={{marginBottom:'50px'}}>
                      {popular.map(item =>
                        <Popular
                          id={item.id}
                          judul={item.judul}
                          isi={item.isi}
                          user={item.user}
                          time={item.time}
                        />
                        )}
                    </div>
                    <div>
                      <hr/>
                      <Button>Help</Button>
                      <Button>Status</Button>
                      <Button>Writers</Button>
                      <Button>Blog</Button>
                      <Button>Careers</Button>
                      <Button>Privacy</Button>
                      <Button>Term</Button>
                      <Button>About</Button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <div style={{}}>
                    {recommendation.map(item => 
                      <Recommendation
                        url={item.url}
                        judul={item.judul} 
                        isi={item.isi}
                        user={item.user}
                        time={item.time}
                      />
                      )}
                  </div>
                </Grid>
              </Grid>
            </div>

        </div>

        
      {/* </Container> */}
      </div>
    );
  }
}
  
export default Home;