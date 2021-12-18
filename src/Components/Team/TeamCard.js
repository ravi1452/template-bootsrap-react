import React from 'react'
import { Col, Card } from 'react-bootstrap'

export function TeamCard(p) {
    return (
        <Col data-aos="fade-up" data-aos-delay="100" lg={3} md={6}>
            <Card className="mt-5">
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                    <h4>{p.name}</h4>
                    <span>{p.post}</span>
                </Card.Body>
            </Card>
        </Col>
    )
}


