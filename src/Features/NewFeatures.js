import React from "react";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col'

export function NewFeatures(p) {
    return (
        <>
            <Col className="mb-5" data-aos="zoom-in" data-aos-delay="150">
                <i className={p.icons + " text-warning features-icons"}> </i>
                <h4 className="features-font-size">{p.title}</h4>
                <p className="class-p">{p.dis}</p>
            </Col>
        </>
    )
}










