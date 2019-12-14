import React , {Component} from 'react'
import { Typography, Avatar, IconButton } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';




class Related extends Component {
  render() {
    return(

      <div style={{flex: 1, marginRight:30}}>
        <Typography variant='subtitle1' style={{color:'grey'}}>More from Andy Raskin</Typography>
        <img src="https://miro.medium.com/max/1920/1*nqMJIjPVa3_yhIu6KXku_w.jpeg" style={{width:"376px", height:"250px"}}/>
        <Typography variant="h5" style={{fontWeight:'bold'}}>How to Predict Future Job Performance</Typography>
        <div style={{display:'flex'}}>
          <div style={{flex:1, marginTop:'8px'}}>
            <Avatar src="https://miro.medium.com/fit/c/48/48/1*ph1uC3brGvGipS-ezA9pfA.jpeg"/>

          </div>
          <div style={{flex:3,paddingTop:8}}>
            <Typography>Andy Raskin</Typography>
          
            <Typography variant="caption">Jul 1, 2014 · 5 min read </Typography>
          </div>

          <div style={{display:'flex', flex:1, flexDirection:'row', alignItems:'center',paddingTop:8, marginBottom:30}}>
            <IconButton>
              <img src="https://static.thenounproject.com/png/1085294-200.png" style={{width:25,height:25}}/>
            </IconButton>
            <Typography variant="caption" style={{marginRight:10}}>55K</Typography>
            <Typography>|</Typography>
            <IconButton><BookmarkBorderIcon/></IconButton>
            
          </div>
  

        </div>

      </div>

    );
  }
}


class RelatedArticle extends Component {
  render() {
    return (

      <div style={{backgroundColor:'#f2f0eb'}}>
        
        <div style={{margin:'0 350px 0 380px'}}>
        <div style={{paddingTop:40, marginBottom:30}}>
          <Typography variant="h5" style={{fontWeight:'bold'}}>More From Medium</Typography>
          <hr/>
        </div>

        <div style={{display:'flex', flexDirection:'row'}}>
          <Related/>
          <Related/>
          <Related/>

        </div>



        </div>
      </div>

    );
  }
}

export default RelatedArticle;