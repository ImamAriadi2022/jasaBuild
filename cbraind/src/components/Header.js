import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="#">
        <img
          src="./logo.jpg"
          alt="CreativeBrain Logo"
          className="d-inline-block align-top logo"
          style={{ borderRadius: '50%' }}
        />
          {' CreativeBrain'}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
