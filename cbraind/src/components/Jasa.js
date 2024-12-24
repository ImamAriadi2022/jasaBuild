import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Jasa.css';

const jasaList = [
  {
    title: 'Pembuatan Website Desa',
    description: 'Layanan pembuatan dan pengembangan website untuk kebutuhan desa, termasuk domain dan hosting gratis.',
    packages: [
      'Paket Realisasi Proposal',
      'Paket Tanpa Realisasi',
      'Paket Kolaborasi Penuh',
      'Paket Implementasi Mandiri',
    ],
    imageUrl: 'jasa/webdesa.jpg',
  },
  {
    title: 'Pembuatan Website E-Commerce',
    description: 'Pembuatan website toko online dengan fitur lengkap seperti katalog produk, keranjang belanja, dan pembayaran.',
    packages: ['Desain responsif', 'Domain dan hosting gratis 1 tahun'],
    imageUrl: 'jasa/e-comerce.jpg',
  },
  {
    title: 'Pembuatan Website Undangan Pernikahan',
    description: 'Layanan untuk membuat undangan pernikahan digital dengan desain menarik dan personalisasi tema.',
    packages: ['Domain gratis 3 bulan', 'Desain menarik dan mudah dibagikan'],
    imageUrl: 'jasa/pernikahan.jpg',
  },
  {
    title: 'Pembuatan Aplikasi Berbasis Windows',
    description: 'Pengembangan aplikasi desktop berbasis Windows dengan fitur sesuai kebutuhan.',
    packages: ['Desain antarmuka mudah digunakan', 'Paket pelatihan aplikasi'],
    imageUrl: 'jasa/windowsapp.jpg',
  },
  {
    title: 'Pembuatan Aplikasi Berbasis Android',
    description: 'Pengembangan aplikasi Android dengan fitur yang disesuaikan untuk berbagai keperluan.',
    packages: ['Desain modern', 'Dukungan pengunggahan ke Play Store'],
    imageUrl: 'jasa/androidapp.jpg',
  },
];

const Jasa = () => {
  return (
    <Container>
        <h3 className="jasa-title" >Jasa yang ditawarkan </h3>
      <Row className="my-4 d-flex justify-content-center">
        {jasaList.map((jasa, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img className="h-20" variant="top" src={jasa.imageUrl} alt={jasa.title} />
              <Card.Body className="h-80">
                <Card.Title className='h-30'>{jasa.title}</Card.Title>
                <Card.Text className="h-0">{jasa.description}</Card.Text>
                <ul className="text-start">
                  {jasa.packages.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Jasa;