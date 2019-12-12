import React, {Component} from 'react';
import ButtonAppBar from '../components/Navbar'
import { Typography, CardContent, CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const comment = [
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

function ShowComment (props) {

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
                        <Typography>{props.isi}</Typography>
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
                            <ExpandMoreIcon style={{width:28, height:28}}/>
                        </div>
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    );

}

class Comment extends Component {
    render() {
        return(

            <div>
                <ButtonAppBar/>

                {/* Show Responses For */}
                <div className="container-1" style={{margin:'0 650px 50px 650px' }}>
                    <div>
                        <Typography>Showing response for:</Typography>
                    </div>
                    <div>
                        <CardActionArea>
                        <Card style={{display:"flex"}}>
                            <CardContent style={{flex:2}}>
                                <Typography style={{fontWeight:'bold'}}>
                                The Greatest Sales Deck I’ve Ever Seen
                                </Typography>
                                <Typography>
                                Andy Raskin
                                </Typography>

                            </CardContent>
                            <CardContent style={{display:'flex',flex:1,alignItems:'center',justifyContent:'flex-end'}}>
                                <img src="https://cdn1.iconfinder.com/data/icons/hand-gestures-line-art/128/hand-clap-noise-ol-512.png" style={{width:20,height:20,marginRight:10}}/>
                                <Typography style={{marginRight:10}}>88K</Typography>
                                <ChatBubbleOutlineIcon style={{width:20,height:20,marginRight:10}}/>
                                <Typography>300</Typography>
                            </CardContent>
                        </Card>
                        </CardActionArea>
                    </div>
                </div>

                
                <div style={{backgroundColor:'#f2f0eb'}}>
                    <div className="Container-2" style={{margin:'0 650px 0 650px'}}>
                    
                        <div>
                            <Typography style={{paddingTop:30,marginBottom:10, fontWeight:'bold'}}>
                                Response
                            </Typography>
                        </div>
                        
                        {/* Card Input Comment */}
                        <div>
                        <Card>
                            <CardContent style={{display:'flex', alignItems:'center'}}>
                                <Avatar src="https://miro.medium.com/fit/c/80/80/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg" style={{width:50,height:50}}/>
                                <Typography style={{fontSize:15, fontWeight:'bold', color:'green',marginLeft:10}}>Andy Raskin</Typography>
                                

                            </CardContent>
                            <CardContent>
                            <textarea
                                    rows="10"
                                    cols="70" 
                                />
                                <Button variant="outlined" style={{color:'green',marginRight:10}}>Submit</Button>
                                <Button variant="outlined">Go Fullsreen</Button>
                            </CardContent>
                        </Card>
                        </div>

                        <div>
                            {comment.map(item=>(
                                <ShowComment
                                src={item.src}
                                nama={item.nama}
                                time={item.time}
                                isi={item.isi}
                                response={item.response}
                                />

                            ))}
                            
                        </div>

                        

                        


                    </div>



                </div>

            </div>

        );
    }
}

export default Comment;