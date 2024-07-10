// src/components/views/Home.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container
      fluid
      className="d-flex flex-grow-1 justify-content-center align-items-center"
    >
      <Row className="text-center p-5 shadow rounded">
        <Col>
          <h1 className="display-4 mb-4">¡Bienvenido a Mi Portafolio!</h1>
          <p className="lead">
            Soy un programador recientemente graduado con experiencia en
            JavaScript, React.js, Node.js, Express, PostgreSQL y más.
          </p>
          <p>
            Explora mis proyectos y habilidades para saber más sobre mi trabajo.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
