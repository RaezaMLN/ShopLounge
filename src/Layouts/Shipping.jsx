import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {DeleteAllCart } from "../Redux/Actions/cartAction";



import "animate.css";
import * as types from "../Redux/Types/cartType";
import GreyContainer from "../Components/GreyContainer";
import Input from "../Components/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../Components/Button";
import chair1 from "../../src/img/chair1.png";
import shirt from "../../src/img/shirt.png";

export default function Shipping() {


  const [filterData, setFilterData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cartProducts);
  console.log("cartData",carts)

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

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      navigate("/order-completed");
      dispatch(DeleteAllCart())
    }
    setValidated(true);
   
  };

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


  const handleClick = () => {
    
  };

console.log("carts", carts)

  return (
    <Container>
      <Row className="my-5">
        <Col className="align-items-start josefin Midnight-Blue fs-1 my-5">
          <h1>ShopLounge Demo</h1>
        </Col>
      </Row>
      <Row>
        <GreyContainer titlePage={"ShopLounge Demo"} />
      </Row>
      <div className="d-flex">
        <div className="w-75 me-5 soft-Blue-Yonder rounded-2">
          <Form className="p-4" onSubmit={handleSubmit} noValidate validated={validated}>
            <div className="d-flex flex-row justify-content-between mb-5">
              <h4 className="josefin fw-bold Midnight-Blue" style={{ fontSize: "18px" }}>
                Contact Information
              </h4>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control style={{ fontSize: "14px" }} type="email" placeholder="Email or mobile phone number" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check style={{ fontSize: "14px" }} type="checkbox" label="Keep me up to date on news and excluive offers" className="color-wildBlueYonder lato" required />
            </Form.Group>
            <br />
            <br />
            <h4 className="josefin fw-bold Midnight-Blue mb-5" style={{ fontSize: "18px" }}>
              Shopping address
            </h4>

            <Form.Group className="mb-5 d-flex" controlId="formBasicTextt">
              <Form.Control style={{ fontSize: "14px" }} type="text" placeholder="First name (optional)" className="color-wildBlueYonder lato border-0 border-bottom border-3 me-3 bg-transparent" required />
              <Form.Control style={{ fontSize: "14px" }} type="text" placeholder="Last name" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicText">
              <Form.Control style={{ fontSize: "14px" }} type="text" placeholder="Address" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicText">
              <Form.Control style={{ fontSize: "14px" }} type="text" placeholder="Appaetnentment,suit,e.t.c (optinal)" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicText">
              <Form.Control type="text" placeholder="City" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" required />
            </Form.Group>
            <Form.Group className="mb-5 d-flex" controlId="formBasicText">
              <Form.Control style={{ fontSize: "14px" }} type="text" placeholder="Bangladesh" className="color-wildBlueYonder lato border-0 border-bottom border-3 me-3 bg-transparent" required />
              <Form.Control style={{ fontSize: "14px" }} type="number" placeholder="Postal Code" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" required />
            </Form.Group>
            <br />

            <Button eventClick={() => handleClick()} btnClass={"btn text-light josefin my-5"} btnTitle={"Continue Shipping"} btnStyle={{ backgroundColor: "#fb2e86" }} btnType={"submit"} />
          </Form>
        </div>
        <div className="w-50">
          {filterData &&
            filterData.length > 0 &&
            filterData.map((item, key) => {
              // console.log("see item", item);
              return (
                <div className="d-flex josefin w-100 border-3 border-bottom align-items-center">
                  <img src={item.images} alt="" className="me-3 my-3" style={{ width: "100px", height: "100px" }} />
                  <div className="my-3 w-100">
                    <h5 className="fw-bold" style={{ fontSize: "14px" }}>
                      {item.title}
                    </h5>
                    <div className="d-flex w-100">
                      <h5 className="me-5  Wild-Blue-Yonder " style={{ fontSize: "14px" }}>
                        {item.category.name}
                      </h5>
                    </div>
                    <h5 className=" Wild-Blue-Yonder" style={{ fontSize: "14px" }}>
                      Size XL
                    </h5>
                  </div>
                  <h5 className="ms-5 Midnight-Blue" style={{ fontSize: "14px" }}>
                    ${item.totalPrice}
                  </h5>
                </div>
              );
            })}

          <div className="soft-Blue-Yonder rounded-2">
            <div className="p-4">
              <div className="d-flex border-3 border-bottom justify-content-between lato Midnight-Blue fs-5 fw-bold mb-5">
                <h4 style={{ fontSize: "18px" }}>Subtotals:</h4>
                <div>{formatter.format(countTotal)}</div>
              </div>
              <div className="d-flex border-3 border-bottom justify-content-between lato Midnight-Blue fs-5 fw-bold mb-5">
                <h4 style={{ fontSize: "18px" }}>Totals:</h4>
                <div>{formatter.format(countTotal + countTotal * (15 / 100))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </Container>
  );
}
