import Swal from "sweetalert2";
import React, { useState } from "react";
import "animate.css";
import { Container, Form } from "react-bootstrap";
import GreyContainer from "../Components/GreyContainer";
import Button from "../Components/Button";

import sponsor from "../img/sponsor.png";

export default function Faq() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
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
    <Container fluid>
      <GreyContainer titlePage={"FAQ"} />

      <Container className="d-flex my-5">
        <div className="josefin d-flex flex-column justify-content-between w-50">
          <h1 className="Midnight-Blue" style={{ fontSize: "36px" }}>
            Generel Information
          </h1>
          <div>
            <h3 className="Midnight-Blue" style={{ fontSize: "17px" }}>
              Eu dictumst cum at sed euismood condimentum?
            </h3>
            <h4 className="color-wildBlueYonder" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h4>
          </div>
          <div>
            <h3 className="Midnight-Blue" style={{ fontSize: "17px" }}>
              Magna bibendum est fermentum eros.
            </h3>
            <h4 className="color-wildBlueYonder" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h4>
          </div>
          <div>
            <h3 className="Midnight-Blue" style={{ fontSize: "17px" }}>
              Odio muskana hak eris conseekin sceleton?
            </h3>
            <h4 className="color-wildBlueYonder" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h4>
          </div>
          <div>
            <h3 className="Midnight-Blue" style={{ fontSize: "17px" }}>
              Elit id blandit sabara boi velit gua mara?
            </h3>
            <h4 className="color-wildBlueYonder" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h4>
          </div>
        </div>
        <div className="w-50 soft-Blue-Yonder px-5">
          <h3 className="Midnight-Blue josefin my-5" style={{ fontSize: "24px" }}>
            Ask a Question
          </h3>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group controlId="formBasicTextt">
              <Form.Control type="text" placeholder="Your name*" className="color-wildBlueYonder lato" required />
              <Form.Control type="text" placeholder="Subject*" className="color-wildBlueYonder lato my-5" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Type Your Message*" className="py-5" required />
            </Form.Group>
            <Button btnClass={"btn text-light josefin my-5 w-25"} btnTitle={"Send Mail"} btnStyle={{ backgroundColor: "#fb2e86" }} btnType={"submit"} />
          </Form>
        </div>
      </Container>
      <br />
      <Container className="d-flex flex-column align-items-center my-5">
        <img src={sponsor} alt="" />
      </Container>
    </Container>
  );
}
