// Modules
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GreyContainer from "../Components/GreyContainer";
import Button from "../Components/Button";

// Images
import about from "../img/about.png";
import delivery from "../img/free-delivery.png";
import cashback from "../img/cashback.png";
import quality from "../img/premium-quality.png";
import support from "../img/24-hours-support.png";
import client from "../img/client.png";
import pinkBar from "../img/pinkBar.png";

export default function About() {
  return (
    <Container fluid>
      <GreyContainer titlePage={"About Us"} />
      <br />
      <br />
      <Container className="d-flex my-5">
        <Row className="me-3">
          <Col className="align-items-end">
            <img src={about} alt="" className="w-100" />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="">
            <h1 className="josefin fs-1 fw-bold Midnight-Blue">Know About Our Ecomerce Business, History</h1>
            <h5 className="my-4 lato color-wildBlueYonder lh-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum
              quam.
            </h5>
            <Button btnClass={"btn text-light lato my-5"} btnTitle={"Contact us"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Col>
        </Row>
      </Container>

      {/* Features  */}
      <Row className="my-5">
        <Col>
          <h1 className="fs-2 fw-bold text-center josefin my-5">Our Features</h1>
        </Col>
      </Row>
      <div className="d-flex  justify-content-center my-5">
        <div>
          <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
            <Card.Img variant="top" className="w-25" src={delivery} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
              <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
            <Card.Img variant="top" className="w-25" src={cashback} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
              <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
            <Card.Img variant="top" className="w-25" src={quality} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
              <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
            <Card.Img variant="top" className="w-25" src={support} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
              <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Client Says */}
      <Container className=" d-flex flex-column align-items-center">
        <h1 className="josefin fs-1 fw-bold text-dark">Our Client Say!</h1>
        <img src={client} alt="" className="w-25 my-5" />
        <h3 className="lato fs-3 fw-bold">Selina Gomez</h3>
        <h5 className="lato fs-5 Wild-Blue-Yonder mb-5">Ceo At Webecy Digital</h5>
        <h4 className="text-wrap text-center lato fs-4 Wild-Blue-Yonder mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br /> aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor <br /> aliquam lacus volutpat
          praesent.
        </h4>
        <img src={pinkBar} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Container>
  );
}
