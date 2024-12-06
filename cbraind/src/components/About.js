import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-section my-5">
      <Row>
        <Col md={12}>
          <h2>About Us</h2>
          <p>
            Selamat datang di website <strong>CreativeBrain</strong>. Kami
            menyediakan jasa pembuatan website e-commerce yang modern, cepat,
            dan responsif sesuai kebutuhan Anda.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
