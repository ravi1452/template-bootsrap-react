import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Artical } from "./Artical";
import "./Headers.css"

export function Header() {

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <Container data-aos="fade-up">
        <Row className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <Col xl={6} lg={8}>
            <h1>Powerful Digital Solutions With Gp<span>.</span></h1>
            <h2>We are team of talented digital marketers</h2>
          </Col>
          <Row className="mt-3 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <Artical />
          </Row>
        </Row>
      </Container>
    </section >
  );
}

