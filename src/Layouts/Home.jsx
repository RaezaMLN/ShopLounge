import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Components/Button";
import sofa from "../img/sofa.png";
import lamp from "../img/lamp.png";

export default function Home() {
  return (
    <div>
      <Container fluid>
        <Row className="clr1">
          <Col xs={3} className="d-flex flex-column align-items-end">
            <img src={lamp} alt="" className="w-75" />
          </Col>
          <Col xs={4} className="d-flex flex-column align-items-start justify-content-center">
            <p className="fs-5 clr2 lato fw-bold">Best Furniture For Your Castle....</p>
            <p className="fs-1 josefin fw-bold">New Furniture Collection Trends in 2020</p>
            <p className="fs-5 lato">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <Button btnClass={"btn text-light"} btnTitle={"Shop Now"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Col>
          <Col xs={5}>
            <img src={sofa} alt="" className="w-75 py-3" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="clr3">
        <Row></Row>
      </Container>
    </div>
  );
}
