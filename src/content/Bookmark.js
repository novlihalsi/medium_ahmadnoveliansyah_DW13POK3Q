import React, {Component} from 'react'
import { Paper, Typography, Button } from '@material-ui/core'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ButtonAppBar from '../components/Navbar'

class Bookmark extends Component {
  render(){
    return(
      <div>

        <ButtonAppBar/>

        <div style={{margin:'50px 350px 0 350px'}}>

          <div>
            <Typography variant="h4" style={{fontWeight:'bold'}}>
              Bookmark
            </Typography>
          </div>

          <div>
            <Paper style={{display:'flex' , alignItems:'center', height:90, marginTop:20}}>

              <BookmarkIcon style={{fontSize:'50',marginRight:30, marginLeft:30}}/>

              <Typography variant="h4" >|</Typography>

              <Typography variant="h5" style={{margin:"0 650px 0 30px", fontWeight:'bold'}}>Offline reading is here.</Typography>

              <Button variant="contained" size="small" style={{backgroundColor:'black', color:'white'}}>Upgrade</Button>

            </Paper>
          </div>
        </div>
      </div>

    );
  }
}

export default Bookmark;