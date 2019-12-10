import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';




const Recommendation = (props) => {
    return(
        
        <Card style={{height:'150px', display:'flex', marginBottom:'20px'}}>
            
            <div style={{flex:'1'}}>
            <CardActionArea>
                <CardContent>
                <Typography component="h5" variant="h6" style={{fontWeight:'bold'}}>
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
            <CardMedia
            style={{width:'150px'}}
            image={props.url}
            title="Live from space album cover"
            />
        </Card>
        
    );

}

export default Recommendation;