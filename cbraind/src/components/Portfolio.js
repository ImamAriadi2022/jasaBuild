import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Portfolio = () => {
  const websites = [
    { id: 1, name: 'Toko Online Fashion', url: 'https://example1.com' },
    { id: 2, name: 'Elektronik Store', url: 'https://example2.com' },
    { id: 3, name: 'Online Bookstore', url: 'https://example3.com' },
  ];

  return (
    <Container className="portfolio-section my-5">
      <h2>Portfolio</h2>
      <Row>
        {websites.map((site) => (
          <Col key={site.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{site.name}</Card.Title>
                <Card.Link href={site.url} target="_blank">
                  Visit Website
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
