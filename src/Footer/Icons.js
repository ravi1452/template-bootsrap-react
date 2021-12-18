import React from 'react'
import { Row, Col } from 'react-bootstrap'

export function Icons() {
    return (
        <Col lg={3} md={6}>
            <div class="footer-info">
                <h3 className="footer-h3">Gp <span>.</span></h3>
                <p>A108 Adam Street<br></br>NY 535022, USA <br /> <br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                </p>
                <div class="social-links mt-3">
                    <a href="#" className="twitter">
                        <i class="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                        <i class="bx bxl-skype"></i>
                    </a>
                    <a href="#" className="linkdin">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>
            </div>
        </Col >
    )
}

