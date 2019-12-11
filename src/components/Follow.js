import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { IconButton,Avatar } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const tag = [
    {name: 'Start Up'},
    {name: 'Entrepreneurship'},
    {name: 'Sales'},
    {name: 'Marketing'},
    {name: 'Pitching'},
]

class Follow extends Component {
    render() {
        return(
            
            <div>
                <Grid item xs={12}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        {tag.map(item=>
                            <Button variant="contained" size="small" style={{marginRight:10}}>{item.name}</Button>
                            )}
                    </div>
                </Grid>

                <Grid container style={{marginTop:20}}>
                <Grid item xs={1} style={{alignItems:'center'}}>
                    <IconButton>
                        <img src="https://image.flaticon.com/icons/svg/1313/1313777.svg" style={{width:50, height:50}}/>
                    </IconButton>

                </Grid>
                <Grid item xs={7} style={{paddingTop:25, paddingLeft:10}} >
                    <div>
                        <Typography>54K claps</Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{display:'flex',flexDirection:"row", marginTop:10}}>
                        <IconButton><TwitterIcon/></IconButton>
                        <IconButton><LinkedInIcon/></IconButton>
                        <IconButton><FacebookIcon/></IconButton>
                        <IconButton><BookmarkBorderIcon/></IconButton>
                        <IconButton><MoreHorizIcon/></IconButton>
                    </div>
                </Grid>
                </Grid>
                <div>
                    <hr/>
                </div>

                <Grid container style={{marginTop:20, marginBottom:60}}>
                <Grid item xs={2} style={{alignItems:'center'}}>
                    <IconButton>
                        <Avatar src="https://miro.medium.com/fit/c/80/80/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg" style={{width:80,height:80}}/>
                    </IconButton>

                </Grid>
                <Grid item xs={7} >
                    <div>
                        <Typography style={{color:"grey",fontSize:15}}>Written by</Typography>
                        <Typography style={{fontWeight:'bold', fontSize:25}}>Andi Raskin</Typography>
                        <Typography style={{color:'grey', fontSize:15}}>Helping leaders tell strategic stories. Ex @skype @mashery @timeinc http://andyraskin.com</Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{display:'flex',flexDirection:"row", marginTop:30}}>
                        <Button variant="outlined" style={{margin:'auto', color:'green'}}>Follow</Button>
                    </div>
                </Grid>
                </Grid>

                <Grid container style={{marginBottom:20}}>
                <Grid item xs={2} style={{alignItems:'center'}}>
                    <IconButton>
                        <Avatar src="https://miro.medium.com/fit/c/80/80/1*kFWwYehzjJIhgw8hTygfHw.png" style={{width:80,height:80}}/>
                    </IconButton>

                </Grid>
                <Grid item xs={7} >
                    <div>
                        <Typography style={{color:"grey",fontSize:15}}>Written by</Typography>
                        <Typography style={{fontWeight:'bold', fontSize:25}}>Andi Raskin</Typography>
                        <Typography style={{color:'grey', fontSize:15}}>Helping leaders tell strategic stories. Ex @skype @mashery @timeinc http://andyraskin.com</Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{display:'flex',flexDirection:"row", marginTop:30}}>
                        <Button variant="outlined" style={{margin:'auto',color:'green'}}>Follow</Button>
                    </div>
                </Grid>
                
                </Grid>
                <div>
                    <hr/>
                </div>
                <div style={{display:'flex', flex:'1', flexDirection:'column', marginBottom:50, marginTop:20}}>
                    <Button variant="outlined" style={{height:50, color:'green'}}>See Responses</Button>
                </div>
                
                
                


            </div>

        );
    }
}

export default Follow;