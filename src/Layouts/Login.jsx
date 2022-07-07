import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Button from "../Components/Button";
import GreyContainer from "../Components/GreyContainer";
import sponsor from "../../src/img/sponsor.png";

export default function Login() {
  return (
    <Container fluid>
      <GreyContainer titlePage={"My Account"} />
      <br />
      <br />
      <div>
        <Form className="d-flex flex-column align-items-center">
          <Form.Label className="fs-3 text-dark fw-bold josefin">Login</Form.Label>
          <Form.Label className="fs-5 Wild-Blue-Yonder lato mb-3">Please login using account detail bellow.</Form.Label>

          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" className="fs-5 Wild-Blue-Yonder lato" />
          </Form.Group>

          <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" className="fs-5 Wild-Blue-Yonder lato" />
          </Form.Group>
          <a href="#" className="text-decoration-none Wild-Blue-Yonder lato fs-5 ">
            Forgot your password?
          </a>
          <Button btnClass={"btn text-light josefin my-4"} btnTitle={"Sign In"} btnStyle={{ backgroundColor: "#fb2e86", padding: "7px 165px" }} />
          <a href="#" className="text-decoration-none Wild-Blue-Yonder lato fs-5 ">
            Don’t have an Account?Create account
          </a>
        </Form>
        <br />
        <br />

        <Row className="justify-content-md-center my-5">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <img src={sponsor} />
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <br />
        <br />
      </div>
    </Container>
  );
}
