import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Card, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import { RiStarFill, RiInstagramFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";

import GreyContainer from "../Components/GreyContainer";
import sponsor from "../img/sponsor.png";
import room3 from "../img/room3.png";
import { Description, Additional, Review, Video } from "../Components/Sonnet";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

// action
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct } from "../Redux/Actions/productAction";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [price, setPrice] = useState();
  const [detailProduct, setDetailProduct] = useState({});
  const param = useParams();

  useEffect(() => {
    dispatch(getDetailProduct(param.id));
  }, []);

  console.log("product", product);

  useEffect(() => {
    if (product?.list?.category) {
      const detail = product.list;
      if (detail) {
        setDetailProduct(detail);
        setPrice(detail.price);
      }
    }
    // if (product?.list.find((e) => e.category.id === param.id)) {
    //   const detail = product.list;
    //   if (detail) {
    //     setDetailProduct(detail);
    //     setPrice(detail.price);
    //   }
    // }
  }, []);

  console.log("detail product", detailProduct);

  return (
    <div>
      <GreyContainer titlePage={"Product Details"} />

      <div className="container my-5">
        <div>
          <Card className="my-5 p-4">
            <Row>
              <Col>
                <Row>
                  <Col className="d-flex flex-column gap-4">
                    <Card.Img variant="top" src={detailProduct.images[0]} className="rounded" />
                    <Card.Img variant="top" src={detailProduct.images[1]} className="rounded" />
                    <Card.Img variant="top" src={detailProduct.images[2]} className="rounded" />
                  </Col>
                  <Col>
                    <Card.Img variant="top" src={detailProduct.category.image} className="rounded" style={{ width: "375px", height: "100%" }} />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>
                    {detailProduct.title}
                    <div className="d-flex align-item-center gap-1 py-2">
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      <RiStarFill style={{ color: "#FFC416" }} />
                      (22)
                    </div>
                  </Card.Title>
                  <Card.Text className="d-flex">
                    ${Math.round((62 / 100) * Number({ price }))}
                    <span className="clr2 mx-3"> ${{ price }}</span>
                  </Card.Text>
                  <Card.Text>
                    <h4>Color</h4>
                    {detailProduct.description}
                  </Card.Text>
                  <Card.Text className="d-flex gap-4">
                    <h6>Add to cart</h6>
                    <BsHeart />
                  </Card.Text>
                  <div>
                    <h5>Category:</h5>
                  </div>
                  <div>
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
      <div style={{ backgroundColor: "#F6F5FF", height: "500px" }} className="d-flex gap-3">
        <div
          onClick={() => {
            <Description />;
          }}
          className="border-bottom"
        >
          Description
        </div>
        <div
          onClick={() => {
            <Additional />;
          }}
          className="border-bottom"
        >
          Additional Info
        </div>
        <div
          onClick={() => {
            <Review />;
          }}
          className="border-bottom"
        >
          Reviews
        </div>
        <div
          onClick={() => {
            <Video />;
          }}
          className="border-bottom"
        >
          Video
        </div>
      </div>
      <Row className="justify-content-md-center my-5">
        <Col md="auto">
          <img src={sponsor} />
        </Col>
      </Row>
    </div>
  );
}
