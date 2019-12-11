import React from 'react';
import { Button, Modal, makeStyles, Backdrop, Fade, TextField, Typography } from '@material-ui/core';
import ModalLogin from './Login';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    flexDirection : 'row',
    display : 'flex',
    width : '900px',
    height : '566px',
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
  },

  

}));


   function Register(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      
      <div>
        <Button variant={props.variant} onClick={handleOpen} color={props.color}>
          {props.name}
        </Button>
        <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div style={{width:'214px'}}><img src={'https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png'} alt="#" style={{height: '100%' ,width: '100%'}}/></div>
            <div style={{width:'472px', textAlign: 'center', padding:'0px 56px 0px 56px'}}>
                <div style={{marginBottom: '20px', marginTop:'20px'}}>
                    <Typography variant='h4' style={{marginBottom: '10px'}}>Join Medium.</Typography>
                    <Typography variant='subtitle2' style={{color: 'grey'}}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</Typography>
                </div>
                <div>
                    <Typography style={{color: 'grey'}}>Your username</Typography>
                    <TextField id='standard-basic'/>
                    <Typography style={{marginTop:'15px', color: 'grey'}}>Your password</Typography>
                    <TextField id='standard-basic'/>
                    <Typography style={{marginTop:'15px', color: 'grey'}}>Your email</Typography>
                    <TextField id='standard-basic'/>
                 </div>
                <div style={{marginTop: '20px'}}>
                    <Button variant='contained' color='primary'>
                            Register
                    </Button>
                </div>
                <div>
                    <Typography style={{fontWeight: 'bold' , marginTop: '10px', marginBottom: '10px'}}>Already have an account? <ModalLogin name="Sign In"/></Typography>
                </div>
                <div>
                    <Typography variant='subtitle2' style={{color: 'grey'}}>To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s <a href='#' >Terms of Service</a> & <a href='#'>Privacy Policy</a>.</Typography>
                </div>
            </div>
            <div style={{width:'214px', position: 'relative'}}>
              <div style={{position: 'absolute', top: '0px', right:'0px'}}><Button size='small' onClick={handleClose}><CloseIcon/></Button></div>
              <img src={'https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png'} alt="#" style={{height: '100%' ,width: '100%'}}/></div>
          </div>
        </Fade>
      </Modal>
      
      </div>
    

    );

    }
      

      export default Register;