import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar px-5">
        <Navbar.Brand href="#">
        <img
          src="logo.jpg"
          alt="CreativeBrain Logo"
          className="d-inline-block align-top logo"
          style={{ borderRadius: '50%' }}
        />
          {' CreativeBrain'}
        </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
