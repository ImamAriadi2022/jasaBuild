import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>CreativeBraind is a web development company that provides modern and responsive e-commerce solutions to support your business growth.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul>
              <li>Email: cbraind2207@gmail.com</li>
              <li>Phone: +62 857-6975-4661</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="social-links">
              <li><a href="#" >Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2023 CreativeBraind. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;