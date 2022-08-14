import { Container, Row, Col, Form } from "react-bootstrap";
import GreyContainer from "../Components/GreyContainer";
import Button from "../Components/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import React, { useState } from "react";


// icon 
import { BsCalendar4Week } from "react-icons/bs";
import {FaPenNib} from "react-icons/fa"

import "animate.css";
// images
import icon1 from "../img/Vector.png";
import icon2 from "../img/calend.png";
import blog1 from "../img/blog1.png";
import blog2 from "../img/blog2.png";
import blog3 from "../img/blog3.png";
import bloga from "../img/bloga.png";
import blogb from "../img/blogb.png";
import blogc from "../img/blogc.png";
import blogd from "../img/blogd.png";
import rate from "../img/rate.png";
import sm from "../img/sm.png";
import sapien from "../img/sapien.png";
import conva from "../img/conva.png";
import sponsor from "../img/sponsor.png";
import post1 from "../img/post1.png";
import post2 from "../img/post2.png";
import post3 from "../img/post3.png";
import post4 from "../img/post4.png";
import offer1 from "../img/offer1.png";
import offer2 from "../img/offer2.png";
import offer3 from "../img/offer3.png";
import offer4 from "../img/offer4.png";

import { FiSearch } from "react-icons/fi";

export default function SingleBlog() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      Swal.fire({
        title: "Your Comment Has Been Send",
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
      <GreyContainer titlePage={"Single Blog"} />
      <Container className="d-flex">
        {/* Main Content  */}
        <div className="w-75 me-5">
          <img src={blog1} alt="" />
          <div className="d-flex my-3">
            <div className="d-flex me-3">
                <FaPenNib className="Wild-Strawberry me-2"/>
                <h5 style={{ fontSize: "12px" }}>Saber Ali</h5>
              </div>
              <div className="d-flex">
                <BsCalendar4Week className="bg-warning opacity-50 me-2" />
                <h5 style={{ fontSize: "12px" }}>7 july 2022</h5>
              </div>
            </div>
              

          <h3>Mauris at orci non vulputate diam tincidunt nec.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum
            at.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
          </p>

          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</p>

          <div>
            <img src={blog2} alt="" />
            <img src={blog3} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
          </p>
          <div>
            <div className="d-flex flex-row">
              <div>
                <img src={bloga} alt="" />
                <div>
                  <p className="josefin fw-bold fs-3 my-3">Quam sed</p>
                  <div className="d-flex align-items-center">
                    <p className="josefin Midnight-Blue">$32.00</p>
                    <p className="mx-3 Wild-Strawberry josefin">
                      <del>$56.00</del>
                    </p>
                    <img src={rate} alt="" className="w-25 mb-3" />
                  </div>
                </div>
              </div>
              <div>
                <img src={blogb} alt="" />
                <div>
                  <p className="josefin fw-bold fs-3 my-3">Tristique sed</p>
                  <div className="d-flex align-items-center">
                    <p className="josefin Midnight-Blue">$32.00</p>
                    <p className="mx-3 Wild-Strawberry josefin">
                      <del>$56.00</del>
                    </p>
                    <img src={rate} alt="" className="w-25 mb-3" />
                  </div>
                </div>
              </div>
              <div>
                <img src={blogc} alt="" />
                <div>
                  <p className="josefin fw-bold fs-3 my-3">A etiam</p>
                  <div className="d-flex align-items-center">
                    <p className="josefin Midnight-Blue">$32.00</p>
                    <p className="mx-3 Wild-Strawberry josefin">
                      <del>$56.00</del>
                    </p>
                    <img src={rate} alt="" className="w-25 mb-3" />
                  </div>
                </div>
              </div>
              <div>
                <img src={blogd} alt="" />
                <div>
                  <p className="josefin fw-bold fs-3 my-3">Mi nisi</p>
                  <div className="d-flex align-items-center">
                    <p className="josefin Midnight-Blue">$32.00</p>
                    <p className="mx-3 Wild-Strawberry josefin">
                      <del>$56.00</del>
                    </p>
                    <img src={rate} alt="" className="w-25 mb-3" />
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
            </p>
            <Row className="my-5">
              <Col></Col>
              <Col className="d-flex justify-content-center">
                <img src={sm} alt="" />
              </Col>
              <Col></Col>
            </Row>

            <div className="d-flex justify-content-between my-5" style={{ backgroundColor: "#F7F8FB" }}>
              <div className="d-flex align-items-center lato color-wildBlueYonder">
                <AiOutlineArrowLeft />
                <h5 style={{ fontSize: "16.15px" }} className="mt-1">
                  previous post
                </h5>
              </div>
              <div className="d-flex align-items-center lato color-wildBlueYonder">
                <h5 style={{ fontSize: "16.15px" }} className="mt-1">
                  next post
                </h5>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <Row>
            <Col xs={7} className="border border-5 rounded-3 shadow-lg d-flex align-items-center p-3 mb-5 my-5 w-75">
              <img src={sapien} alt="" className="me-3" />
              <div>
                <div className="d-flex">
                  <h5 className="me-5 fs-5">Sapien ac</h5>
                  <p>Jan 09 2020</p>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col xs={7} className="border border-5 rounded-3 shadow-lg d-flex align-items-center p-3 w-75">
              <img src={conva} alt="" className="me-3" />
              <div>
                <div className="d-flex">
                  <h5 className="me-5 fs-5">Augue conva</h5>
                  <p>Aug 18 2020</p>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />

          <Form className="w-75" onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group className="mb-5 d-flex" controlId="formBasicTextt">
              <Form.Control type="text" placeholder="Your name*" className="color-wildBlueYonder lato me-3" required />
              <Form.Control type="email" placeholder="Write your email*" className="color-wildBlueYonder lato" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Write your comment*" className="py-5" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." required />
            </Form.Group>
            <Button btnType={"submit"} btnClass={"btn text-light josefin my-5 w-100"} btnTitle={"Continue Shopping"} btnStyle={{ backgroundColor: "#fb2e86" }} />
          </Form>
        </div>

        {/* Side  */}
        <div className="w-75">
          <h2 className="josefin Midnight-Blue fw-bold" style={{ fontSize: "22px" }}>
            Search
          </h2>
          <Form className="mb-5">
            <Form.Group className="d-flex flex-row align-items-center rounded-3 border border-3">
              <Form.Control type="text" placeholder="Search For Posts" className="color-wildBlueYonder lato border-0 opacity-25" />
              <FiSearch className="opacity-25 mx-3" />
            </Form.Group>
          </Form>

          {/* Categories  */}
          <div>
            <h2 className="josefin Midnight-Blue fw-bold my-3" style={{ fontSize: "22px" }}>
              Categories
            </h2>
            <div className="d-flex josefin lightSlateBlue mb-5" style={{ fontSize: "14px" }}>
              <div className="d-flex flex-column me-3">
                <div>Hobbies (14)</div>
                <div className="my-4">Women (21)</div>
                <div>Women (21)</div>
              </div>
              <div className="d-flex flex-column">
                <div>Women (21)</div>
                <div className="my-4">Women (21)</div>
                <div>Women (21)</div>
              </div>
            </div>
          </div>

          {/* Recent Post  */}
          <div>
            <h2 className="josefin Midnight-Blue fw-bold my-3" style={{ fontSize: "22px" }}>
              Recent Post
            </h2>
            <div className="d-flex flex-column justify-content-start josefin lightSlateBlue">
              <div>
                <div className="d-flex my-3">
                  <img src={post1} alt="" className="me-3 w-auto" />
                  <div>
                    <h5 style={{ fontSize: "14px" }}>It is a long established fact</h5>
                    <h5 className="lato opacity-75" style={{ fontSize: "11px" }}>
                      17 July 2022
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex my-3">
                  <img src={post2} alt="" className="me-3 w-auto" />
                  <div>
                    <h5 style={{ fontSize: "14px" }}>It is a long established fact</h5>
                    <h5 className="lato opacity-75" style={{ fontSize: "11px" }}>
                      17 July 2022
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex my-3">
                  <img src={post3} alt="" className="me-3 w-auto" />
                  <div>
                    <h5 style={{ fontSize: "14px" }}>It is a long established fact</h5>
                    <h5 className="lato opacity-75" style={{ fontSize: "11px" }}>
                      17 July 2022
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex my-3">
                  <img src={post4} alt="" className="me-3 w-auto" />
                  <div>
                    <h5 style={{ fontSize: "14px" }}>It is a long established fact</h5>
                    <h5 className="lato opacity-75" style={{ fontSize: "11px" }}>
                      17 July 2022
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sale Product  */}
          <div>
            <h2 className="josefin Midnight-Blue fw-bold my-3" style={{ fontSize: "22px" }}>
              Sale Product
            </h2>
            <div className="d-flex flex-column justify-content-start josefin lightSlateBlue">
              <div>
                <div className="d-flex my-3">
                  <img src={post1} alt="" className="me-3 w-auto" />
                  <div>
                    <h5 style={{ fontSize: "14px" }}>It is a long established fact</h5>
                    <h5 className="lato opacity-75" style={{ fontSize: "11px" }}>
                      17 July 2022
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex my-3">
                  <img src={post2} alt="" className="me-3 w-auto" />
                  <div>
                    <h5 style={{ fontSize: "14px" }}>It is a long established fact</h5>
                    <h5 className="lato opacity-75" style={{ fontSize: "11px" }}>
                      17 July 2022
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex my-3">
                  <img src={post3} alt="" className="me-3 w-auto" />
                  <div>
                    <h5 style={{ fontSize: "14px" }}>It is a long established fact</h5>
                    <h5 className="lato opacity-75" style={{ fontSize: "11px" }}>
                      17 July 2022
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offer Product  */}
          <div>
            <h2 className="josefin Midnight-Blue fw-bold my-3" style={{ fontSize: "22px" }}>
              Offer Product
            </h2>
            <div className="d-flex justify-content-start mb-3">
              <div className="d-flex flex-column align-items-center me-3">
                <img src={offer1} />
                <h4 className="lato Midnight-Blue" style={{ fontSize: "14px" }}>
                  Duis lectus est.
                </h4>
                <h5 className="lato Midnight-Blue" style={{ fontSize: "12px" }}>
                  $12.00 - $15.00
                </h5>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img src={offer2} />
                <h4 className="lato Midnight-Blue" style={{ fontSize: "14px" }}>
                  Sed placerat.
                </h4>
                <h5 className="lato Midnight-Blue" style={{ fontSize: "12px" }}>
                  $12.00 - $15.00
                </h5>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="d-flex flex-column align-items-center me-3">
                <img src={offer3} />
                <h4 className="lato Midnight-Blue" style={{ fontSize: "14px" }}>
                  Netus proin.
                </h4>
                <h5 className="lato Midnight-Blue" style={{ fontSize: "12px" }}>
                  $12.00 - $15.00
                </h5>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img src={offer4} />
                <h4 className="lato Midnight-Blue" style={{ fontSize: "14px" }}>
                  Platea in.
                </h4>
                <h5 className="lato Midnight-Blue" style={{ fontSize: "12px" }}>
                  $12.00 - $15.00
                </h5>
              </div>
            </div>
          </div>

          {/* Follow  */}
          <div>
            <h2 className="josefin Midnight-Blue fw-bold my-4" style={{ fontSize: "22px" }}>
              Follow
            </h2>
            <div>
              <img src={sm} className="mb-5" />
            </div>
          </div>

          {/* Tags  */}
          <h2 className="josefin Midnight-Blue fw-bold my-3" style={{ fontSize: "22px" }}>
            Tags
          </h2>
          <div>
            <a href="#" className="lato Midnight-Blue" style={{ fontSize: "16px" }}>
              General
            </a>
            <a href="#" className="lato Midnight-Blue mx-5" style={{ fontSize: "16px" }}>
              Atsanil
            </a>
            <a href="#" className="lato Midnight-Blue" style={{ fontSize: "16px" }}>
              Insas.
            </a>
          </div>
          <div className="my-3">
            <a href="#" className="lato Midnight-Blue" style={{ fontSize: "16px" }}>
              Bibsaas.
            </a>
            <a href="#" className="lato Midnight-Blue mx-5" style={{ fontSize: "16px" }}>
              Nulla..
            </a>
          </div>
        </div>
      </Container>
      <Container className="d-flex flex-column align-items-center">
        <img src={sponsor} alt="" />
      </Container>
    </Container>
  );
}
