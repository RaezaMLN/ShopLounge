import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Form } from "react-bootstrap";

import GreyContainer from "../Components/GreyContainer";
import { getProduct } from "../Redux/Actions/productAction";
import CarouselShop from "../Components/CarouselShop";
import sponsor from "../img/sponsor.png";
import { MdDeleteForever, MdViewModule, MdViewList } from "react-icons/md";

export default function ShopGrid() {
  const [showPage, setShowPage] = useState([12, 0]);
  const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    const filterProduct = product.list.filter((item, index) => index < 37);
    setProducts(filterProduct);
  }, [product]);

  function handleChange(e) {
    const filterValue = e.target.value;

    if (filterValue == 1) {
      setShowPage([12, 0]);
    }
    if (filterValue == 2) {
      setShowPage([24, 12]);
    }
    if (filterValue == 3) {
      setShowPage([36, 24]);
    }
    e.preventDefault();

    // console.log("Filter Value", e.target.value);
  }

  // const [activePage, setaActivePage] = useState(1);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   if (products) {
  //     let holdItems = [];
  //     for (let number = 1; number <= Math.ceil(products.length / 12); number++) {
  //       holdItems.push(
  //         <div
  //           key={number}
  //           active={number === activePage}
  //           style={{
  //             backgroundColor: "white",
  //             padding: "5px",
  //           }}
  //           onClick={(e) => {
  //             setaActivePage(number);
  //             const recentData = products;
  //             const filterData = recentData.slice(10 * (number - 1), 10 * number);
  //             setProductList(filterData);
  //           }}
  //         >
  //           {number}
  //         </div>
  //       );
  //     }
  //     setItems(holdItems);
  //   }
  //   // console.log("product", product.list);
  // }, [products, items]);

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
                <Form.Control type="number" style={{ width: "100px" }} onChange={handleChange} />
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
                  <MdViewModule />
                  <MdViewList />
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
                .filter((item, index) => index < showPage[0] && index >= showPage[1])
                .map((item, index) => {
                  return <CarouselShop listImage={item.images} title={item.title} price={item.price} />;
                })}
          </Col>
        </Row>
        {/* <Row>
          <div style={{ display: "flex", gap: "10px" }}>{items}</div>
        </Row> */}
      </div>

      <Row className="justify-content-md-center my-5">
        <Col md="auto">
          <img src={sponsor} />
        </Col>
      </Row>
    </div>
  );
}
