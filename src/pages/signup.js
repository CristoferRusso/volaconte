import Navbar from "../components/navbar";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../components/footer";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Paper } from "@mui/material";
import Logo from '../images/paper-plane.png';
import {GoogleButton} from 'react-google-button'
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";


function SignUp (){
const {googleSignIn} = UserAuth();
const navigate = useNavigate();
 const handelGoogleSignIn = async () => {
  try{
    await googleSignIn() 
    navigate('/')
   // toast.success('You are logged in')
  } catch (error) {
    console.log(error)
  }

 }



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault()

    if (firstName.length === 0) {
      toast.error("Name has left Blank!");
    }
    else if (lastName.length === 0) {
      toast.error("Last name has left Blank!");
    }
    else if (email.length === 0) {
      toast.error("Email has left Blank!");

    } else if (password.length === 0) {
      toast.error("Password has left Blank!");
    }
    else {
      handleApi();
    }
  }



  function handleApi() {

    let obj = {
      firstName : firstName,
      lastName:lastName,
      email:email,
      password:password,
  }       
const newPostKey = push(child(ref(database), 'posts')).key;
const updates = {};
updates['/' + newPostKey] = obj
return update(ref(database), updates);

  }





/*

  function handleApi() {
    const url = 'http://localhost:3001/src/server/signup.php';
    let fData = new FormData();
    fData.append('firstName', firstName);
    fData.append('lastName', lastName);
    fData.append('password', password);
    fData.append('email', email);
    fetch(url, {
      method: 'POST',
      body: fData,
    })
      .then(response => response.text())
      .then(data => {
        let obj = JSON.parse(data);
        if (obj.flag === 1) {
          toast.success(obj.success);
        } else {
          toast.error(obj.error);
        }

      })

  }
*/


  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          VolaConTe
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const theme = createTheme();

  return (

    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/city?clouds)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ToastContainer />

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <GoogleButton onClick={handelGoogleSignIn}/>
            <Typography component="h1" variant="h5" color='secondary'>
              Sign up
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to='/login' variant="body2">
                    Already have an account?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <img src={Logo} className="card-img-top" style={{ width: '12rem' }} ></img>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default SignUp;



