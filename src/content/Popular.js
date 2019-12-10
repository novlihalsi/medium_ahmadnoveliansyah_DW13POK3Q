import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';




const Popular = (props) => {
    return(
        
        <Card style={{height:'100px', display:'flex', marginBottom:'20px'}}>
            
            <div style={{flex:'1'}}>
            <CardActionArea>
                <CardContent>
                <Typography component="h5" style={{fontWeight:'bold', fontSize:'15px'}}>
                    {props.judul}
                </Typography>
                <Typography variant="subtitle2" color="black" style={{fontSize:'12px'}}>
                    {props.user}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    {props.time}
                </Typography>
                </CardContent>
                </CardActionArea>
            </div>
            <div style={{marginRight:'10px', marginTop:'15px'}}>
                <Typography variant="h4" color="textSecondary">
                    {props.id}
                </Typography>
            </div>
            

            {/* <CardMedia
            style={{width:'150px'}}
            image={props.url}
            title="Live from space album cover"
            /> */}
        </Card>
        
    );

}

export default Popular;