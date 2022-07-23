import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import GreyContainer from "../Components/GreyContainer";
import Button from "../Components/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

// images
import icon1 from "../img/Vector.png";
import icon2 from "../img/calend.png";
import blog1 from "../img/blog1.png";
import blogx from "../img/blogx.png";
import blogy from "../img/blogy.png";

import sm from "../img/sm.png";

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

export default function BlogPage() {
  return (
    <Container fluid>
      <GreyContainer titlePage={"Blog Page"} />
      <Container className="d-flex">
        {/* Main Content  */}
        <div className="w-75 me-5">
          <img src={blog1} alt="" />
          <div className="d-flex my-3">
            <div className="d-flex me-3">
              <img src={icon1} className="mx-3" />
              <h5 style={{ fontSize: "12px" }}>Saber Ali</h5>
            </div>
            <div className="d-flex">
              <img src={icon2} className="mx-3" />
              <h5 style={{ fontSize: "12px" }}>7 july 2022</h5>
            </div>
          </div>

          <h3 className="josefin fw-bold Midnight-Blue" style={{ fontSize: "30px" }}>
            Mauris at orci non vulputate diam tincidunt nec.
          </h3>
          <p className="color-wildBlueYonder lato my-3" style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum
            at.
          </p>
          <Link to={"/singleBlog"} className="text-decoration-none lato Midnight-Blue fw-bold" style={{ fontSize: "18px" }}>
            Read More
          </Link>
          <br />
          <br />
          {/* second content  */}

          <img src={blogx} alt="" />
          <div className="d-flex my-3">
            <div className="d-flex me-3">
              <img src={icon1} className="mx-3" />
              <h5 style={{ fontSize: "12px" }}>Saber Ali</h5>
            </div>
            <div className="d-flex">
              <img src={icon2} className="mx-3" />
              <h5 style={{ fontSize: "12px" }}>7 july 2022</h5>
            </div>
          </div>

          <h3 className="josefin fw-bold Midnight-Blue" style={{ fontSize: "30px" }}>
            Aenean vitae in aliquam ultrices lectus. Etiam.
          </h3>
          <p className="color-wildBlueYonder lato my-3" style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum
            at.
          </p>
          <Link to={"/singleBlog"} className="text-decoration-none lato Midnight-Blue fw-bold" style={{ fontSize: "18px" }}>
            Read More
          </Link>

          {/* Third Content  */}
          <img src={blogy} alt="" />
          <div className="d-flex my-3">
            <div className="d-flex me-3">
              <img src={icon1} className="mx-3" />
              <h5 style={{ fontSize: "12px" }}>Saber Ali</h5>
            </div>
            <div className="d-flex">
              <img src={icon2} className="mx-3" />
              <h5 style={{ fontSize: "12px" }}>7 july 2022</h5>
            </div>
          </div>

          <h3 className="josefin fw-bold Midnight-Blue" style={{ fontSize: "30px" }}>
            Sit nam congue feugiat nisl, mauris amet nisi.
          </h3>
          <p className="color-wildBlueYonder lato my-3" style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum
            at.
          </p>
          <Link to={"/singleBlog"} className="text-decoration-none lato Midnight-Blue fw-bold" style={{ fontSize: "18px" }}>
            Read More
          </Link>
          <br />
          <br />
          <br />
          <div className="d-flex flex-row justify-content-center mb-5">
            <div className="border border-1 text-secondary lato px-3 mx-3 texthover lightSlateBlue " style={{ fontSize: "16px", cursor: "pointer" }}>
              <span className="texthvr ">1</span>
            </div>
            <div className="border border-1 text-secondary lato px-3 mx-3 texthover lightSlateBlue " style={{ fontSize: "16px", cursor: "pointer" }}>
              <span className="texthvr ">2</span>
            </div>
            <div className="border border-1 text-secondary lato px-3 mx-3 texthover lightSlateBlue " style={{ fontSize: "16px", cursor: "pointer" }}>
              <span className="texthvr ">3</span>
            </div>
            <div className="border border-1 text-secondary lato px-3 mx-3 texthover lightSlateBlue " style={{ fontSize: "16px", cursor: "pointer" }}>
              <span className="texthvr ">4</span>
            </div>
          </div>
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
