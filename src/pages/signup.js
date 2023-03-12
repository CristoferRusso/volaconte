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


function SignUp() {

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
        if(data ===  'You are registered') {
          console.log(data);
        } else {
          console.log(data);
        }
      
      })
    
    }
  
  


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

    <main >
      <div className="container" style={{ width:'100%', height:'1000px' }}>
        <Navbar />
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <ToastContainer />

              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
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
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
      <Footer />
    </main>
  );
}

export default SignUp;
