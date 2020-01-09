import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fullname: "",
        username: "",
        email: "",
        password: ""
      },
      error: false
    };
  }

  handleFormchange = event => {
    let usernew = { ...this.state.user };
    usernew[event.target.name] = event.target.value;
    this.setState({
      user: usernew
    });
    this.setState({ error: false });
  };

  handlePress = () => {
    const { fullname, username, email, password } = this.state.user;
    if (!fullname || !username || !email || !password) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false
      });
      axios
        .post(`http://localhost:5000/api/v1/register`, {
          fullname: fullname,
          username: username,
          email: email,
          password: password
        })
        .then(res => {
          alert("Success : Silahkan Login");
          this.props.history.push("/login");

          // this.props.dispatch(login(true));
        })
        .catch(err => {
          alert(err);
        });
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "180px 300px 0 300px"
          }}
        >
          <div style={{ flex: 1 }}>
            <img src="https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png" />
          </div>
          <div style={{ flex: 1, padding: "20px 100px 50px 100px" }}>
            <div>
              <Typography
                variant="h4"
                style={{ marginBottom: 20, fontWeight: "bold" }}
              >
                Join medium.
              </Typography>
              <Typography style={{ marginBottom: 15 }}>
                Create an account to receive great stories in your inbox,
                personalize your homepage, and follow authors and topics that
                you love.
              </Typography>
            </div>

            <div>
              <TextField
                label="Fullname"
                name="fullname"
                style={{ width: 300, marginBottom: 20 }}
                onChange={this.handleFormchange}
              />
              <TextField
                label="Username"
                name="username"
                style={{ width: 300, marginBottom: 20 }}
                onChange={this.handleFormchange}
              />
              <TextField
                style={{ width: 300, marginBottom: 20 }}
                label="Password"
                type="password"
                name="password"
                onChange={this.handleFormchange}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={this.handleFormchange}
                style={{ width: 300, marginBottom: 20 }}
              />
            </div>
            {this.state.error ? (
              <div>
                <Typography variant="h5" style={{ color: "red" }}>
                  All Field Required
                </Typography>
              </div>
            ) : (
              <div></div>
            )}

            <div style={{ marginBottom: 30 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handlePress}
              >
                Register
              </Button>
            </div>

            <div>
              <Typography>
                Already have an account? <Link to="/login">Sign in</Link>
              </Typography>
              <Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Back to Home
                </Link>
              </Typography>
              <Typography variant="subtitle2" style={{ color: "grey" }}>
                To make Medium work, we log user data and share it with service
                providers. Click “Sign Up” above to accept Medium’s{" "}
                <a href="#">Terms of Service</a> &{" "}
                <a href="#">Privacy Policy</a>.
              </Typography>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

// import React from 'react';
// import { Button, Modal, makeStyles, Backdrop, Fade, TextField, Typography } from '@material-ui/core';
// import ModalLogin from './Login';
// import CloseIcon from '@material-ui/icons/Close';

// const useStyles = makeStyles(theme => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     flexDirection : 'row',
//     display : 'flex',
//     width : '900px',
//     height : '566px',
//     backgroundColor: theme.palette.background.paper,
//     // boxShadow: theme.shadows[5],
//   },

// }));

//   function Register(props) {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//       setOpen(true);
//     };

//     const handleClose = () => {
//       setOpen(false);
//     };

//     return (

//       <div>
//         <Button variant={props.variant} onClick={handleOpen} color={props.color}>
//           {props.name}
//         </Button>
//         <Modal
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <div style={{width:'214px'}}><img src={'https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png'} alt="#" style={{height: '100%' ,width: '100%'}}/></div>
//             <div style={{width:'472px', textAlign: 'center', padding:'0px 56px 0px 56px'}}>
//                 <div style={{marginBottom: '20px', marginTop:'20px'}}>
//                     <Typography variant='h4' style={{marginBottom: '10px'}}>Join Medium.</Typography>
//                     <Typography variant='subtitle2' style={{color: 'grey'}}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</Typography>
//                 </div>
//                 <div>
//                     <Typography style={{color: 'grey'}}>Your username</Typography>
//                     <TextField id='standard-basic'/>
//                     <Typography style={{marginTop:'15px', color: 'grey'}}>Your password</Typography>
//                     <TextField id='standard-basic'/>
//                     <Typography style={{marginTop:'15px', color: 'grey'}}>Your email</Typography>
//                     <TextField id='standard-basic'/>
//                 </div>
//                 <div style={{marginTop: '20px'}}>
//                     <Button variant='contained' color='primary'>
//                             Register
//                     </Button>
//                 </div>
//                 <div>
//                     <Typography style={{fontWeight: 'bold' , marginTop: '10px', marginBottom: '10px'}}>Already have an account? <ModalLogin name="Sign In" onClickLogin={handleClose}/></Typography>
//                 </div>
//                 <div>
//                     <Typography variant='subtitle2' style={{color: 'grey'}}>To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s <a href='#' >Terms of Service</a> & <a href='#'>Privacy Policy</a>.</Typography>
//                 </div>
//             </div>
//             <div style={{width:'214px', position: 'relative'}}>
//               <div style={{position: 'absolute', top: '0px', right:'0px'}}><Button size='small' onClick={handleClose}><CloseIcon/></Button></div>
//               <img src={'https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png'} alt="#" style={{height: '100%' ,width: '100%'}}/></div>
//           </div>
//         </Fade>
//       </Modal>

//       </div>

//     );

//     }

//       export default Register;
