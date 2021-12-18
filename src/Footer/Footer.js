import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { CopyRight } from './CopyRight'
import { Icons } from './Icons'
import { Links } from './Links'
import { NewsLatter } from './NewsLatter'
import { OurServices } from './OurServices'
import "./Footer.css"

export function Footer() {

    return (
        <div id="footer">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Icons />
                        <Links />
                        <OurServices />
                        <NewsLatter />
                    </Row>
                </Container>
            </div>
            <CopyRight />
        </div>
    )
}


