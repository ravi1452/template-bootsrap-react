import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import "./Cta.css"

export function Cta() {

    return (
        <section id="cta" className="cta">
            <Container data-aos="zoom-in">
                <Row data-aos="fade-up" className="text-center">
                    <h3>Call To Action</h3>
                    <span className="text-center">
                        <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <Button className="cta-btn" variant="outline-dark">Call To Action</Button>
                    </span>
                </Row>
            </Container>
        </section>
    )
}
