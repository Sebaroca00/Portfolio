// src/components/views/Home/Home.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import "./Home.css";

function Home() {
  return (
    <Container fluid className="home-container">
      <section id="home" className="home-section">
        <Row className="home-row">
          <Col>
            <h1 className="home-title">¡Bienvenido a Mi Portafolio!</h1>
            <p className="home-lead">
              Soy un programador recientemente graduado con experiencia en
              JavaScript, React.js, Node.js, Express, PostgreSQL y más.
            </p>
            <p className="home-description">
              Explora mis proyectos y habilidades para saber más sobre mi
              trabajo.
            </p>
          </Col>
        </Row>
      </section>

      <section id="about" className="about-section">
        <About />
      </section>

      <section id="projects" className="projects-section">
        <Project />
      </section>

      <section id="contact" className="contact-section">
        <Contact />
      </section>
    </Container>
  );
}

export default Home;
