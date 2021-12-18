import React from 'react'
import { Col, Container } from 'react-bootstrap'

export function NewsLatter() {

    return (
        <Col lg={4} md={6}>
            <div className="text-center">
                <h4 className="Our-footer-text">Our Newsletter</h4>
                <p className="Tamen-text">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action method='post' className='footer-form'>
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </Col>
    )
}



