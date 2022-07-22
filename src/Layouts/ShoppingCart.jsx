import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import GreyContainer from "../Components/GreyContainer";
import { AddCart } from "../Redux/Actions/cartAction";

export default function ShoppingCart() {
  // const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const [cartList, setCartList] = useState();

  console.log("see state shopping", cartProducts.cartProducts.length);

  // console.log("see panjang shopping",cartProducts.length)

  // useEffect(()=>{
  //     setCartList(cartProducts)
  // },[])

  // console.log("see cartList",cartList)
  // console.log("see panjang cartList",cartList.length)

  return (
    <div>
      <GreyContainer titlePage={"Shopping Cart"} />
      <Row className="container p-5">
        <Col lg="8">
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.cartProducts &&
                    cartProducts.cartProducts.length > 0 &&
                    cartProducts.cartProducts.map((item, key) => {
                      console.log("see item", item);
                      return (
                        <tr key={key}>
                          {/* <td><i className="badge badge-danger" >X</i></td> */}
                          <td>
                            <img src={item.images} style={{ width: "100px", height: "80px" }} />
                          </td>
                          <td>{item.title}</td>
                          <td>${item.price} </td>
                          <td></td>
                          <td></td>
                        </tr>
                      );
                    })}
                  <tr>
                    {/* <td colSpan="5">Total Carts</td>
                                <td>{Number(TotalCart).toLocaleString('en-US')} $</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>

        <Col lg="4">
          <div>
            <div className="mb-5">
              <h5 className="text-center">Cart Totals</h5>
              <Form className="p-4 bg-ghost-white rounded">
                <Form.Control plaintext readOnly defaultValue="Subtotals:" className="border-bottom my-3" />
                <Form.Control plaintext readOnly defaultValue="Totals:" className="border-bottom" />
                <Form.Check type="checkbox" id="default-checkbox" label="Shipping & taxes calculated at checkout" className="my-4" />
                <Button variant="primary" type="submit" style={{ width: "100%" }}>
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
