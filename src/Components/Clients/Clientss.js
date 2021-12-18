import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import image1 from "../../Images/client-1.png"
import image2 from "../../Images/client-2.png"
import image3 from "../../Images/client-3.png"
import image4 from "../../Images/client-4.png"
import image5 from "../../Images/client-5.png"
import image6 from "../../Images/client-6.png"
import image7 from "../../Images/client-7.png"
import image8 from "../../Images/client-8.png"
import "./Clientss.css"

export function Clientss() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <section className="clients-size">
            <Container data-aos="zoom-in">
                <Row className="text-center">
                    <Slider {...settings}>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image1} alt="slider-img1" class="img-fluid" />
                        </Col>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image2} alt="slider-img2" class="img-fluid" />
                        </Col>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image3} alt="slider-img3" class="img-fluid" />
                        </Col>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image4} alt="slider-img4" class="img-fluid" />
                        </Col>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image5} alt="slider-img5" class="img-fluid" />
                        </Col>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image6} alt="slider-img6" class="img-fluid" />
                        </Col>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image7} alt="slider-img7" class="img-fluid" />
                        </Col>
                        <Col lg={4} className="clients swiper-slide">
                            <img src={image8} alt="slider-img8" class="img-fluid" />
                        </Col>
                    </Slider>
                </Row>
            </Container >
        </section>

    );
}
