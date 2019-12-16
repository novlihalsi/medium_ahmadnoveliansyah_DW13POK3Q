import React, {Component} from 'react';
import { Typography, CardContent, CardActionArea, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


export const articleperson = [
  {  
    src:'https://miro.medium.com/fit/c/80/80/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg',
    nama: 'Andy Raskin',
    time: 'Mar 11 · 1 min read',
    isi: "Thank you for the mind opening article, Melissa! I’d like to suggest a few more (less critical) reasons to your list: 1. You don’t seek help and support when you need them. You refuse help when someone is giving it to you. You think you are so smart and so hardworking you can do it yourself, but you can’t.",
    response:'4 Responses'
  },
  {  
    src:'https://miro.medium.com/fit/c/80/80/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg',
    nama: 'Andy Raskin',
    time: 'Mar 11 · 1 min read',
    isi: "Thank you for the mind opening article, Melissa! I’d like to suggest a few more (less critical) reasons to your list: 1. You don’t seek help and support when you need them. You refuse help when someone is giving it to you. You think you are so smart and so hardworking you can do it yourself, but you can’t.",
    response:'4 Responses'
  },
  {  
    src:'https://miro.medium.com/fit/c/80/80/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg',
    nama: 'Andy Raskin',
    time: 'Mar 11 · 1 min read',
    isi: "Thank you for the mind opening article, Melissa! I’d like to suggest a few more (less critical) reasons to your list: 1. You don’t seek help and support when you need them. You refuse help when someone is giving it to you. You think you are so smart and so hardworking you can do it yourself, but you can’t.",
    response:'4 Responses'
  },

]


function CardArticlePerson (props) {

  return(
    <div style={{marginTop:30}}>
      <Card>
        <CardContent >
          <div style={{display:'flex', alignItems:'center'}}>
            <div style={{flex:1}}>
              <Avatar src={props.src} style={{width:50,height:50}}/>
            
            </div>
            <div style={{flex:8}}>
              <Typography style={{fontSize:15, fontWeight:'bold', color:'green'}}>{props.nama}</Typography>
              <Typography style={{fontSize:10, color:'grey'}}>{props.time}</Typography>
            </div>
          </div>

          <div style={{padding:"20px 10px 20px 0"}}>
            <CardMedia
            component="img"
            src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg"
            />
            <Typography style={{marginTop:30}}>{props.isi}</Typography>
            <Button style={{fontSize:12,marginTop:10}}>Read More</Button>
          </div>

          <div style={{display:'flex', alignItems:'center'}}>
            <div style={{flex:1, display:'flex'}}>
              <img src="https://cdn1.iconfinder.com/data/icons/hand-gestures-line-art/128/hand-clap-noise-ol-512.png" style={{width:28,height:28,marginRight:10}}/>
              <Typography style={{paddingTop:5}}>55K</Typography>
            </div>
            <div style={{flex:1, display:'flex',justifyContent:'flex-end'}}>
              <Typography style={{paddingTop:3, paddingRight:5}}>{props.response}</Typography>
              <BookmarkBorderIcon style={{width:28, height:28}}/>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

}

export default CardArticlePerson;