import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import GreyContainer from "../Components/GreyContainer";
import { getProduct } from "../Redux/Actions/productAction";
import { AddCart } from "../Redux/Actions/cartAction";

import CarouselShop from "../Components/CarouselShop";
import sponsor from "../img/sponsor.png";
import { MdDeleteForever, MdViewModule, MdViewList } from "react-icons/md";
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs";

export default function ShopGrid() {
  const navigate = useNavigate()
  const [showPage, setShowPage] = useState(12);
  // const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  // console.log("product", product);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    if (product.list && product.list.length > 0) {
      const filterProduct = product.list.filter((item, index) => index < 37);
      setProducts(filterProduct);
    }
  }, [product]);

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
      for (let number = 1; number <= Math.ceil(allproduct.length / 12); number++) {
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
              const filterData = recentData.slice(12 * (number - 1), 12 * number);
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
      <GreyContainer titlePage={"Shope Grid Default"} />
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
        <Row className="my-5">
          <Col className="d-flex flex-wrap justify-content-between">
            {products &&
              products.length > 0 &&
              products
                .filter((item, index) => index < showPage)
                .map((item, index) => {
                  return 
                  <CarouselShop 
                  listImage={item.images} 
                  title={item.title} 
                  price={item.price} 
                  onClickCart={() => handleClickCart(item)} 
                  onClickTitle={()=>{navigate(`/product-detail/${item.id}`)}} 
                  />;
                })}
          </Col>
        </Row>
        <Row>
          <div className="d-flex gap-3 justify-content-center">{items}</div>
        </Row>
      </div>

      <Row className="justify-content-md-center my-5">
        <Col md="auto">
          <img src={sponsor} />
        </Col>
      </Row>
    </div>
  );
}
