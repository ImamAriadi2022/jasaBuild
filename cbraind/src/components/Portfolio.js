import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';

const websites = [
  { id: 1, name: 'Teralab', url: 'https://teralab.my.id', details: 'Platform pendaftaran dan penyedia webinar gratis', imageUrls: ['portfolio/teralab.png', 'portfolio/teralab2.png'], programmingLanguage: 'JavaScript', description: 'Platform pendaftaran webinar gratis', mainFeatures: 'Chatbot, CRUD, auth user, Payment gateway' },
  { id: 2, name: 'UnilaMate.Ai', url: 'https://www.portfolio.cbraind.my.id/', details: 'Platforn to do list tugas', imageUrls: ['portfolio/study.png', 'portfolio/study2.png'], programmingLanguage: 'HTML, CSS, javaScript', description: 'web aplication yang berguna sebagai management tugas', mainFeatures: 'Deteksi kepriadian, menagement tugas, pengingat tugas' },
  { id: 3, name: '', url: 'https://example3.com', details: 'Detail spesifikasi dan fitur Online Bookstore.', imageUrls: ['./images/bookstore1.jpg', './images/bookstore2.jpg'], programmingLanguage: 'Ruby', description: 'Toko buku online dengan berbagai macam buku.', mainFeatures: 'Book previews, Author profiles' },
];

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (site) => {
    setSelectedSite(site);
    setShow(true);
  };

  return (
    <Container className="portfolio-section my-5">
      <h2>Portfolio</h2>
      <Row>
        {websites.map((site) => (
          <Col key={site.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={site.imageUrls[0]} alt={site.name} />
              <Card.Body>
                <Card.Title>{site.name}</Card.Title>
                <Button variant="primary" onClick={() => handleShow(site)}>
                  Detail Website
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedSite && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedSite.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Carousel>
                  {selectedSite.imageUrls.map((imageUrl, index) => (
                    <Carousel.Item key={index}>
                      <img src={imageUrl} alt={selectedSite.name} className="d-block w-100" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col md={6}>
                <p><strong>Bahasa Pemrograman:</strong> {selectedSite.programmingLanguage}</p>
                <p><strong>Deskripsi:</strong> {selectedSite.description}</p>
                <p><strong>Fitur utama:</strong> {selectedSite.mainFeatures}</p>
                <p>{selectedSite.details}</p>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" href={selectedSite.url} target="_blank">
              Visit Website
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Portfolio;