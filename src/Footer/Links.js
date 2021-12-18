import React from 'react'
import { Col } from 'react-bootstrap'


export function Links() {

    let links = ["Home", "About us", "Services", "Terms of service", "Privacy policy"]

    return (
        <Col lg={2} md={6}>
            <h4 className="pb-2">Useful Links</h4>
            <ul className="list-unstyled">
                {
                    links.map((item) =>
                        <li className="design-none">
                            <i className="bx bx-chevron-right"></i>
                            <a href="#">{item}</a>
                        </li>)
                }

            </ul>
        </Col>
    )
}




