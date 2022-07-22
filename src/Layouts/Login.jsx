import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
// import Button from "../Components/Button";
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
  const [validated, setValidated] = useState(false);
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

  const handleSubmit = (event) => {
    dispatch(login(userData));
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  console.log("user", user);
  return (
    <Container fluid>
      <GreyContainer titlePage={"My Account"} />
      <br />
      <br />
      <div>
        <Form noValidate validated={validated} className="d-flex flex-column align-items-center">
          <Form.Label className="text-dark fw-bold josefin" style={{ fontSize: "32px" }}>
            Login
          </Form.Label>
          <Form.Label className=" Wild-Blue-Yonder lato mb-4" style={{ fontSize: "17px" }}>
            Please login using account detail bellow.
          </Form.Label>

          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" name="email" value={userData.email || ""} onChange={handleChange} className="fs-5 Wild-Blue-Yonder lato" required />
          </Form.Group>

          <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" name="password" value={userData.password || ""} onChange={handleChange} className="fs-5 Wild-Blue-Yonder lato" required />
          </Form.Group>

          <a href="#" className="text-decoration-none Wild-Blue-Yonder lato mb-3 " style={{ fontSize: "17px", margin: "0px 200px 0px 0px" }}>
            Forgot your password?
          </a>
          <Button variant="primary" className="flex justify-content-center align-items-center w-25 border border-0" onClick={handleSubmit} style={{ width: "100px", backgroundColor: "#ec42a2" }}>
            {user.loading ? (
              <Spinner animation="border" role="status" variant="light" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Sign In"
            )}
          </Button>
          <a href="#" className="text-decoration-none Wild-Blue-Yonder lato mt-4 " style={{ fontSize: "17px" }}>
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
