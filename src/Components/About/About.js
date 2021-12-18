import React from 'react'
import image from "../../Images/about.jpg"
import { Row, Col, Container } from 'react-bootstrap'
import "./About.css"

export function About() {
    return (
        <section>
            <Container data-aos="fade-up">
                <Row>
                    <Col className="col-lg-6 pt-lg-0 order-2 order-lg-1 about-img-mobile" data-aos="fade-right" data-aos-delay="100"  >
                        <h3 className="about-text">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className="icon-nonstyle">
                            <li>
                                <i class="ri-check-double-line icon-color-change"> </i>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li>
                                <i class="ri-check-double-line icon-color-change"> </i>
                                Duis aute irure dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                                <i class="ri-check-double-line icon-color-change"> </i>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                            </li>
                        </ul>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </Col>

                    <Col sm={6} md={12} className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src={image} alt="about-section" class="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
