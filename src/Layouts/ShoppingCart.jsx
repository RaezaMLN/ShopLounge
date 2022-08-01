import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as types from "../Redux/Types/cartType";
import GreyContainer from "../Components/GreyContainer";
import { AddCart } from "../Redux/Actions/cartAction";
import Input from "../Components/Input";

export default function ShoppingCart() {
  const [qty, setQty] = useState(3);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cartProducts);

  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  const [countTotal, setCountTotal] = useState(0);

  useEffect(() => {
    let newCount = 0;
    // (reduce)
    carts.forEach((e) => {
      newCount += Number(e.price);
    });
    setCountTotal(newCount);
  }, [carts]);

  const handleDelete = (i) => {
    dispatch({ type: types.DELETE_CART, payload: carts.find((e) => e.id === i) });
  };

  // let count = 0;
  // carts &&
  //   carts.length &&
  //   carts.forEach((item, index) => {
  //     carts.find((e) => e.id === item.id);
  //   });

  // console.log("cart state", carts);
  useEffect(() => {
    const count = carts.reduce((accumulator, value) => {
      return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
    }, {});
    console.log("count", count);
  }, []);

  return (
    <div>
      <GreyContainer titlePage={"Shopping Cart"} />
      <Row className="container p-5 ">
        <Col lg="8">
          <div className="row">
            <div className="col-md-12">
              <table className="table ">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carts &&
                    carts.length > 0 &&
                    carts.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td className="d-flex gap-2">
                            <div className="position-relative">
                              <img src={item.images} style={{ width: "100px", height: "80px" }} />
                              <div className="position-absolute top-0 start-100 translate-middle p-1 badge  bg-dark rounded-circle" onClick={() => handleDelete(item.id)} style={{ cursor: "pointer", width: "20px", height: "20px" }}>
                                x
                              </div>
                            </div>
                            <div>
                              <b>{item.title}</b>
                              <div style={{ color: "grey" }}>{item.category.name}</div>
                            </div>
                          </td>

                          <td>${item.price} </td>
                          <td>
                            <Input inpType="number" inpValue={""} />
                          </td>
                          <td>{formatter.format(item.price)} </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </Col>

        <Col lg="4">
          <div>
            <div className="mb-5">
              <h5 className="text-center">Cart Totals</h5>
              <Form className="p-4 bg-ghost-white rounded" style={{ width: "371px" }}>
                <div className="border-bottom my-3 px-1 d-flex justify-content-between">
                  <div>Subtotals:</div>
                  <div>{formatter.format(countTotal)}</div>
                </div>
                <div className="border-bottom my-3 px-1 d-flex justify-content-between ">
                  <div>Totals:</div>
                  <div>{formatter.format(countTotal + countTotal * (15 / 100))}</div>
                </div>
                {/* <Form.Control plaintext readOnly defaultValue={"Subtotals:" + countTotal}  className="border-bottom my-3" /> */}
                {/* <Form.Control plaintext readOnly defaultValue="Totals:" className="border-bottom" /> */}
                <Form.Check type="checkbox" id="default-checkbox" label="Shipping & taxes calculated at checkout" className="my-4" />
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                  onClick={() => {
                    navigate("/shipping");
                  }}
                >
                  Proceed To Checkout
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
