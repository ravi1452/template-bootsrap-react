import React from "react";
import {
  Nav,
  Col,
  Navbar,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import "./Navbar.css"

export function Navbars() {
  return (
    <Col>
      <Navbar className="bg-opacity header-scrolled" fixed="top" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="logo">GP<span className="gp-dot-color">.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="setup me-auto" navbarScroll >
              <Nav.Link className="navbar-color mx-2 text-warning" href="#action1 active">Home</Nav.Link>
              <Nav.Link className="navbar-color mx-2" href="#action2">About</Nav.Link>
              <Nav.Link className="navbar-color mx-2" href="#action3">Services</Nav.Link>
              <Nav.Link className="navbar-color mx-2" href="#action4">Portfolio</Nav.Link>
              <Nav.Link className="navbar-color mx-2" href="#action5">Team</Nav.Link>
    
              <NavDropdown title="Drop Down" className="navbar-color mx-1">
                <NavDropdown.Item href="#action6">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Something else here</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action9" className="navbar-color">Contact</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Button className="text-white" variant="outline-warning">Get Started</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  );
}
