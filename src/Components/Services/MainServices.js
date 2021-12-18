import React from 'react'
import { Col, Card } from 'react-bootstrap'

export function MainServices(p) {
    return (
        <Col data-aos="zoom-in" data-aos-delay="100" lg={4} md={6} className=" align-items-stretch mt-4">
            <Card className="services-icon-box">
                <div className="services-icons">
                    <i className={p.icons}> </i>
                </div>
                <div className="mt-2">
                    <h4>{p.title}</h4>
                    <p>{p.dis}</p>
                </div>
            </Card>
        </Col>
    )
}


