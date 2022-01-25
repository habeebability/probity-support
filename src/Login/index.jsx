import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ImageResponsive from "react-image-responsive";
import LoginImage from "../assets/login_image.jpg";
import Footer from "../Footer";
import Navigation from "../Navigation";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Navigation />
      <div className="LoginBox">
        <Container className="my-5">
          <Row className="justify-content-center align-items-center g-5 mx-auto">
            <Col xs={12} lg={6}>
              <img src={LoginImage} alt=""  />
              
                
                
              
            </Col>
            <Col  xs={12} lg={6}>
              <h3 className="mb-4">Login</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    className="loginBtn"
                    size="lg"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
