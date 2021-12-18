import React from 'react'
import Slider from "react-slick";
import { Col, Container, Image, Row } from "react-bootstrap";
import testimonials1 from "../../Images/testimonials-1.jpg"
import testimonials2 from "../../Images/testimonials-2.jpg"
import testimonials3 from "../../Images/testimonials-3.jpg"
import testimonials4 from "../../Images/testimonials-4.jpg"
import testimonials5 from "../../Images/testimonials-5.jpg"
import "./Testimonials.css"

export function Testimonialss() {

    let slid = [
        {
            image: testimonials1,
            name: "Saul Goodman",
            post: "Ceo & Founder",
            symbol: "bx bxs-quote-alt-left",
            description: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        },
        {
            image: testimonials2,
            name: "Sara Wilsson",
            post: "Designer",
            symbol: "bx bxs-quote-alt-left",
            description: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        },
        {
            image: testimonials3,
            name: "Jena Karlis",
            post: "Store Owner",
            symbol: "bx bxs-quote-alt-left",
            description: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
        },
        {
            image: testimonials4,
            name: "Matt Brandon",
            post: "Freelancer",
            symbol: "bx bxs-quote-alt-left",
            description: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
        },
        {
            image: testimonials5,
            name: "John Larson",
            post: "Entrepreneur",
            symbol: "bx bxs-quote-alt-left",
            description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,

    };
    return (
        <div className="slider">
            <Container data-aos="zoom-in">
                <Slider data-aos="fade-up" {...settings}>
                    {
                        slid.map((i) =>
                            <div className="slid">
                                <Image src={i.image} className="testimonial-img" />
                                <h3>{i.name}</h3>
                                <h4>{i.post}</h4>
                                <p>{i.description}</p>
                            </div>
                        )
                    }
                </Slider>
            </Container >
        </div>
    )
}


