import React from 'react'
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'

export function Register() {
    return (

        <Form action="forms/contact.php" class="php-email-form" className="text-center">
            <Row>
                <Col>
                    <Form.Group className="mb-3 form-group">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 form-group">
                        <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3 form-group">
                <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            <FloatingLabel label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>

            <Button type="submit" className="btn btn-warning mt-4 send-massage-color" >
                Send Messang
            </Button>
        </Form>
    )
}







