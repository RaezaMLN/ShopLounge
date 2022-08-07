import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddCart, DeleteCart, DeleteSingleCart } from "../Redux/Actions/cartAction";
import * as types from "../Redux/Types/cartType";
import GreyContainer from "../Components/GreyContainer";
import Input from "../Components/Input";

export default function ShoppingCart() {
  const [filterData, setFilterData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cartProducts);
  const [cartId, setCartId] = useState();

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

  // let count = 0;
  // carts &&
  //   carts.length &&
  //   carts.forEach((item, index) => {
  //     console.log(
  //       "find",
  //       carts.filter((e) => e.id === item.id)
  //     );
  //   });

  useEffect(() => {
    let holdArr = [];
    carts.forEach((item, index) => {
      const checkData = holdArr.find((e) => e.id === item.id);
      if (checkData === undefined) {
        holdArr.push({ ...item, quantity: 1, totalPrice: item.price });
      }
      if (checkData) {
        const calculate = {
          ...checkData,
          totalPrice: checkData.totalPrice + item.price,
          quantity: checkData.quantity + 1,
        };
        const newData = holdArr.map((el, i) => {
          if (el.id === calculate.id) {
            return calculate;
          } else {
            return el;
          }
        });

        holdArr = newData;
      }
    });
    setFilterData(holdArr);
    
  }, [carts]);

// useEffect(() => {
//   if(carts.length === 0) {
//     filterData.length = 0
//   }
  
// })
  

 
  // console.log("cart", carts);

  // console.log("filterData", filterData);

  const handleDelete = (e) => {
    dispatch(DeleteCart(e));
  };

  const handleMinClick = (e) => {
  dispatch(DeleteSingleCart(e))
  
          
  }

  const handlePlusClick = (e) => {
    dispatch(AddCart(e));
  };

 
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
                  {filterData &&
                    filterData.length > 0 &&
                    filterData.map((item, key) => {
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
                            <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "F0EFF2" }}>
                              <button className="btn border border-1" onClick={() => handleMinClick(item.id)}>
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button className="btn border border-1" onClick={() => handlePlusClick(item)}>
                                +
                              </button>
                            </div>
                          </td>
                          <td>{formatter.format(item.totalPrice)} </td>
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
