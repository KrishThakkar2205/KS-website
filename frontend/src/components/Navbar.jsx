// css files and react
import React from 'react';
import '../App.css'
// Images
import Logo from '../images/Logo.png'
// bootstrap component
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={Logo} alt="logo" style={{ 'width': '50px' }} /><p className='d-inline' id='brand-name'>Sync KonnectSphere</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#about" className='nav-link'>About</Nav.Link>
            <Nav.Link href="#contact" className='nav-link'>Contact</Nav.Link>
            <Nav.Link as={Link} to="/register" className='nav-link'>Login/Sign-Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
