import Button from '@mui/material/Button';
import Logo from '../images/paper-plane.png';
import {Link} from "react-router-dom";
import React from 'react';

class Navbar extends React.Component {
     
  render () {
  return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" id='brand'>VolaConTe</a>
        <img src={Logo} className="card-img-top" style={{width: '2rem'}} ></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
            <Link to="/"><Button color='primary'>Home</Button></Link>
            </li>
            <li className="nav-item">
            <Link to="/login"><Button color='primary'>Login</Button></Link>
            </li>
            <li className="nav-item">
            <Link to="/signup"><Button color='primary'>Signup</Button></Link>
            </li>
          </ul>        
        </div>
      </div>
    </nav>
      
      )
    }
    }


export default Navbar;
