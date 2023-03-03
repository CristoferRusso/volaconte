import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;