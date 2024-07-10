// src/components/views/Contact.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <Container className="contact-container">
      <Row className="contact-row">
        <Col>
          <h2 className="contact-title">Contacto</h2>
          <p className="contact-lead">Detalles de contacto...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
