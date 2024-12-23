import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Metode = () => {
  const steps = [
    {
      title: '1. Pilih Layanan',
      description: 'Pilih layanan yang Anda butuhkan dari daftar layanan yang kami sediakan.',
    },
    {
      title: '2. Hubungi Kami',
      description: 'Hubungi kami melalui kontak yang tersedia untuk konsultasi dan informasi lebih lanjut.',
    },
    {
      title: '3. Buat Pesanan',
      description: 'Setelah konsultasi, buat pesanan dengan mengisi formulir yang kami sediakan.',
    },
    {
      title: '4. Pembayaran',
      description: 'Lakukan pembayaran melalui metode pembayaran yang tersedia.',
    },
    {
      title: '5. Proses Pengerjaan',
      description: 'Kami akan mulai mengerjakan pesanan Anda sesuai dengan kesepakatan.',
    },
    {
      title: '6. Pengiriman',
      description: 'Setelah selesai, kami akan mengirimkan hasil pekerjaan kepada Anda.',
    },
  ];

  const paymentMethods = [
    {
      title: 'Transfer Bank',
      description: 'Kami menerima pembayaran melalui transfer bank ke rekening yang akan kami informasikan.',
    },
    {
      title: 'E-Wallet',
      description: 'Pembayaran dapat dilakukan melalui e-wallet seperti GoPay, OVO, dan Dana.',
    },
  ];

  return (
    <Container className="my-5 text-center">
      <h2>Metode Pesan dan Pembayaran</h2>
      <Row className="my-4">
        {steps.map((step, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{step.title}</Card.Title>
                <Card.Text>{step.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h3>Metode Pembayaran</h3>
      <Row className="my-4 d-flex justify-content-center">
        {paymentMethods.map((method, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="h-80">
              <Card.Body className="h-80">
                <Card.Title>{method.title}</Card.Title>
                <Card.Text>{method.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Metode;