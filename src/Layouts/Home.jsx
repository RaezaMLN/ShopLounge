import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Button from "../Components/Button";
import sofa from "../img/sofa.png";
import lamp from "../img/lamp.png";
import delivery from "../img/free-delivery.png";
import cashback from "../img/cashback.png";
import quality from "../img/premium-quality.png";
import support from "../img/24-hours-support.png";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <Container fluid>
        <Row className="clr1">
          <Col xs={3} className="d-flex flex-column align-items-end">
            <img src={lamp} alt="" className="w-75" />
          </Col>
          <Col xs={4} className="d-flex flex-column align-items-start justify-content-center">
            <p className="fs-5 clr2 lato fw-bold">Best Furniture For Your Castle....</p>
            <p className="fs-1 josefin fw-bold">New Furniture Collection Trends in 2020</p>
            <p className="fs-5 lato clr4-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <Button btnClass={"btn text-light josefin"} btnTitle={"Shop Now"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Col>
          <Col xs={5}>
            <img src={sofa} alt="" className="w-75 py-3" />
          </Col>
        </Row>
      </Container>

      {/* Feature  */}
      <Container fluid className="clr3">
        <Row></Row>
      </Container>
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="fs-2 fw-bold clr4 text-center josefin">Featured Products</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="border border-0">
              {/* Carousel  */}
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={sofa} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={sofa} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={sofa} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              <Card.Body className="text-center">
                <Card.Title className="clr2 josefin fw-bold">Cantilever chair</Card.Title>
                <Card.Text className="clr4 lato fw-semibold">Code - Y523201</Card.Text>
                <Card.Text className="clr4 lato fw-semibold">$42.00</Card.Text>
              </Card.Body>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1 className="fs-2 fw-bold clr4 text-center josefin">Latest Products</h1>
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none clr4">
              New Arrival
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none clr4">
              Best Seller
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none clr4">
              Featured
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none clr4">
              Special Offer
            </a>
          </div>
        </div>
        <Row className="my-5">
          <Col xs={4}>
            <Card style={{ width: "18rem" }} className="border border-0">
              {/* Carousel  */}
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={sofa} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={sofa} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={sofa} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              <Card.Body className="text-center d-flex justify-content-around">
                <Card.Title className="clr2 josefin fw-bold me-5">Cantilever chair</Card.Title>
                <div className="d-flex">
                  <Card.Text className="clr4 lato fw-semibold me-1">$42.00</Card.Text>
                  <Card.Text className="lato fw-semibold clr2">$62.00</Card.Text>
                </div>
              </Card.Body>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <h1 className="fs-2 fw-bold clr4 text-center josefin">What ShopLounge Offer!</h1>
          </Col>
        </Row>
        <div className="d-flex  justify-content-center my-5">
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
              <Card.Img variant="top" className="w-25" src={delivery} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin clr4 ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato clr4-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
              <Card.Img variant="top" className="w-25" src={cashback} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin clr4 ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato clr4-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
              <Card.Img variant="top" className="w-25" src={quality} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin clr4 ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato clr4-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0">
              <Card.Img variant="top" className="w-25" src={support} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin clr4 ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato clr4-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      {/* Second banner */}
      <Container fluid className="my5">
        <Row className="clr1">
          <Col xs={3} className="d-flex flex-column align-items-end">
            <img src={lamp} alt="" className="w-75" />
          </Col>
          <Col xs={4} className="d-flex flex-column align-items-start justify-content-center">
            <p className="fs-5 clr2 lato fw-bold">Best Furniture For Your Castle....</p>
            <p className="fs-1 josefin fw-bold">New Furniture Collection Trends in 2020</p>
            <p className="fs-5 lato clr4-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <Button btnClass={"btn text-light josefin"} btnTitle={"Shop Now"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Col>
          <Col xs={5}>
            <img src={sofa} alt="" className="w-75 py-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
