import React from "react";
import { Navbar, Nav, Container, Row, Col} from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="top">
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" fixed="top">
          <Navbar.Brand href="#home" classNam="name">Prayaas</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-bar"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="navbg">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="list"> Home </Nav.Link>
              <Nav.Link href="#donate" className="list"> Donate Now </Nav.Link>
              <Nav.Link href="#impact" className="list"> Impact</Nav.Link>
              <Nav.Link href="#causes" className="list"> Causes </Nav.Link>
              <Nav.Link href="#contact" className="list"> Contact </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="shade"></div>

        <div className="context col col-sm-12 col-md-12 col-lg-5">
          <h1 className="heading1">Prayaas- Ek Koshish</h1>
          <p>
            At the end of the day it’s not about what you have or even what
            you’ve accomplished… it’s about who you’ve lifted up, who you’ve
            made better. It’s about what you’ve given back.
          </p>
        </div>
      </div>

      <div className="footer">
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
