import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" className="py-5 bg-light">
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="display-4 fw-bold text-center mb-5">Get In Touch</h2>
          <Form className="row g-3">
            <Col md={6}>
              <Form.Control type="text" placeholder="Your Name" size="lg" />
            </Col>
            <Col md={6}>
              <Form.Control type="email" placeholder="your@email.com" size="lg" />
            </Col>
            <Col md={12}>
              <Form.Control as="textarea" rows={5} placeholder="Your Message" size="lg" />
            </Col>
            <Col md={12} className="text-center">
              <Button variant="primary" size="lg" className="px-5">Send Message</Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);
export default Contact;