import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import BoxNav from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonNav from '@mui/material/Button';
import Logo from '../images/paper-plane.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar(props) {


  const [obj, objSet] = useState('');




  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <BoxNav onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <a className="navbar-brand" id='brand' >VolaConTe</a>
        <img src={Logo} className="card-img-top" style={{ width: '2rem' }} ></img>
      </Typography>
      <Divider />
      <List>
        <ul style={{listStyleType: 'none'}}>
          <li><Link to="/"><ButtonNav color='secondary'>Home</ButtonNav></Link></li>
          <li><Link to="/login"><ButtonNav color='secondary'>Login</ButtonNav></Link></li>
          <li><Link to="/signup"><ButtonNav color='secondary'>Signup</ButtonNav></Link></li>
        </ul>
      </List>
    </BoxNav>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

 const userData = () => {

  const url = 'http://localhost:3001/src/api/userData.php';
 
  fetch(url, {
    method: 'GET',
  })
  .then(response => response.text())
  .then(data => {
    obj = JSON.parse(data);
  }
  )
 }
 
 userData();




  return (
    <BoxNav sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{ backgroundColor: '#31373d' }}>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textAlign: 'left' } }}
          >
            <BoxNav>
              <img src={Logo} className="card-img-top" style={{ width: '2rem' }} ></img>
              <h5 id='brand'>{props.name}</h5>
            </BoxNav>
          </Typography>
          <BoxNav sx={{ display: { xs: 'none', sm: 'block', } }}>
            <h1>{obj}</h1>
            <Link to="/"><ButtonNav color='secondary'>Home</ButtonNav></Link>
            <Link to="/login"><ButtonNav color='secondary'>Login</ButtonNav></Link>
            <Link to="/signup"><ButtonNav color='secondary'>Signup</ButtonNav></Link>
          </BoxNav>
        </Toolbar>
      </AppBar>
      <BoxNav component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </BoxNav>
    </BoxNav>
  );
}

export default Navbar;