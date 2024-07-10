// src/components/views/Contact.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="text-center p-5 shadow rounded">
        <Col>
          <h1 className="display-4 mb-4">Contacto</h1>
          <p className="lead">Detalles de contacto...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
