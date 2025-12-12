import React, { useState } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BSNavbar expand="lg" fixed="top" bg="white" className="shadow-sm">
      <Container>
        <BSNavbar.Brand href="#home" className="fw-bold fs-3">Neev Baldaniya</BSNavbar.Brand>
        <BSNavbar.Toggle onClick={() => setExpanded(!expanded)} />
        <BSNavbar.Collapse id="navbarNav" expanded={expanded}>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-3">About</Nav.Link>
            <Nav.Link href="#projects" className="mx-3">Projects</Nav.Link>
            <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default NavbarComponent;
