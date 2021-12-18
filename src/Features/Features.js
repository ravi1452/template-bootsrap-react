import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import image from "../Images/features.jpg"
import { NewFeatures } from './NewFeatures';
import "./Features.css"

export function Features() {

    let datas = [
        {
            icons: "ri-store-line",
            title: "Est labore ad",
            dis: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
        },
        {
            icons: "ri-store-line",
            title: "Harum esse qui",
            dis: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
        },
        {
            icons: "ri-store-line",
            title: "Aut occaecati",
            dis: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
        },
        {
            icons: "ri-store-line",
            title: "Beatae veritatis",
            dis: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta"
        },
    ];

    return (
        <section id="features">
            <Container data-aos="fade-up">
                <Row>
                    <Col lg={6} data-aos="fade-right">
                        <img className="image" src={image} alt="Features-img" />
                    </Col>
                    
                    <Col lg={6} data-aos="fade-left" className="features-icon-text">
                        {
                            datas.map((e) => <NewFeatures icons={e.icons} title={e.title} dis={e.dis} />)
                        }
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}
