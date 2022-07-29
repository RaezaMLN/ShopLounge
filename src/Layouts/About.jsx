// Modules
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GreyContainer from "../Components/GreyContainer";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { Selena, Henry, John } from "../Components/CarouselAbout";

// Images
import about from "../img/about.png";
import delivery from "../img/free-delivery.png";
import cashback from "../img/cashback.png";
import quality from "../img/premium-quality.png";
import support from "../img/24-hours-support.png";
import client1 from "../img/client1.png";
import client2 from "../img/client2.png";
import client3 from "../img/client3.png";

export default function About() {
  const [showPage, setShowPage] = useState(Selena());
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
            <Link to={"/contact-us"}>
              <Button btnClass={"btn text-light lato my-5"} btnTitle={"Contact us"} btnStyle={{ backgroundColor: "#fb2e86" }} />
            </Link>
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
        <h1 className="josefin fs-1 fw-bold text-dark mb-5">Our Client Say!</h1>
        <div>
          <img src={client1} alt="" />
          <img src={client2} alt="" className="mx-3 mb-3" />
          <img src={client3} alt="" />
        </div>
        <div>{showPage}</div>
        <div className="w-100 d-flex flex-row justify-content-center gap-2">
          <div className="rounded-3 my-2 pink-page pageHover" style={{ cursor: "pointer" }} onClick={() => setShowPage(Selena())}></div>
          <div className="rounded-3 my-2 pink-page pageHover" style={{ cursor: "pointer" }} onClick={() => setShowPage(Henry())}></div>
          <div className="rounded-3 my-2 pink-page pageHover" style={{ cursor: "pointer" }} onClick={() => setShowPage(John())}></div>
        </div>
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
