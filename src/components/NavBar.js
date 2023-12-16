import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import git from '../assets/images/git1.png'
import {Link} from 'react-scroll'
// import { Router } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setscrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
    if (window.scrollY>50){
      setscrolled(true); 
    }
    else{
      setscrolled(false);
    }
    }
    window.addEventListener('scroll', onScroll);   
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);

  }

    return (
        <Router>
          <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home"> Natalie Grant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
              <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"  className={activeLink === 'home' ? "active navabr-link": "navbar-link"} onClick= {()=> onUpdateActiveLink('#home')}>Home</Nav.Link>
                <Nav.Link href="#skill" className={activeLink === 'skill' ? "active navabr-link": "navbar-link"} onClick= {()=> onUpdateActiveLink('#skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'project' ? "active navabr-link": "navbar-link"} onClick= {()=> onUpdateActiveLink('#projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://github.com/ShrieSannith" target='_blank'><img src = {git} alt = "github"/></a>
                </div>
                
              </span>
            </Navbar.Collapse>      
          </Container>
        </Navbar>
        </Router>
    );
}

