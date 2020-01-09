import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';




const Popular = (props) => {
  return(
      
    <Card elevation="0" style={{height:'120px', display:'flex',marginLeft:20}}>
      
      <div style={{flex:1, marginTop:'15px'}}>
        <Typography variant="h4" color="textSecondary">
          {props.id}
        </Typography>
      </div>
      <div style={{flex:5}}>
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
    </Card>
      
  );

}

export default Popular;