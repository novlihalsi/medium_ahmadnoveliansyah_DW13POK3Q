import React from 'react';
import { Button, Modal, makeStyles, Backdrop, Fade, TextField, Typography } from '@material-ui/core';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import Register from './Register';


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
    boxShadow: theme.shadows[5],
  },

  

}));


   function ModalLogin(props) {
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
        <Button color="primary" onClick={handleOpen}>
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
            <div style={{width:'214px'}}><img src={'https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png'} alt="#" style={{height: '100%' ,width: '100%'}}/></div>
            <div style={{width:'472px', textAlign: 'center', padding:'44px 56px 0px 56px'}}>
                <div style={{marginBottom: '50px', marginTop:'20px'}}>
                    <Typography variant='h4' style={{marginBottom: '10px'}}>Sign in with email</Typography>
                    <Typography variant='subtitle2' style={{color: 'grey'}}>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</Typography>
                </div>
                <div style={{marginBottom: '50px'}}>
                    <Typography style={{color: 'grey'}}>Your email</Typography>
                    <TextField id='standard-basic'/>
                    <Typography style={{marginTop:'15px', color: 'grey'}}>Your password</Typography>
                    <TextField id='standard-basic'/>
                 </div>
                <div style={{marginBottom: '30px'}}>
                    <Button variant='contained' color='primary'>
                            Continue
                    </Button>
                </div>
                <div>
                    
                    <Register name="< All sign in options" color="primary"/>
                    
                </div>
                <div>
                
                </div>
            </div>
            <div style={{width:'214px', position: 'relative'}}>
            <div style={{ position: 'absolute',top : '0px',right: '0px'}}><Button size='small' onClick={handleClose}><CloseIcon/></Button></div>
              <img src={'https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png'} alt="#" style={{height: '100%' ,width: '100%'}}/>
            </div>
          </div>
        </Fade>
      </Modal>
      
      </div>
    

    );

    }
      

      export default ModalLogin;