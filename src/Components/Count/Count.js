import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import image from "../../Images/counts-img.jpg"
import CountUp from 'react-countup';
import "./Count.css"

export function Count() {

    return (
        <section id="counts" class="counts">
            <Container data-aos="fade-up">
                <Row class="row no-gutters">
                    {/* img */}
                    <Col data-aos="fade-right" data-aos-delay="100" lg={12} xl={5} class="image d-flex align-items-stretch justify-content-center justify-content-lg-start">
                        <Image src={image} alt="count-img" width="100%" height="85%" />
                    </Col>

                    {/* counts-start */}
                    <Col data-aos="fade-left" data-aos-delay="100" lg={12} xl={7} class="ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                        <div class="content d-flex flex-column justify-content-center">
                            <h3>Voluptatem dignissimos provident quasi</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit
                            </p>
                        </div>

                        <Row>
                            <Col lg={6} md={6} class="d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i class="bi bi-emoji-smile"></i>
                                    <h1><CountUp end={65} duration={5} delay={1}/></h1>
                                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                </div>
                            </Col>

                            <Col lg={6} md={6} class="d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i class="bi bi-journal-richtext"></i>
                                    <h1><CountUp end={85} duration={5} delay={1}/></h1>
                                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                </div>
                            </Col>

                            <Col lg={6} md={6} class="d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i class="bi bi-clock"></i>
                                    <h1><CountUp end={35} duration={5} delay={1}/></h1>
                                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                </div>
                            </Col>

                            <Col lg={6} md={6} class="d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i class="bi bi-award"></i>
                                    <h1><CountUp end={20} duration={5} delay={1}/></h1>
                                    <p><strong>Awards</strong>  rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
