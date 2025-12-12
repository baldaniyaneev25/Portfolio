import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const About = () => (
  <section id="about" className="py-5 bg-light">
    <Container>
      <Row className="justify-content-center text-center mb-5">
        <Col lg={8}>
          <h2 className="display-4 fw-bold mb-4">About Me</h2>
          <p className="lead fs-4">Passionate developer creating modern web applications with React, Node.js, and cutting-edge technologies.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10}>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Badge bg="warning" className="fs-5 px-3 py-2">Html </Badge>
            <Badge bg="success" className="fs-5 px-3 py-2">Css</Badge>

            <Badge bg="primary" className="fs-5 px-3 py-2">React</Badge>
            <Badge bg="info" className="fs-5 px-3 py-2">Bootstrap</Badge>
            <Badge bg="success" className="fs-5 px-3 py-2">Node.js</Badge>
            <Badge bg="warning" className="fs-5 px-3 py-2">js </Badge>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
export default About;
