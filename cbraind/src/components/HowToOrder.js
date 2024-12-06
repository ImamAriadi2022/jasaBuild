import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const HowToOrder = () => {
  const whatsappUrl = 'https://wa.me/628123456789'; // Ganti dengan nomor admin Anda

  return (
    <Container className="how-to-order-section my-5">
      <Row>
        <Col md={12}>
          <h2>How to Order</h2>
          <p>
            Untuk memesan jasa pembuatan website, langsung hubungi admin kami
            melalui WhatsApp dengan tombol di bawah ini.
          </p>
          <Button variant="success" href={whatsappUrl} target="_blank">
            Order via WhatsApp
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HowToOrder;
