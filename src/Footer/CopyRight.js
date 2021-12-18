import React from 'react'
import { Container } from 'react-bootstrap'

export function CopyRight() {

    return (
        <Container>
            <div class="copyright">
                © Copyright <strong><span>Gp</span></strong>
                . All Rights Reserved
            </div>
            <div class="credits">
                Designed by
                <a className="bootsrap-dairection" href='https://bootstrapmade.com/'>BootstrapMade</a>
            </div>

            {/* top button */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
                <i class="bi bi-arrow-up-short"></i>
            </a>
        </Container>
    )
}
