import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Form, Container, Row, Col } from "react-bootstrap";
import Button from "../Components/Button";
import GreyContainer from "../Components/GreyContainer";
import sponsor from "../../src/img/sponsor.png";

// import { useSelector, useDispatch } from "react-redux";

import { login, cleanState } from "../Redux/Actions/userAction";

export default function Login() {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  // const [users, setUsers] = useState();
  // useEffect(() => {
  //   dispatch(login());
  // }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.error) {
      alert(user.error);
      dispatch(cleanState());
      setUserData({
        ...userData,
        password: "",
      });
    }
    if (user.success) {
      navigate("/");
    }
  }, [user.loading]);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(login(userData));
  };

  return (
    <Container fluid>
      <GreyContainer titlePage={"My Account"} />
      <br />
      <br />
      <div>
        <Form className="d-flex flex-column align-items-center">
          <Form.Label className="fs-2 text-dark fw-bold josefin">Login</Form.Label>
          <Form.Label className="fs-5 Wild-Blue-Yonder lato mb-3">Please login using account detail bellow.</Form.Label>

          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter email" name="email" value={userData.email || ""} onChange={handleChange} className="fs-5 Wild-Blue-Yonder lato" />
          </Form.Group>

          <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" name="password" value={userData.password || ""} onChange={handleChange} className="fs-5 Wild-Blue-Yonder lato" />
          </Form.Group>
          <a href="#" className="text-decoration-none Wild-Blue-Yonder lato fs-5 ">
            Forgot your password?
          </a>
          <Button btnClass={"btn text-light josefin my-4"} btnTitle={"Sign In"} btnStyle={{ backgroundColor: "#fb2e86", padding: "7px 165px" }} onClick={handleSubmit} />
          <a href="#" className="text-decoration-none Wild-Blue-Yonder lato fs-5 ">
            Don’t have an Account?Create account
          </a>
        </Form>
        <br />
        <br />

        <Row className="justify-content-md-center my-5">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <img src={sponsor} />
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <br />
        <br />
      </div>
    </Container>
  );
}
