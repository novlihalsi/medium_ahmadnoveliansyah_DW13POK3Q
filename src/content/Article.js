import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';




const Article = (props) => {
    return(
        <CardActionArea>
            <Card style={{height:'395px'}}>
                <CardMedia
                style={{width:'399px', height:'150px', margin:'auto'}}
                image={props.url}
                title="Live from space album cover"
                />
                <div >
                    <CardContent>
                    <Typography component="h5" variant="h5" paragraph='1' style={{fontWeight:'bold'}}>
                        {props.judul}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" paragraph='1px'>
                        {props.isi}
                    </Typography>
                    <Typography variant="subtitle1" color="black">
                        {props.user}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.time}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
        </CardActionArea>
    );

}

export default Article;