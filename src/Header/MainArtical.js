import React from "react";
import { Card, Col } from "react-bootstrap";

export function MainArtical(p) {
  return (
    <Col sm={1} xl={2} md={4} className="mt-5">
      <Card className="icon-box" data-aos="fade-up">
        <i className={p.icons}></i>
        <Card.Body>
          <Card.Title><h3>{p.title}</h3></Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

