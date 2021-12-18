import React from 'react'
import { Container, Row, } from 'react-bootstrap'
import { MainServices } from './MainServices';
import "./Services.css" 

export function Services() {
    let datas = [
        {
            icons: "bx bxl-dribbble",
            title: "Nemo Enim",
            dis: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            icons: "bx bx-file",
            title: "Nemo Enim",
            dis: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            icons: "bx bx-tachometer",
            title: "Nemo Enim",
            dis: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            icons: "bx bx-world",
            title: "Nemo Enim",
            dis: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            icons: "bx bx-slideshow",
            title: "Nemo Enim",
            dis: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            icons: "bx bx-arch",
            title: "Nemo Enim",
            dis: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },

    ];

    return (
        <section>
            <Container data-aos="fade-up">
                <div class="section-title">
                    <h2>SERVICS</h2>
                    <p>CHECK OUR SERVICES</p>
                </div>
                <Row>
                    {
                        datas.map((e) => <MainServices icons={e.icons} title={e.title} dis={e.dis} />)
                    }
                </Row>
            </Container>
        </section>
    )
}



