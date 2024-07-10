// src/components/views/Project.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Project.css";

function Project() {
  return (
    <Container className="project-container">
      <Row className="project-row">
        <Col>
          <h2 className="project-title">Proyectos</h2>
          <p className="project-lead">Detalles de tus proyectos...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
