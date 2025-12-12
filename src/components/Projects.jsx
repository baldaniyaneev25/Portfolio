import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    { title: 'To-Do List App ', img: '/download.jpeg' },
    { title: 'Weather App', img: '/download (1).jpeg' },
    { title: 'Quiz App', img: '/download (2).jpeg' }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="display-4 fw-bold text-center mb-5">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm hover-shadow-lg transition-all">
                <Card.Img variant="top" src={project.img} height="200" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button variant="outline-primary" className="mt-auto">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Projects;