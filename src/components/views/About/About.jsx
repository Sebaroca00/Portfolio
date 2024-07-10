// src/components/views/About/About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container className="about-container">
      <Row className="about-row">
        <Col>
          <h2 className="about-title">Sobre Mí</h2>
          <p className="about-lead">Información sobre ti...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
