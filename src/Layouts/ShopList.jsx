import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddCart } from "../Redux/Actions/cartAction";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Form } from "react-bootstrap";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs";
import { MdDeleteForever, MdViewModule, MdViewList } from "react-icons/md";

import GreyContainer from "../Components/GreyContainer";
import { getProduct } from "../Redux/Actions/productAction";
import Brand from "../Components/Brand";
import CarouselShopList from "../Components/CarouselShopList";

export default function ShopList() {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(7);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    if (product.list && product.list.length > 0) {
      const filterProduct = product.list.filter((item, index) => index < 37);
      setProducts(filterProduct);
    }
  }, [product]);

  // console.log("show Page", showPage);

  function handleChange(e) {
    setShowPage(e.target.value);

    e.preventDefault();

    // console.log("Filter Value", e.target.value);
  }

  const allproduct = useSelector((state) => state.product.list);

  const [activePage, setaActivePage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (allproduct) {
      let holdItems = [];
      for (let number = 1; number <= Math.ceil(allproduct.length / 7); number++) {
        holdItems.push(
          <div
            className="border border-1 px-3 py-1 texthover lightSlateBlue rounded-3"
            key={number}
            active={number === activePage}
            style={{
              cursor: "pointer",
            }}
            onClick={(e) => {
              setaActivePage(number);
              const recentData = allproduct;
              const filterData = recentData.slice(7 * (number - 1), 7 * number);
              setProducts(filterData);
            }}
          >
            <span className="texthvr">{number}</span>
          </div>
        );
      }
      setItems(holdItems);
    }
    // console.log("product", product.list);
  }, [allproduct, items]);

  const handleClickCart = (item) => {
    dispatch(AddCart(item));
  };

  return (
    <div>
      <GreyContainer titlePage={"Shop List"} />

      <div className="container my-5">
        <Row>
          <Col sm="4">
            <Card style={{ border: "none" }}>
              <Card.Body className="p-0">
                <Card.Title>Ecommerce Acceories & Fashion item </Card.Title>
                <Card.Subtitle>
                  <small className="text-muted">About 9,620 results (0.62 seconds)</small>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="8">
            <Form className="d-flex gap-5 justify-content-end">
              <Form.Group className="d-flex gap-2">
                <Form.Label>Per Page:</Form.Label>
                <Form.Control type="number" style={{ width: "100px" }} onChange={handleChange} value={showPage} />
              </Form.Group>

              <Form.Group className="d-flex gap-2">
                <Form.Label style={{ width: "85px" }}>Sort By:</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Best Match</option>
                  <option value="1">By ...</option>
                  <option value="2">By ...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="d-flex gap-2">
                <Form.Label>
                  View:
                  <Link to={"/shop-grid"}>
                    <MdViewModule />
                  </Link>
                  <Link to={"/shop-list"}>
                    <MdViewList />
                  </Link>
                </Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <div>
          {products &&
            products.length > 0 &&
            products
              .filter((item, index) => index < showPage)
              .map((item, index) => {
                return (
                  <CarouselShopList
                    listImage={item.images}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    onClickCart={() => handleClickCart(item)}
                    onClickTitle={() => {
                      navigate(`/product-detail/${item.id}`);
                    }}
                  />
                );
              })}
        </div>
      </div>
      <Row>
        <Col>
          <Row>
            <div className="d-flex gap-3 justify-content-center flex-wrap">{items}</div>
          </Row>
        </Col>
      </Row>
      <Brand />
    </div>
  );
}
