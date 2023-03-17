import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../components/footer";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar';
import Logo from '../images/paper-plane.png';


//import { useNavigate } from "react-router-dom";

function Login() {

  //const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dataUsers, setDataUsers] = useState('');


  const handleLogin = (event) => {
    if (email.length === 0) {
      toast.error("Email has left Blank!");

    } else if (password.length === 0) {
      toast.error("Password has left Blank!");
    }
    else {

      const url = 'http://localhost:3001/src/server/login.php';
      let fData = new FormData();
      fData.append('password', password);
      fData.append('email', email);
      event.preventDefault();
      fetch(url, {
        method: 'POST',
        body: fData
      })
        .then(response => response.text())
        .then(data => {
          const obj = JSON.parse(data);
          if (obj.flag === 1) {
            toast.success('Hello' + ' ' + obj.name)
            setDataUsers(obj.name);
          } else {
            toast.error(obj.error);
          }
        })
    }
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
            <Typography component="h1" variant="h5" color='secondary'>
              Login
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
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
                onClick={handleLogin}
              >
                Login
              </Button>
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

export default Login;






