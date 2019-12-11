import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


const style = {

    title: {
        flexGrow: 1,
        textDecoration: 'none',
        '&:visited': {fontColor: 'black'},
        
      },




}

const Article = (props) => {
    return(
        // <CardActionArea>
            
            <Card elevation="0" style={{height:'395px'}}>
                <CardMedia
                style={{width:'399px', height:'150px', margin:'auto'}}
                image={props.url}
                title="Live from space album cover"
                />
                <div >
                    <CardContent>
                    <Link to="/articledetail" style={style.title}><Typography component="h5" variant="h5" paragraph='1' style={{fontWeight:'bold',color:'black'}}>
                        {props.judul}
                    </Typography></Link>
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
            
        // </CardActionArea>
    );

}

export default Article;