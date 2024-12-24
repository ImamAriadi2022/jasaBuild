import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-section my-5">
      <Row>
        <Col md={12}>
          <h2>About Us</h2>
          <p>
          Selamat datang di website <strong>CreativeBraind</strong>. Kami menyediakan jasa pembuatan website e-commerce yang modern, cepat, dan responsif sesuai kebutuhan Anda.

Website kami dirancang dengan teknologi terkini untuk memastikan performa yang optimal dan keamanan yang terjamin. Dengan tampilan yang menarik dan user-friendly, kami membantu meningkatkan pengalaman pengguna sekaligus memaksimalkan potensi bisnis Anda.

Kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Oleh karena itu, kami menawarkan solusi yang dapat disesuaikan, mulai dari desain antarmuka yang menarik hingga integrasi fitur-fitur canggih seperti pembayaran online, manajemen inventaris, dan pelacakan pesanan.

Tim ahli kami siap mendampingi Anda dalam setiap tahap proses pengembangan, mulai dari konsultasi awal hingga implementasi dan pemeliharaan. Dengan fokus pada kualitas dan efisiensi, kami memastikan hasil yang memenuhi ekspektasi Anda.

Bergabunglah dengan ratusan klien yang telah mempercayakan proyek mereka kepada kami. Bersama CreativeBrain, wujudkan visi bisnis Anda menjadi kenyataan melalui website e-commerce yang unggul.

          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
