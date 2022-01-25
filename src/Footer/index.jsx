import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/logo.png";

const Footer = () => {
  return (
    <Container fluid className="shadow py-5 px-5">
      <Row>
        <Col xs={12} lg={4} className="g-3">
          <img src={FooterLogo} alt="" />
          <p>All Rights Reserved &copy; 2022 Probity Support</p>
        </Col>
        <Col xs={12} lg={4} className="g-3">
          <h2>About Us</h2>
          <p>
            Probity provides apps and digital solutions for real-world business
            problems, to help small businesses facilitate growth.
          </p>
        </Col>
        <Col xs={12} lg={4} className="g-3">
          <h2>Contact Us</h2>
          <address> Plot 24 Jerry Iriabe Street, Lekki Phase 1, Lagos.</address>
          <p>Email: support@probitysoftware.com</p>  
          <p>Phone: +234 8060143853</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
