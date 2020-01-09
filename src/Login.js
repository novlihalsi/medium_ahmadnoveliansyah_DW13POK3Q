import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "./_actions/login";
import API from "./services/Api";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: false
    };
  }

  handleEmailChange = event => {
    const input = event.target;
    const value = input.value;

    // this.setState({ [input.name]: value });
    this.setState({ [input.name]: value }, () => {
      // console.log(this.state.email);
    });
  };
  handlePasswordChange = event => {
    const input = event.target;
    const value = input.value;

    // this.setState({ [input.name]: value });
    this.setState({ [input.name]: value }, () => {
      // console.log(this.state.password);
    });
  };
  handlePress = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false
      });
      axios
        .post(`http://localhost:5000/api/v1/login`, {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          if (res.data.error) {
            alert(res.data.message);
          } else {
            const data = res.data;
            localStorage.setItem("id", data.user.id);
            localStorage.setItem("fullname", data.user.fullname);
            localStorage.setItem("username", data.user.username);
            localStorage.setItem("email", data.user.email);
            localStorage.setItem("token", data.token);
            this.props.history.push("/");
            this.props.dispatch(login(true));
            console.log(res.data);
          }
        })
        .catch(err => {
          alert(err);
        });
    }

    // API.login({ email: this.state.email, password: this.state.password }).then(
    //   err => {
    //     this.setState({ error: true });
    //     if (err.res) {
    //       this.props.dispatch(login(false));
    //     }
    //   }
    // );
  };

  // });
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
            marginTop: "200px"
          }}
        >
          <div style={{ flex: 1 }}>
            <img src="https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png" />
          </div>
          <div style={{ flex: 1, padding: "50px 100px 50px 100px" }}>
            <div>
              <Typography variant="h4" style={{ marginBottom: 20 }}>
                Sign in with email
              </Typography>
              <Typography style={{ marginBottom: 15 }}>
                Enter the email address associated with your account, and we’ll
                send a magic link to your inbox.
              </Typography>
            </div>

            <div>
              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={this.handleEmailChange}
                style={{ width: 300, marginBottom: 20 }}
              />
              <TextField
                style={{ width: 300, marginBottom: 40 }}
                name="password"
                label="Password"
                type="password"
                onChange={this.handlePasswordChange}
              />
            </div>

            <div style={{ marginBottom: 30 }}>
              {/* <Link to="/" style={{ textDecoration: "none" }}> */}
              <Button
                variant="contained"
                color="primary"
                onClick={this.handlePress}
              >
                Continue
              </Button>
              {/* </Link> */}
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

            <div>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button style={{ marginRight: 15 }} color="primary">
                  <ChevronLeftIcon />
                  All Sign in Option
                </Button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src="https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(Login);

// import React from 'react';
// import { Button, Modal, makeStyles, Backdrop, Fade, TextField, Typography } from '@material-ui/core';
// // import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import CloseIcon from '@material-ui/icons/Close';
// import Register from './Register';

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
//     boxShadow: theme.shadows[5],
//   },

// }));

// function ModalLogin(props) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);

//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (

//     <div>
//       <Button color="primary" onClick={() =>{props.onClickLogin();}}>
//         {props.name}
//       </Button>
//       <Modal
//       className={classes.modal}
//       open={open}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{
//         timeout: 500,
//       }}
//     >
//       <Fade in={open}>
//         <div className={classes.paper}>
//           <div style={{width:'214px'}}><img src={'https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png'} alt="#" style={{height: '100%' ,width: '100%'}}/></div>
//           <div style={{width:'472px', textAlign: 'center', padding:'44px 56px 0px 56px'}}>
//               <div style={{marginBottom: '50px', marginTop:'20px'}}>
//                 <Typography variant='h4' style={{marginBottom: '10px'}}>Sign in with email</Typography>
//                 <Typography variant='subtitle2' style={{color: 'grey'}}>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</Typography>
//               </div>
//               <div style={{marginBottom: '50px'}}>
//                 <Typography style={{color: 'grey'}}>Your email</Typography>
//                 <TextField id='standard-basic'/>
//                 <Typography style={{marginTop:'15px', color: 'grey'}}>Your password</Typography>
//                 <TextField id='standard-basic'/>
//               </div>
//               <div style={{marginBottom: '30px'}}>
//                   <Button variant='contained' color='primary'>
//                     Continue
//                   </Button>
//               </div>
//               <div>

//                 <Register name="< All sign in options" color="primary"/>

//               </div>
//               <div>

//               </div>
//           </div>
//           <div style={{width:'214px', position: 'relative'}}>
//           <div style={{ position: 'absolute',top : '0px',right: '0px'}}><Button size='small' onClick={handleClose}><CloseIcon/></Button></div>
//             <img src={'https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png'} alt="#" style={{height: '100%' ,width: '100%'}}/>
//           </div>
//         </div>
//       </Fade>
//     </Modal>

//     </div>

//   );

// }

// export default ModalLogin;
