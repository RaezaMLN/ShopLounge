import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../Components/Button";

import chair1 from "../../src/img/chair1.png";
import shirt from "../../src/img/shirt.png";

export default function Shipping() {
  return (
    <Container>
      <Row className="my-5">
        <Col className="align-items-start josefin Midnight-Blue fs-1 my-5">
          <h1>ShopLounge Demo</h1>
        </Col>
      </Row>
      <Row>
        <Col className="align-items-start josefin Midnight-Blue my-5">
          <h3>ShopLounge Demo</h3>
          <h5>Cart/ Information/ Shipping/ Payment</h5>
        </Col>
      </Row>
      <div className="d-flex">
        <div className="w-75 me-5 soft-Blue-Yonder rounded-2">
          <Form className="p-4">
            <div className="d-flex flex-row justify-content-between mb-5">
              <h4 className="josefin fw-bold Midnight-Blue fs-4">Contact Information</h4>
              <h5 className="color-wildBlueYonder fs-5 lato">
                Already have an account?
                <a href="#" className="text-decoration-none ms-2 color-wildBlueYonder">
                  Log in
                </a>
              </h5>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email or mobile phone number" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep me up to date on news and excluive offers" className="color-wildBlueYonder lato" />
            </Form.Group>
            <br />
            <br />
            <h4 className="josefin fw-bold Midnight-Blue mb-5">Shopping address</h4>

            <Form.Group className="mb-5 d-flex" controlId="formBasicTextt">
              <Form.Control type="text" placeholder="First name (optional)" className="color-wildBlueYonder lato border-0 border-bottom border-3 me-3 bg-transparent" />
              <Form.Control type="text" placeholder="Last name" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicText">
              <Form.Control type="text" placeholder="Address" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicText">
              <Form.Control type="text" placeholder="Appaetnentment,suit,e.t.c (optinal)" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicText">
              <Form.Control type="text" placeholder="City" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" />
            </Form.Group>
            <Form.Group className="mb-5 d-flex" controlId="formBasicText">
              <Form.Control type="text" placeholder="Bangladesh" className="color-wildBlueYonder lato border-0 border-bottom border-3 me-3 bg-transparent" />
              <Form.Control type="number" placeholder="Postal Code" className="color-wildBlueYonder lato border-0 border-bottom border-3 bg-transparent" />
            </Form.Group>
            <br />

            <Button btnClass={"btn text-light josefin my-5"} btnTitle={"Continue Shopping"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Form>
        </div>
        <div className="w-50">
          <div className="d-flex josefin w-100 border-3 border-bottom">
            <img src={shirt} alt="" className="me-3 my-3" />
            <div className="my-3">
              <h5 className="fw-bold">Ut diam consequat</h5>
              <div className="d-flex w-100">
                <h5 className="me-5  Wild-Blue-Yonder">Color Brown</h5>
                <h5 className="ms-5">$32.00</h5>
              </div>
              <h5 className=" Wild-Blue-Yonder">Size XL</h5>
            </div>
          </div>
          <div className="d-flex josefin w-100 border-3 border-bottom">
            <img src={shirt} alt="" className="me-3 my-3" />
            <div className="my-3">
              <h5 className="fw-bold">Ut diam consequat</h5>
              <div className="d-flex w-100">
                <h5 className="me-5  Wild-Blue-Yonder">Color Brown</h5>
                <h5 className="ms-5">$32.00</h5>
              </div>
              <h5 className=" Wild-Blue-Yonder">Size XL</h5>
            </div>
          </div>
          <div className="d-flex josefin w-100 border-3 border-bottom">
            <img src={shirt} alt="" className="me-3 my-3" />
            <div className="my-3">
              <h5 className="fw-bold">Ut diam consequat</h5>
              <div className="d-flex w-100">
                <h5 className="me-5  Wild-Blue-Yonder">Color Brown</h5>
                <h5 className="ms-5">$32.00</h5>
              </div>
              <h5 className=" Wild-Blue-Yonder">Size XL</h5>
            </div>
          </div>
          <div className="d-flex josefin w-100 border-3 border-bottom">
            <img src={shirt} alt="" className="me-3 my-3" />
            <div className="my-3">
              <h5 className="fw-bold">Ut diam consequat</h5>
              <div className="d-flex w-100">
                <h5 className="me-5  Wild-Blue-Yonder">Color Brown</h5>
                <h5 className="ms-5">$32.00</h5>
              </div>
              <h5 className=" Wild-Blue-Yonder">Size XL</h5>
            </div>
          </div>
          <div className="d-flex josefin w-100 border-3 border-bottom">
            <img src={shirt} alt="" className="me-3 my-3" />
            <div className="my-3">
              <h5 className="fw-bold">Ut diam consequat</h5>
              <div className="d-flex w-100">
                <h5 className="me-5  Wild-Blue-Yonder">Color Brown</h5>
                <h5 className="ms-5">$32.00</h5>
              </div>
              <h5 className=" Wild-Blue-Yonder">Size XL</h5>
            </div>
          </div>

          <div className="soft-Blue-Yonder rounded-2">
            <div className="p-4">
              <div className="d-flex border-3 border-bottom justify-content-between lato Midnight-Blue fs-5 fw-bold mb-5">
                <h4>Subtotals:</h4>
                <h4>‎£219.00</h4>
              </div>
              <div className="d-flex border-3 border-bottom justify-content-between lato Midnight-Blue fs-5 fw-bold mb-5">
                <h4>Totals:</h4>
                <h4>‎£325.00</h4>
              </div>
              <h5 className="lato fs-5 color-wildBlueYonder">Shipping & taxes calculated at checkout</h5>
              <Button btnClass={"btn text-light lato w-100 py-2 fs-5 my-3 rounded-2"} btnTitle={"Proceed To Checkout"} btnStyle={{ backgroundColor: "#19D16F" }} />
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
