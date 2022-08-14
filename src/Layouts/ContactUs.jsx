import Swal from "sweetalert2";
import React, { useState } from "react";
import "animate.css";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";

import Brand from "../Components/Brand";
import GreyContainer from "../Components/GreyContainer";
import ContactUsImg from "../img/ContactUs.png";

export default function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      Swal.fire({
        title: "Your Mail Has Been Send",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
    setValidated(true);
  };
  return (
    <div>
      <GreyContainer titlePage={"Contact Us"} />
      <div className="container my-5 py-5">
        <Row>
          <Col lg="6">
            <h3 className="josefin Midnight-Blue fw-bold" style={{ fontSize: "36px" }}>Information About us</h3>
            <p className="lato Wild-Blue-Yonder" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum
              quam.
            </p>

            <div className="d-flex gap-2 my-3">
              <div style={{ width: "15px", height: "15px", backgroundColor: "#5625DF", borderRadius: "50%" }}></div>
              <div style={{ width: "15px", height: "15px", backgroundColor: "#FF27B7", borderRadius: "50%" }}></div>
              <div style={{ width: "15px", height: "15px", backgroundColor: "#37DAF3", borderRadius: "50%" }}></div>
            </div>
            <div className="my-5">
              <br />
              <br />
            </div>

            <h3 className="josefin Midnight-Blue fw-bold" style={{ fontSize: "36px" }}>Get In Touch</h3>
            <p className="lato Wild-Blue-Yonder" style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control required type="text" placeholder="Your name*" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                  <InputGroup hasValidation>
                    <Form.Control type="email" placeholder="Email" aria-describedby="inputGroupPrepend" required />
                    <Form.Control.Feedback type="invalid">Please choose a email.</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="Subject*" required />
                  <Form.Control.Feedback type="invalid">Please provide a subject.</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Control as="textarea" placeholder="Type Your Messege*" required />
                  <Form.Control.Feedback type="invalid">Please Type Your Messege.</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Send Mail</Button>
            </Form>
          </Col>

          <Col lg="6">
            <div className="ps-5">
              <h3 className="josefin Midnight-Blue fw-bold" style={{ fontSize: "36px" }}>Contact Way</h3>
              <Row className="my-3">
                <Col>
                  <div className="d-flex gap-2 align-items-center">
                    <div style={{ width: "25px", height: "25px", backgroundColor: "#5625DF", borderRadius: "50%" }}></div>
                    <span className="lato Wild-Blue-Yonder" style={{ fontSize: "16px" }}>
                      Tel: 877-67-88-99 <br />
                      E-Mail: shop@store.com
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex gap-2 align-items-center">
                    <div style={{ width: "25px", height: "25px", backgroundColor: "#FF27B7", borderRadius: "50%" }}></div>
                    <span className="lato Wild-Blue-Yonder" style={{ fontSize: "16px" }}>                      Support Forum <br />
                      For over 24hr
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex gap-2 align-items-center">
                    <div style={{ width: "25px", height: "25px", backgroundColor: "#FFB265", borderRadius: "50%" }}></div>
                    <span className="lato Wild-Blue-Yonder" style={{ fontSize: "16px" }}>                      20 Margaret st, London <br />
                      Great britain, 3NM98-LK
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex gap-2 align-items-center">
                    <div style={{ width: "25px", height: "25px", backgroundColor: "#1BE982", borderRadius: "50%" }}></div>
                    <span className="lato Wild-Blue-Yonder" style={{ fontSize: "16px" }}>                      Free standard shipping <br />
                      on all orders.
                    </span>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="mt-5">
              <img src={ContactUsImg} style={{ width: "550px" }} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
