import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'




class ContentFooter extends Component {
  render() {
    return(
      <div style={{flex:1, padding:30,marginTop:20}}>
        <Typography variant="h6" style={{color:'white', fontWeight:'bold', marginBottom:20}}>
          Discover Medium
        </Typography>
        <Typography style={{color:'white'}}>
        Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch
        </Typography>

      </div>
    )
  }
}





class Footer extends Component {
  
  render() {
    return(
      
      <div style={{backgroundColor:'#000000e6'}}>
        <div style={{margin:'0 350px 0 380px'}}>
          <div style={{display:'flex'}}>
          <ContentFooter/>
          <ContentFooter/>
          <ContentFooter/>
          </div>

          <div>
            <hr/>
          </div>

          <div style={{display:'flex', padding:'20px 0 40px 0'}}>
            <div style={{flex:1}}>
              <Typography variant="h4" style={{color:'white'}}>
                Medium
              </Typography>
            </div>
            <div style={{flex:1,display:'flex', justifyContent:'flex-end'}}>
              <Button style={{color:'white'}}>
                About
              </Button>
              <Button style={{color:'white'}}>
                Help
              </Button>
              <Button style={{color:'white'}}>
                Legal
              </Button>

            </div>

          </div>


        </div>


      </div>
    );
  }
}

export default Footer;