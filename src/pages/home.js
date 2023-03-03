
import '../App.css';
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Button from '@mui/material/Button';
import Plane2 from '../images/plane2.jpg'
import Plane1 from '../images/plane1.jpg'
import Plane3 from '../images/plane3.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactForm from '../components/contact';
import { height } from '@mui/system';

function Home() {

const [text, settext] = useState( "click me");

function handleClick() {

  settext( "clicked")
}




    return (
      <main>
      <Navbar />
     <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
     
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={Plane2} className="card-img-top" ></img>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
              <Link to="/signup"><Button color='secondary' variant='contained'>Signup Today</Button></Link>
              </li>
            </ul>        
            </div>
          </div>
        </div>
      </div>
    </div>
      
      <div className="container marketing">
    
        <div className="row">
          <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Plane2} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <h2 className="fw-normal">Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <Button color='secondary' onClick={handleClick} variant='contained'>{text}</Button>
          </div>
          <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Plane1} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <h2 className="fw-normal">Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Plane3} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <h2 className="fw-normal">Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
        </div>
    
    
    
        <hr className="featurette-divider"></hr>
    
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{width:"500", height: "500"}}  src={Plane2} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          </div>
        </div>
    
        <hr className="featurette-divider"></hr>
    
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{width:"500", height: "500"}}  src={Plane1} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          </div>
        </div>
    
        <hr className="featurette-divider"></hr>
    
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
          <div className="col-md-5" >
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"style={{width:"500", height: "500"}} src={Plane3} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          </div>
        </div>
    
        <hr className="featurette-divider"></hr>
    
       
    
      </div>
    
        <ContactForm/>
        <Footer />
    </main>
    
     
    );
  }

  export default Home;