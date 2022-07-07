import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GreyContainer from "../Components/GreyContainer";
import Button from "../Components/Button";
import wallClock from "../../src/img/wallClock.png";
import note from "../../src/img/note.png";
import check from "../../src/img/check.png";
import sponsor from "../../src/img/sponsor.png";

export default function OrderCompleted() {
  return (
    <Container fluid>
      <GreyContainer titlePage={"Order Completed"} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex flex-row justify-content-center">
        <div>
          <img src={wallClock} alt="" />
        </div>
        <div className="d-flex flex-column align-items-center mx-5">
          <img src={check} alt="" />
          <h1 className="fs-1 josefin Midnight-Blue fw-bold lh-lg">Your Order Is Completed! </h1>
          <h5 className="lato fs-5 color-wildBlueYonder text-center lh-lg">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. <br /> You will receive an email confirmation when your order is completed.
          </h5>
          <Button btnClass={"btn text-light josefin my-4"} btnTitle={"Continue Shopping"} btnStyle={{ backgroundColor: "#fb2e86" }} />
        </div>
        <div className="d-flex align-items-end">
          <img src={note} alt="" />
        </div>
      </div>
      <br />
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
    </Container>
  );
}
