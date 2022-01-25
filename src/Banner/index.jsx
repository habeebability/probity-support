import { Button } from "bootstrap";
import React from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import LandingImage from "../assets/landing.png";
import '../Banner/Banner.css';

const Banner = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center g-5 mx-auto ">
        <Col xs={12} lg={6}>
          <img className="fluid" src={LandingImage} alt="" srcset="" />
        </Col>
        <Col xs={12} lg={6}>
          <h3>How can we help you?</h3>
          <h1 className="heading-primary">
            <span className="d-block">Welcome to </span>
            <span className="d-block">Probity </span>
            <span className="d-block">Support</span>
          </h1>          
          
        </Col>
        
      </Row>
    </Container>
  );
};

export default Banner;
