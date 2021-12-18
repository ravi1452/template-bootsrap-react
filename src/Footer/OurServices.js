import React from 'react'
import { Col } from 'react-bootstrap'

export function OurServices() {
    let services = ["Web Design", "Web Developement", "Product Management", "Marketing", "Graphic Design"]

    return (
        <Col lg={3} md={6}>
            <h4 className="pb-2">Our Services</h4>
            <ul className="list-unstyled">
                {
                    services.map((item) =>
                        <li className="design-none">
                            <i className="bx bx-chevron-right"></i>
                            <a href="#">{item}</a>
                        </li>)
                }
            </ul>
        </Col>
    )
}






