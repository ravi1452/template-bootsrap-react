import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { TeamCard } from '../Team/TeamCard'
import image from "../../Images/team-1.jpg"
import image1 from "../../Images/team-2.jpg"
import image2 from "../../Images/team-3.jpg"
import image3 from "../../Images/team-4.jpg"


export function Team() {

    let member = [
        {
            image: image,
            name: "Walter White",
            post: "Chief Executive Officer",
        },
        {
            image: image1,
            name: "Sarah Jhonson",
            post: "Product Manager",
        },
        {
            image: image2,
            name: "William Anderson",
            post: "CTO",
        },
        {
            image: image3,
            name: "Amanda Jepson",
            post: "Accountant",
        }
    ]
    return (
        <section className="team">
            <Container data-aos="fade-up">
                <div class="section-title">
                    <h2>Team</h2>
                    <p>Check our Team</p>
                    <Row className="member-info" class="img-fluid">
                        {
                            member.map((i) => <TeamCard image={i.image} name={i.name} post={i.post} />)
                        }
                    </Row>
                </div>
            </Container>
        </section>
    )
}




