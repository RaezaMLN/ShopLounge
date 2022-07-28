import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Carousel from "../Components/Carousel";
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
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../Redux/Actions/productAction";
import { AddCart } from "../Redux/Actions/cartAction";

export default function Home() {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState([4, 0]);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    const filterProduct = product.list.filter((item, index) => index < 17 && index > 0);
    setProducts(filterProduct);
  }, [product]);

  const handleClickCart = (item) => {
    dispatch(AddCart(item));
  };

  return (
    <div>
      {/* Banner */}
      <Container fluid>
        <Row className="Whisper">
          <Col xs={3} className="d-flex flex-column align-items-end">
            <img src={lamp} alt="" className="w-75" />
          </Col>
          <Col xs={4} className="d-flex flex-column align-items-start justify-content-center">
            <p className="fs-5 Wild-Strawberry lato fw-bold">Best Furniture For Your Castle....</p>
            <p className="fs-1 josefin fw-bold">New Furniture Collection Trends in 2020</p>
            <p className="fs-5 lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <Button btnClass={"btn text-light josefin"} btnTitle={"Shop Now"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Col>
          <Col xs={5}>
            <img src={sofa} alt="" className="w-75 py-3" />
          </Col>
        </Row>
      </Container>

      {/* Feature Product */}
      <Container fluid className="soft-Blue-Yonder">
        <Row></Row>
      </Container>
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="fs-2 fw-bold Midnight-Blue text-center josefin">Featured Products</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-wrap">
            {products &&
              products.length > 0 &&
              products
                .filter((item, index) => index < showPage[0] && index >= showPage[1])
                .map((item, index) => {
                  return (
                    <Carousel
                      listImage={item.images}
                      title={item.title}
                      price={item.price}
                      onClickCart={() => handleClickCart(item)}
                      onClickTitle={() => {
                        navigate(`/product-detail/${item.id}`);
                      }}
                    />
                  );
                })}
          </Col>

          <div className="w-100 d-flex flex-row justify-content-center gap-2 mt-5">
            <div className="rounded-3 my-2 pink-page pageHover" style={{ cursor: "pointer" }} onClick={() => setShowPage([4, 0])}></div>
            <div className="rounded-3 my-2 pink-page pageHover" style={{ cursor: "pointer" }} onClick={() => setShowPage([8, 4])}></div>
            <div className="rounded-3 my-2 pink-page pageHover" style={{ cursor: "pointer" }} onClick={() => setShowPage([12, 8])}></div>
            <div className="rounded-3 my-2 pink-page pageHover" style={{ cursor: "pointer" }} onClick={() => setShowPage([16, 12])}></div>
          </div>
        </Row>

        {/* Latest Product  */}
        <Row className="mt-5">
          <Col>
            <h1 className="fs-2 fw-bold Midnight-Blue text-center josefin">Leatest Products</h1>
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none Midnight-Blue txthoverpink">
              New Arrival
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none Midnight-Blue">
              Best Seller
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none Midnight-Blue">
              Featured
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none Midnight-Blue">
              Special Offer
            </a>
          </div>
        </div>
        <Row className="ms-2">
          {products &&
            products.length > 0 &&
            products
              .filter((item, index) => index < 6)
              .map((item, index) => {
                return (
                  <Col xs={4} className="mb-5">
                    <Card style={{ width: "23rem" }} className="border border-0">
                      <div className="container-image">
                        <Card.Img variant="top" src={item.images[2]} />
                        <div className="overlay overlay-home">
                          <div className="overlay-icon-home position-relative">
                            <BsCart2 class="position-absolute top-50 start-50 translate-middle" onClick={() => handleClickCart(item)} style={{ cursor: "pointer" }} />
                          </div>
                          <div className="overlay-icon-home position-relative">
                            <BsZoomIn class="position-absolute top-50 start-50 translate-middle" style={{ cursor: "pointer" }} />
                          </div>
                          <div className="overlay-icon-home position-relative">
                            <BsHeart class="position-absolute top-50 start-50 translate-middle" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                      </div>

                      <Card.Body className="d-flex">
                        <Card.Title className="Midnight-Blue josefin fw-bold me-5">{item.title}</Card.Title>
                        <div className="d-flex">
                          <Card.Text className="Midnight-Blue lato fw-semibold me-2">${item.price}</Card.Text>
                          <Card.Text className="lato fw-semibold Wild-Strawberry">
                            <del>$62.00</del>
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
        </Row>

        {/* What ShopLounge Offer! */}
        <Row className="my-5">
          <Col>
            <h1 className="fs-2 fw-bold Midnight-Blue text-center josefin">What ShopLounge Offer!</h1>
          </Col>
        </Row>
        <div className="d-flex  justify-content-center my-5">
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0 shadow-sm mx-3">
              <Card.Img variant="top" className="w-25" src={delivery} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0 shadow-sm mx-3">
              <Card.Img variant="top" className="w-25" src={cashback} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0 shadow-sm mx-3">
              <Card.Img variant="top" className="w-25" src={quality} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }} className="d-flex flex-column align-items-center border-0  shadow-sm mx-3">
              <Card.Img variant="top" className="w-25" src={support} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="josefin Midnight-Blue ">24/7 Support</Card.Title>
                <Card.Text className="text-center lato Midnight-Blue-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <br />
      {/* Second banner */}
      <Container fluid className="my-5 d-flex align-items-center justify-content-center Whisper">
        <div>
          <img src={sqrsofa} alt="" />
        </div>
        <div>
          <p className="fs-1 fw-bold Midnight-Blue text-wrap">
            Unique Features Of leatest & <br /> Trending Poducts
          </p>
          <ul className="fs-5 Midnight-Blue-1 my-4">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ul>
          <div className="d-flex">
            <Button btnClass={"btn text-light josefin me-5 fs-4"} btnTitle={"Add To Cart"} btnStyle={{ backgroundColor: "#fb2e86" }} />
            <div className="d-flex flex-column josefin Midnight-Blue">
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
            <h1 className="fs-2 fw-bold Midnight-Blue text-center josefin">Trending Products</h1>
          </Col>
        </Row>
        <Row className="my-5">
          {products &&
            products.length > 0 &&
            products
              .filter((item, index) => index < 4)
              .map((item, index) => {
                return (
                  <Col xs={3}>
                    <Card style={{ width: "18rem" }} className="border border-0">
                      <div className="container-image">
                        <Card.Img variant="top" src={item.images[1]} />
                        <div className="overlay overlay-home">
                          <div className="overlay-icon-home position-relative">
                            <BsCart2 class="position-absolute top-50 start-50 translate-middle" onClick={() => handleClickCart(item)} style={{ cursor: "pointer" }} />
                          </div>
                          <div className="overlay-icon-home position-relative">
                            <BsZoomIn class="position-absolute top-50 start-50 translate-middle" style={{ cursor: "pointer" }} />
                          </div>
                          <div className="overlay-icon-home position-relative">
                            <BsHeart class="position-absolute top-50 start-50 translate-middle" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                      </div>
                      <Card.Body className="text-center d-flex flex-column align-items-center">
                        <Card.Title className="Wild-Strawberry josefin fw-bold">{item.title}</Card.Title>
                        <div className="d-flex">
                          <Card.Text className="Midnight-Blue lato fw-semibold me-2 fw-bold">${item.price}</Card.Text>
                          <Card.Text className="lato fw-semibold color-wildBlueYonder">
                            <del>$62.00</del>
                          </Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                );
              })}
        </Row>
        <Row className="d-flex flex-row justify-content-evenly">
          <Col xs={4} className="d-flex flex-column me-3" style={{ backgroundColor: "#FFF6FB" }}>
            <h5 className="fs-4 fw-bold Midnight-Blue josefin">23% off in all products</h5>
            <a href="#" className="Wild-Strawberry lato fs-5 fw-bold">
              Shop Now
            </a>
            <img src={clock} />
          </Col>
          <Col xs={4} className="d-flex flex-column Ghost-White ">
            <h5 className="fs-4 fw-bold Midnight-Blue josefin">23% off in all products</h5>
            <a href="#" className="Wild-Strawberry lato fs-5 fw-bold">
              View Collection
            </a>
            <img src={sit} />
          </Col>
          <Col xs={4} className="d-flex flex-column justify-content-start josefin fs-5 Midnight-Blue w-25">
            <div>
              {products &&
                products.length > 0 &&
                products
                  .filter((item, index) => index < 3)
                  .map((item, index) => {
                    return (
                      <div className="d-flex">
                        <img src={item.images[0]} alt="" className="me-3 w-50 mb-3" />
                        <div>
                          <h5 className="text-wrap" style={{ fontSize: "16px" }}>
                            {item.title}
                          </h5>
                          <h5 style={{ fontSize: "12px" }}>${item.price}</h5>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </Col>
        </Row>
        <br />
        {/* Discount Item  */}
        <Row className="mt-5">
          <Col>
            <h1 className="fs-2 fw-bold Midnight-Blue text-center josefin">Discount Item</h1>
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none Midnight-Blue">
              Wood Chair
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none Midnight-Blue">
              Plastic Chair
            </a>
          </div>
          <div className="mx-3 fs-5 lato">
            <a href="#" className="text-decoration-none Midnight-Blue">
              Sofa Collection
            </a>
          </div>
        </div>

        <div className="my-5 d-flex align-items-center">
          <div>
            <h1 className="fs-2 josefin fw-bold Midnight-Blue">20% Discount Of All Products</h1>
            <h4 className="fs-4 Wild-Strawberry josefin">Eams Sofa Compact</h4>
            <h5 className="lato Midnight-Blue-1 lato lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.
            </h5>
            <div className="d-flex lato Midnight-Blue-1 lh-lg mb-4">
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
            <h1 className="fs-2 fw-bold Midnight-Blue text-center josefin">Top Categories</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            {/* <Card style={{ width: "18rem" }} className="border border-0"> */}
            {/* Carousel  */}
            {/* <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100 Ghost-White" src={lcw1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 Ghost-White" src={lcw2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 Ghost-White" src={lcw3} alt="Third slide" />
                </Carousel.Item>
            //   </Carousel> */}
            {/* //   <Card.Body className="text-center">
            //     <Card.Title className="Wild-Strawberry josefin fw-bold">Mini LCW chair</Card.Title>
            //     <Card.Text className="Midnight-Blue lato fw-semibold">$56.00</Card.Text>
            //   </Card.Body>
            //   <Card.Body></Card.Body>
            // </Card> */}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {/* 3rd Banner  */}
        <Card className="text-center josefin">
          <Card.Img src={banner} alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center">
            <Card.Title className="fs-2 fw-bold Midnight-Blue">
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
          <h1 className="fs-2 fw-bold Midnight-Blue text-center josefin">Leatest Blog</h1>
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
              <Card.Title className="josefin Midnight-Blue" style={{ fontSize: "18px" }}>
                Top esssential Trends in 2021
              </Card.Title>
              <Card.Text className=" lato Midnight-Blue-1">More off this less hello samlande lied much over tightly circa horse taped mightly</Card.Text>
              <Card.Text className="Midnight-Blue">
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
              <Card.Title className="josefin Midnight-Blue" style={{ fontSize: "18px" }}>
                Top esssential Trends in 2021
              </Card.Title>
              <Card.Text className=" lato Midnight-Blue-1">More off this less hello samlande lied much over tightly circa horse taped mightly</Card.Text>
              <Card.Text className="Midnight-Blue">
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
              <Card.Title className="josefin Midnight-Blue" style={{ fontSize: "18px" }}>
                Top esssential Trends in 2021
              </Card.Title>
              <Card.Text className=" lato Midnight-Blue-1">More off this less hello samlande lied much over tightly circa horse taped mightly</Card.Text>
              <Card.Text className="Midnight-Blue">
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
