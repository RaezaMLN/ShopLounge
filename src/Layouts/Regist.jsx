import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import chair1 from "../../src/img/chair1.png";
export default function Regist() {
  return (
    <Container>
      <Row className="my-5">
        <Col className="align-items-start josefin Midnight-Blue fs-1 my-5">
          <h1>ShopLounge Demo</h1>
        </Col>
      </Row>
      <Row>
        <Col className="align-items-start josefin Midnight-Blue">
          <h3>ShopLounge Demo</h3>
          <h5>Cart/ Information/ Shipping/ Payment</h5>
        </Col>
      </Row>
      <div>
        <div>
          <form action=""></form>
        </div>
        <div>
          <div className="my-3">
            <div className="d-flex">
              <img src={chair1} alt="" className="me-3" />
              <div>
                <h5>Executive Seat chair</h5>
                <h5>$32.00</h5>
              </div>
            </div>
            <div className="d-flex">
              <img src={chair1} alt="" className="me-3" />
              <div>
                <h5>Executive Seat chair</h5>
                <h5>$32.00</h5>
              </div>
            </div>
            <div className="d-flex">
              <img src={chair1} alt="" className="me-3" />
              <div>
                <h5>Executive Seat chair</h5>
                <h5>$32.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
