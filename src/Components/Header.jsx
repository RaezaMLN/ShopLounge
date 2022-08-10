import React, { useState, useEffect } from "react";
import { Button, Offcanvas, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


// import {AiOutlineSearch} from 'react-icons/ai'
import { ImSpinner2, ImSearch } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";

import CustumButton from "./Button";

export default function Header() {
  const navigate = useNavigate();

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  const handleClick = () => setLoading(true);

  const loginData = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  
  const listCart = useSelector((state) => state.cart.cartProducts);

  return (
    <Navbar key="lg" expand="lg" className="sticky-top bg-light">
      <Container fluid className="container">
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Hekto
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                Hekto
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 gap-4 align-item-center">
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>Home</Link>
              <Link to={"/blogPage"} style={{ textDecoration: "none", color: "black" }}>Blog</Link>
              <Link to={"/shop-grid"} style={{ textDecoration: "none", color: "black" }}>Shop</Link>
              <Link to={"/contact-us"} style={{ textDecoration: "none", color: "black" }}>Contact</Link>
              <Link to={"/about"} style={{ textDecoration: "none", color: "black" }}>About</Link>
              <Link to={"/faq"} style={{ textDecoration: "none", color: "black" }}>FAQ</Link>
            </Nav>

            {/* <Form className="d-flex me-5">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              {
                <Button variant="danger" disabled={isLoading} onClick={!isLoading ? handleClick : null} style={{ width: "55px" }}>
                  {isLoading ? <ImSpinner2 className="loaderIcon" /> : <ImSearch />}
                </Button>
              }
            </Form> */}
            <h1></h1>
            <div className="d-flex gap-3">
            {
              loginData? (
                <CustumButton btnTitle="Log Out" btnClass="clr2bg color-white border-0 rounded" btnStyle={{ height: "2.3rem" }} eventClick={logout} />
                  
              ):(
                <CustumButton btnTitle="Sign In" btnClass="clr2bg color-white border-0 rounded" btnStyle={{ height: "2.3rem" }} eventClick={() => {navigate("/login")}} />
              )
            }
            </div>
            <div className="d-flex mx-4 justify-content-center  align-items-center gap-1">
              <Link to={"/shopping-cart"} style={{ textDecoration: "none", color: "black" }}>
                <BsCart2 />
              </Link>
              <div>{listCart && listCart.length}</div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
