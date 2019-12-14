import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Avatar } from '@material-ui/core';
import ButtonAppBar from '../components/Navbar'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton'
import Follow from '../components/Follow';
import RelatedArticle from '../components/RelatedArticle';
import Footer from '../components/Footer';


const style = {
  root: {
    flexGrow: 1,
    marginBottom: '20px',
    marginLeft:300
    
  },

  toolbarLink: {
    padding: 10,
    flexShrink: 0,
  },
  toolbarSecondary: {
  //   justifyContent: 'space-between',
    overflowX: 'auto',
    paddingLeft: '50px',
    paddingRight: '50px',
    
    
  },
    
};

  


class ArticleDetails extends Component {
    
  render() {
    return (
      <div>
        <ButtonAppBar/>
        <div style={style.root}>
          <Toolbar component="nav" variant="dense" style={style.toolbarSecondary}>
            <img src="https://miro.medium.com/max/216/1*IPEsgX_bZKP_7OubdnI7-Q.png" style={{marginRight:30}}/>
            <Button>Mission Original</Button>
            <Typography>|</Typography>
            <Button>Subscribe</Button>
          </Toolbar>
            
        </div>

        <div style={{margin:'0 350px 0 350px' }}>
          <Grid container >
            <Grid item xs={12} style={{textAlign:'center'}}>
                <Card style={{display:'flex', backgroundColor:'#6A0BFF'}}>
                    <CardMedia
                    component="img"
                    style={{flex:1}}
                    image={'https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg'}
                    title="Live from space album cover"
                    />
                    </Card>
                <Typography style={{marginTop:'10px'}}>Photo by Olu Eletu</Typography>
            </Grid>

            <Grid container style={{margin:'0 100px 0 250px'}}>
              <Grid item xs={12}>
                <Typography variant="h4" style={{marginBottom:10, marginTop:20}}>
                The Greatest Sales Deck I’ve Ever Seen
                </Typography>
                <Typography style={{color:'grey'}}>
                It’s Zuora’s, and it’s brilliant. Here’s why.
                </Typography>
              </Grid>
              <Grid container item xs={12} style={{marginTop:20}}>
                  
                <Grid item xs={1}>
                  <Avatar src="https://miro.medium.com/fit/c/48/48/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg" style={{margin:'auto'}}/>

                </Grid>
                <Grid item xs={7}>
                  <div style={{display:'flex',flexDirection:"row"}}>
                    <Typography style={{marginRight:5}}>Andy Raskin</Typography>
                    <Button variant="outlined" size="small" style={{height:20, fontSize:9}}>Follow</Button>
                  </div>
                  <div>
                  <Typography variant="caption">Sep 15, 2016 · 8 min read</Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{display:'flex',flexDirection:"row",}}>
                    <IconButton><TwitterIcon/></IconButton>
                    <IconButton><LinkedInIcon/></IconButton>
                    <IconButton><FacebookIcon/></IconButton>
                    <IconButton><BookmarkBorderIcon/></IconButton>
                  </div>
                </Grid>
                  
                <Grid item xs={12} style={{marginTop: 40}}>

                  <Typography variant="subtitle1" style={{fontSize:18, marginRight:100}}>
                    A few months ago, my friend Tim took a new sales job at a Series C tech company that had raised over $60 million from A-list investors. He’s one of the best salespeople I know, but soon after starting, he emailed me to say he was struggling.
                    <br/>
                    <br/>
                    “I’ve landed a few small accounts,” Tim said. “But my pitch falls flat at big enterprises.”
                    <br/>
                    <br/>
                    As I’ve written before, I love helping teams craft the high-level strategic story that powers sales, marketing, fundraising — everything. So Tim and I met for lunch at the Amber India restaurant off San Francisco’s Market Street to review his deck.
                    <br/>
                    <br/>
                    After loading up on the all-you-can-eat buffet, I asked Tim, “At what point do prospects tune out?”
                    <br/><br/>
                    “Usually a few slides in,” he said.
                    <br/><br/>
                    Intent on maximizing dining ROI, Tim went back to the buffet for seconds. When he returned, I pulled out my laptop and launched into a Powerpoint presentation.
                  </Typography>
                </Grid>

                <Grid item xs={12} style={{marginTop:20, marginRight:100}}>
                  <Follow/>
                </Grid>

              </Grid>

            </Grid>

          </Grid>

            

            
        </div>

        <div>
          <RelatedArticle/>
        </div>

        <div>
          <Footer/>
        </div>

          
          


      </div>
    );
  }

}

    export default ArticleDetails;