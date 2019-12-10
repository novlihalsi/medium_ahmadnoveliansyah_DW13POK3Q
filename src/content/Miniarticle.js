import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';




const MiniArticle = (props) => {
    return(
        <CardActionArea>
            <Card style={{height:'120px', display:'flex'}}>
                <CardMedia
                style={{width:'117px'}}
                image={props.url}
                title="Live from space album cover"
                />
                <div style={{flex:'1'}}>
                    <CardContent>
                    <Typography component="h7" style={{fontWeight:'bold'}}>
                        {props.judul}
                    </Typography>
                    <Typography variant="subtitle2" color="black" style={{fontSize:'12px'}}>
                        {props.user}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        {props.time}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
        </CardActionArea>
    );

}

export default MiniArticle;