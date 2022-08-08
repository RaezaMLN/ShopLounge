import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddCart, DeleteCart, DeleteSingleCart, DeleteAllCart } from "../Redux/Actions/cartAction";
import * as types from "../Redux/Types/cartType";
import GreyContainer from "../Components/GreyContainer";
import Input from "../Components/Input";

export default function ShoppingCart() {
  const [filterData, setFilterData] = useState();
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
                            <td style={{fontSize:"12px", backgroundColor:"#F0EFF2"}}>
                            <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "F0EFF2" }}>
                              <button className="btn border border-1" onClick={() => handleMinClick(item.id)}>
                                -
                              </button>
                              <span className="mx-3">{item.quantity}</span>
                              <button className="btn border border-1" onClick={() => handlePlusClick(item)}>
                                +
                              </button>
                            </div>
                          </td></td>
                          
                          <td>{formatter.format(item.totalPrice)} </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="d-flex flex-row josefin text-white justify-content-between my-5">
                      <div><Button className="border-0" style={{backgroundColor:"#ec42a2"}}  onClick={() => {navigate("/shop-grid")}}>Update Curt</Button></div>
                      <div><Button className="border-0" style={{backgroundColor:"#ec42a2"}}  onClick={() =>{dispatch(DeleteAllCart())}}>Clear Curt</Button></div>
                    </div>
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
                  className="w-100 lato border-0"
                  style={{backgroundColor:"#19D16F"}}
                  type="submit"
                
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
