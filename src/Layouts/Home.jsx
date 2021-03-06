import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Button from "../Components/Button";
import sqrsofa from "../img/square-sofa.png";
import sofa from "../img/sofa.png";
import lamp from "../img/lamp.png";
import delivery from "../img/free-delivery.png";
import cashback from "../img/cashback.png";
import quality from "../img/premium-quality.png";
import support from "../img/24-hours-support.png";
import clock from "../img/clock.png";
import sit from "../img/sit.png";
import chair1 from "../img/chair1.png";
import chair2 from "../img/chair2.png";
import chair3 from "../img/chair3.png";
import chair from "../img/chair.png";
import lcw1 from "../img/lcw1.png";
import lcw2 from "../img/lcw2.png";
import lcw3 from "../img/lcw3.png";
import banner from "../img/banner.png";
import sponsor from "../img/sponsor.png";
import room from "../img/room.png";
import room2 from "../img/room2.png";
import room3 from "../img/room3.png";
import icon1 from "../img/Vector.png";
import icon2 from "../img/calend.png";

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

      {/* Feature Product */}
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

        {/* Latest Product  */}
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

        {/* What ShopLounge Offer! */}
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
      <Container fluid className="my-5 d-flex align-items-center justify-content-center clr1">
        <div>
          <img src={sqrsofa} alt="" />
        </div>
        <div>
          <p className="fs-1 fw-bold clr4 text-wrap">
            Unique Features Of leatest & <br /> Trending Poducts
          </p>
          <ul className="fs-5 clr4-1 my-4">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ul>
          <div className="d-flex">
            <Button btnClass={"btn text-light josefin me-5 fs-4"} btnTitle={"Add To Cart"} btnStyle={{ backgroundColor: "#fb2e86" }} />
            <div className="d-flex flex-column josefin clr4">
              <h5>B&B Italian Sofa</h5>
              <h5>$32.00</h5>
            </div>
          </div>
        </div>
      </Container>
      <br />

      {/* Trending Product  */}
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="fs-2 fw-bold clr4 text-center josefin">Trending Products</h1>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={3}>
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
              <Card.Body className="text-center d-flex flex-column align-items-center">
                <Card.Title className="clr2 josefin fw-bold">Cantilever chair</Card.Title>
                <div className="d-flex">
                  <Card.Text className="clr4 lato fw-semibold me-2 clr4">$42.00</Card.Text>
                  <Card.Text className="lato fw-semibold clr4-1">$62.00</Card.Text>
                </div>
              </Card.Body>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-flex flex-row justify-content-evenly">
          <div className="d-flex flex-column me-3">
            <h5 className="fs-4 fw-bold clr4 josefin">23% off in all products</h5>
            <a href="#" className="clr2 lato fs-5 fw-bold">
              Shop Now
            </a>
            <img src={clock} />
          </div>
          <div className="d-flex flex-column clr0">
            <h5 className="fs-4 fw-bold clr4 josefin">23% off in all products</h5>
            <a href="#" className="clr2 lato fs-5 fw-bold">
              View Collection
            </a>
            <img src={sit} />
          </div>
          <div className="d-flex flex-column justify-content-start josefin fs-5 clr4">
            <div>
              <div className="d-flex">
                <img src={chair1} alt="" className="me-3" />
                <div>
                  <h5>Executive Seat chair</h5>
                  <h5>$32.00</h5>
                </div>
              </div>
            </div>
            <div className="my-3">
              <div className="d-flex">
                <img src={chair2} alt="" className="me-3" />
                <div>
                  <h5>Executive Seat chair</h5>
                  <h5>$32.00</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <img src={chair3} alt="" className="me-3" />
                <div>
                  <h5>Executive Seat chair</h5>
                  <h5>$32.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Discount Item  */}
        <Row className="mt-5">
          <Col>
            <h1 className="fs-2 fw-bold clr4 text-center josefin">Discount Item</h1>
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none clr4">
              Wood Chair
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none clr4">
              Plastic Chair
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none clr4">
              Sofa Collection
            </a>
          </div>
        </div>

        <div className="my-5 d-flex align-items-center">
          <div>
            <h1 className="fs-2 josefin fw-bold clr4">20% Discount Of All Products</h1>
            <h4 className="fs-4 clr2 josefin">Eams Sofa Compact</h4>
            <h5 className="lato clr4-1 lato lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.
            </h5>
            <div className="d-flex lato clr4-1 lh-lg mb-4">
              <div>
                <li>Material expose like metals</li>
                <li>Simple neutral colours.</li>
              </div>
              <div>
                <li>Clear lines and geomatric figures</li>
                <li>Material expose like metals</li>
              </div>
            </div>
            <Button btnClass={"btn text-light josefin"} btnTitle={"Shop Now"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </div>
          <div>
            <img src={chair} alt="" />
          </div>
        </div>

        {/* Top Categories  */}
        <Row className="mt-5">
          <Col>
            <h1 className="fs-2 fw-bold clr4 text-center josefin">Top Categories</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Card style={{ width: "18rem" }} className="border border-0">
              {/* Carousel  */}
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={lcw1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={lcw2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 clr0" src={lcw3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              <Card.Body className="text-center">
                <Card.Title className="clr2 josefin fw-bold">Mini LCW chair</Card.Title>
                <Card.Text className="clr4 lato fw-semibold">$56.00</Card.Text>
              </Card.Body>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {/* 3rd Banner  */}
        <Card className="text-center josefin">
          <Card.Img src={banner} alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center">
            <Card.Title className="fs-2 fw-bold clr4">
              Get Leatest Update By Subscribe <br /> 0ur Newslater
            </Card.Title>
            <Button btnClass={"btn text-light josefin"} btnTitle={"Shop Now"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Card.ImgOverlay>
        </Card>
      </Container>
      <Row className="justify-content-md-center my-5">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <img src={sponsor} />
        </Col>
        <Col xs lg="2"></Col>
      </Row>

      {/* Latest  */}

      <Row className="my-5">
        <Col>
          <h1 className="fs-2 fw-bold clr4 text-center josefin">Leatest Blog</h1>
        </Col>
      </Row>
      <div className="d-flex  justify-content-center my-5">
        <div>
          <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-start border-0">
            <Card.Img variant="top" className="w-100 rounded-3" src={room} />
            <div className="d-flex my-3">
              <div className="d-flex me-3">
                <img src={icon1} />
                <h5 style={{ fontSize: "12px" }}>Saber Ali</h5>
              </div>
              <div className="d-flex">
                <img src={icon2} />
                <h5 style={{ fontSize: "12px" }}>7 july 2022</h5>
              </div>
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="josefin clr4" style={{ fontSize: "18px" }}>
                Top esssential Trends in 2021
              </Card.Title>
              <Card.Text className=" lato clr4-1">More off this less hello samlande lied much over tightly circa horse taped mightly</Card.Text>
              <Card.Text className="clr4">
                <a href="#" className="lato">
                  Read More
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="mx-5">
          <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-start border-0">
            <Card.Img variant="top" className="w-100 rounded-3" src={room2} />
            <div className="d-flex my-3">
              <div className="d-flex me-3">
                <img src={icon1} />
                <h5 style={{ fontSize: "12px" }}>Saber Ali</h5>
              </div>
              <div className="d-flex">
                <img src={icon2} />
                <h5 style={{ fontSize: "12px" }}>7 july 2022</h5>
              </div>
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="josefin clr4" style={{ fontSize: "18px" }}>
                Top esssential Trends in 2021
              </Card.Title>
              <Card.Text className=" lato clr4-1">More off this less hello samlande lied much over tightly circa horse taped mightly</Card.Text>
              <Card.Text className="clr4">
                <a href="#" className="lato">
                  Read More
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-start border-0">
            <Card.Img variant="top" className="w-100 rounded-3" src={room3} />
            <div className="d-flex my-3">
              <div className="d-flex me-3">
                <img src={icon1} />
                <h5 style={{ fontSize: "12px" }}>Saber Ali</h5>
              </div>
              <div className="d-flex">
                <img src={icon2} />
                <h5 style={{ fontSize: "12px" }}>7 july 2022</h5>
              </div>
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="josefin clr4" style={{ fontSize: "18px" }}>
                Top esssential Trends in 2021
              </Card.Title>
              <Card.Text className=" lato clr4-1">More off this less hello samlande lied much over tightly circa horse taped mightly</Card.Text>
              <Card.Text className="clr4">
                <a href="#" className="lato">
                  Read More
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
