import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => (
  <section id="home" className="min-vh-100 d-flex align-items-center bg-primary bg-gradient" style={{ paddingTop: '100px' }}>
    <Container className="text-center text-white">
      <h1 className="display-2 fw-bold mb-4">I'm A</h1>
      <p className="display-5 mb-5">Full Stack Developer</p>
      <Button variant="light" size="lg" href="#projects" className="px-5 py-3 fs-5 fw-bold">
        View My Work
      </Button>
    </Container>
  </section>
);

export default Hero;
