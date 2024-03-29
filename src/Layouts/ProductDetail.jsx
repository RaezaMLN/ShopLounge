import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { RiStarFill, RiInstagramFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import rate from "../img/rate.png";

import GreyContainer from "../Components/GreyContainer";
import sponsor from "../img/sponsor.png";
import room3 from "../img/room3.png";
import { Description, Additional, Review, Video } from "../Components/Sonnet";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AddCart } from "../Redux/Actions/cartAction";

// action
import * as type from "../Redux/Types/productType";
import { mainApi as api } from "../Lib/Api";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../Redux/Actions/productAction";

// import { getdetail } from "../Redux/Actions/productAction";

export default function ProductDetail() {
  const [detail, setDetail] = useState({});
  const [image, setImage] = useState({});
  const [showPage, setShowPage] = useState(Description());
  const param = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    const filterProduct = product.list.filter((item, index) => index < 5 && index > 0);
    setProducts(filterProduct);
  }, [product]);

  useEffect(() => {
    dispatch({ type: type.PRODUCT_REQUEST });
    api
      .get(`/products/${param.id}`)
      .then((response) => {
        setDetail(response.data);
        setImage(response.data.category.image);

        // console.log("respon", response);
      })
      .catch((err) => {
        dispatch({ type: type.GET_PRODUCT_FAILED, error: err.response });
      });
  }, []);

  // console.log("product detail", detail);

  // const product = useSelector((state) => state.product);
  // const [price, setPrice] = useState();
  // const [detail, setdetail] = useState({});

  // useEffect(() => {
  //   dispatch(getdetail(param.id));
  // }, []);

  // console.log("detail product", getdetail());
  // useEffect(() => {
  //   if (product?.list?.category) {
  //     const detail = product.list;
  //     if (detail) {
  //       setdetail(detail);
  //       setPrice(detail.price);
  //     }
  //   }
  // }, []);

  const handleClickCart = (item) => {
    dispatch(AddCart(item));
  };

  console.log("detail product", detail);
  const price = detail.price;

  const handleClickCard = (item) => {
    setDetail(item);
    setImage(item.category.image);
  };

  return (
    <div>
      <GreyContainer titlePage={"Product Details"} />

      <div className="container my-5">
        <div>
          <Card className="my-5 p-4 josefin">
            <Row>
              <Col>
                <Row>
                  <Col className="d-flex flex-column gap-4">
                    {detail.images &&
                      detail.images.length > 0 &&
                      detail.images.map((item, index) => {
                        return <Card.Img variant="top" src={item} className="rounded" />;
                      })}
                  </Col>
                  <Col>
                    <Card.Img variant="top" src={image} className="rounded" style={{ width: "400px", height: "100%" }} />;
                  </Col>
                </Row>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>
                    <span className="Midnight-Blue fw-bold" style={{ fontSize: "36px" }}>
                      {detail.title}
                    </span>
                    <div className="d-flex align-item-center gap-1 py-2">
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <span className="Midnight-Blue" style={{ fontSize: "14px" }}>
                        (22)
                      </span>
                    </div>
                  </Card.Title>
                  <Card.Text className="d-flex" style={{ fontSize: "16px" }}>
                    <span className="Midnight-Blue"> ${Math.round((62 / 100) * Number(price))}</span>
                    <span className="clr2 mx-3 Wild-Strawberry">
                      <del> ${price}</del>
                    </span>
                  </Card.Text>
                  <Card.Text>
                    <h4 className="Midnight-Blue" style={{ fontSize: "16px" }}>
                      Color
                    </h4>
                    <span className="color-wildBlueYonder">{detail && detail.description}</span>
                  </Card.Text>
                  <Card.Text className="d-flex gap-4 ms-5 Midnight-Blue">
                    <h6 onClick={() => handleClickCart(detail && detail)} style={{ cursor: "pointer" }}>
                      Add to cart
                    </h6>
                    <BsHeart />
                  </Card.Text>
                  <div className="Midnight-Blue" style={{ fontSize: "16px" }}>
                    <h5>Category: {detail && detail.category && detail.category.name}</h5>
                  </div>
                  <div className="Midnight-Blue" style={{ fontSize: "16px" }}>
                    <h5>Tags</h5>
                  </div>
                  <div className="d-flex gap-4">
                    <h5>Share</h5>
                    <div style={{ width: "30px", height: "30px", background: "#151875", color: "white" }} className="rounded-circle text-center">
                      <RiFacebookFill />
                    </div>
                    <div style={{ width: "30px", height: "30px", background: "#FB2E86", color: "white" }} className="rounded-circle text-center">
                      <RiInstagramFill />
                    </div>
                    <div style={{ width: "30px", height: "30px", background: "#151875", color: "white" }} className="rounded-circle text-center">
                      <RiTwitterFill />
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <div style={{ backgroundColor: "#F6F5FF", height: "500px" }} className="d-flex flex-column  container">
        <div className="d-flex gap-5 fw-bold josefin " style={{ fontSize: "24px" }}>
          <div>
            <span className="Midnight-Blue" style={{ cursor: "pointer" }} onClick={() => setShowPage(Description())}>
              Description
            </span>
          </div>
          <div>
            <span className="Midnight-Blue" style={{ cursor: "pointer" }} onClick={() => setShowPage(Additional())}>
              Additional Info
            </span>
          </div>
          <div>
            <span className="Midnight-Blue" style={{ cursor: "pointer" }} onClick={() => setShowPage(Review())}>
              Reviews
            </span>
          </div>
          <div>
            <span className="Midnight-Blue" style={{ cursor: "pointer" }} onClick={() => setShowPage(Video())}>
              Video
            </span>
          </div>
        </div>
        <div>{showPage}</div>
      </div>
      <Row className="my-5 container ms-1">
        <Col>
          <h1 className="fs-2 fw-bold Midnight-Blue text-start josefin">Related Products</h1>
        </Col>
      </Row>
      <Row className="my-5">
        {products &&
          products.length > 0 &&
          products.map((item, index) => {
            return (
              <Col xs={3} className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0 text-start">
                  <div className="container-image">
                    <Card.Img variant="top" src={item.images[1]} />
                  </div>
                  <Card.Body className="d-flex flex-column align-items-start">
                    <Card.Title
                      className="Midnight-Blue josefin fw-bold"
                      style={{ cursor: "pointer", fontSize: "16px" }}
                      onClick={() => {
                        navigate(`/product-detail/${item.id}`);
                        handleClickCard(item);
                      }}
                    >
                      <div className="d-flex align-items-start ">
                        {item.title}
                        <img src={rate} alt="" className="w-25 ms-5" />
                      </div>
                    </Card.Title>
                    <div className="d-flex">
                      <Card.Text className="lato fw-semibold Midnight-Blue">${item.price}</Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Body></Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
      <Row className="justify-content-md-center my-5">
        <Col md="auto">
          <img src={sponsor} />
        </Col>
      </Row>
    </div>
  );
}
