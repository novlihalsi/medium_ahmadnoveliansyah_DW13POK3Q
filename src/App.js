import React, {Component} from 'react';
import ButtonAppBar from './components/Navbar';
import { Container,Button, Typography } from '@material-ui/core';
import Article from './content/Article';
import MiniArticle from './content/Miniarticle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Category from './components/Category';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recommendation from './content/Recommendation';
import Popular from './content/Popular';




const sections = [
  { title: 'HOME', url: '#' },
  { title: 'ONEZERO', url: '#' },
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

class App extends Component {
  
  render () {
    return (

      // <Container maxWidth="lg">
      <div>
          <div style={{margin:'0 350px 0 350px'}}>
            <ButtonAppBar/>
          </div>

          <div style={{margin:'0 350px 0 350px', position:'sticky', top:'0', zIndex:'1000', backgroundColor:'white'}}>
            <Category sections={sections}/>
          </div >

          <div style={{flexGrow: 1, margin:'0 350px 0 350px'}}>
              <div>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                  <Article url="https://miro.medium.com/max/4750/1*hjnZmMS2URkaXm52z8J5EQ.png" 
                    judul="Delete Your Slack Messages Right Now. Here’s How." 
                    isi="For employees of the suitcase company Away, it might have been valid complaints in a private Slack channel about how the company was not as progressive" 
                    user="Dave Gershgorn" 
                    time="Dec 6 · 3 min read"/>
                  </Grid>
                  <Grid container item md={4}>
                    <Grid item md={12}>
                    <MiniArticle 
                      url="https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg" 
                      judul="What Good Sleepers Don’t Do" 
                      user="Dave Gershgorn" 
                      time="Dec 6 · 3 min read"/>
                    </Grid>
                    <Grid item md={12}>
                    <MiniArticle 
                      url="https://miro.medium.com/max/3436/1*V7Si4unlnDsQ03Hg674y_A.jpeg" 
                      judul="The Joy of Being an Untethered Woman." 
                      user="Dave Gershgorn" 
                      time="Dec 6 · 3 min read"/>
                    </Grid>
                    <Grid item md={12}>
                    <MiniArticle 
                      url="https://miro.medium.com/max/5281/0*VahBqXSpvucxy1JF" 
                      judul="Your Family’s Behavioral Patterns Are in Your DNA" 
                      user="Dave Gershgorn" 
                      time="Dec 6 · 3 min read"/>
                    </Grid>
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
                    <Popular
                    id="01"
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Popular
                    id="02"
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Popular
                    id="03"
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Popular
                    id="04"
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Popular
                    id="05"
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                      
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
                  <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>
                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>

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
  
export default App;