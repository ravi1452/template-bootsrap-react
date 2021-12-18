import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import image0 from "../../Images/portfolio-1.jpg"
import image1 from "../../Images/portfolio-2.jpg"
import image2 from "../../Images/portfolio-3.jpg"
import image3 from "../../Images/portfolio-4.jpg"
import image4 from "../../Images/portfolio-5.jpg"
import image5 from "../../Images/portfolio-6.jpg"
import image6 from "../../Images/portfolio-7.jpg"
import image7 from "../../Images/portfolio-8.jpg"
import image8 from "../../Images/portfolio-9.jpg"
import "./Portfolio.css"

export function Portfolio() {

    let images = [
        { id: 1, img: image0, categories: 'App', name: 'App 1', class: ".portfolio-1-positions" },
        { id: 2, img: image1, categories: 'Web', name: 'Web 1', class: ".portfolio-2-positions" },
        { id: 3, img: image2, categories: 'App', name: 'App 2', class: ".portfolio-3-positions" },
        { id: 4, img: image3, categories: 'Card', name: 'Card 1', class: ".portfolio-4-positions" },
        { id: 5, img: image4, categories: 'Web', name: 'Web 2', class: ".portfolio-5-positions" },
        { id: 6, img: image5, categories: 'App', name: 'App 3', class: ".portfolio-6-positions" },
        { id: 7, img: image6, categories: 'Card', name: 'Card 2', class: ".portfolio-7-positions" },
        { id: 8, img: image7, categories: 'Card', name: 'Card 3', class: ".portfolio-8-positions" },
        { id: 9, img: image8, categories: 'Web', name: 'Web 3', class: ".portfolio-9-positions" }
    ]

    const [portfolio, setPortfolio] = useState(images);

    useEffect(() => {
        setPortfolio(images);
    }, []);

    const handleChange = (item) => {
        //if item value is not all then and then if execute
        if (item !== 'All') {
            const filtered = images.filter((p) => {
                return p.categories === item
            })
            setPortfolio(filtered);
        }
        else {
            setPortfolio(images);
        }
    }

    return (

        <section id="portfolio" className="portfolio">
            <Container data-aos="fade-up">
                <div class="section-title-portfolio">
                    <h2>PORTFOLIO</h2>
                    <p>CHECK OUR PORTFOLIO</p>
                </div>

                <Row data-aos="fade-up" data-aos-delay="100">
                    <Col lg={12} className="d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <Button id="All" value="All" className="btn btn-warning mx-2 filter" onClick={() => handleChange("All")}>ALL</Button>
                            <Button id="App" value="App" className="btn btn-warning mx-2 filter-app" onClick={() => handleChange("App")}>APP</Button>
                            <Button id="Card" value="Card" className="btn btn-warning mx-2 filter-card" onClick={() => handleChange("Card")}>CARD</Button>
                            <Button id="Web" value="Web" className="btn btn-warning mx-2 filter-web" onClick={() => handleChange("Web")}>WEB</Button>
                        </ul>
                    </Col>
                </Row>


                <ul justify="center" className="images_row p-0">
                    {portfolio.map((item, i) =>
                        <Col lg={4} sm={12} xs={12} md={4} data-aos="fade-up" data-aos-delay="200">
                            <li key={i} className="images_col">
                                <Image src={item.img} id="image" preview="false" className={i.class} />
                                <div className="info-hover-portfolio px-3">{item.name}<br />{item.categories}</div>
                            </li>
                        </Col>

                    )}
                </ul>
            </Container>
        </section>
    )
}





