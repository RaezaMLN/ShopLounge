import React, { useState, useEffect } from "react";
import { Button, Offcanvas, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import {AiOutlineSearch} from 'react-icons/ai'
import { ImSpinner2, ImSearch } from 'react-icons/im'
import { BsCart2 } from 'react-icons/bs'

import CustumButton from "./Button";

export default function Header(){

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

    return (
        <Navbar key="lg" expand="lg" >
          <Container fluid className="container">
            <Navbar.Brand href="#">Hekto</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Hekto
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                    <NavDropdown
                        title="Home"
                        id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#action1">Pages</Nav.Link>
                    <Nav.Link href="#action2">Products</Nav.Link>
                    <Nav.Link href="#action2">Blog</Nav.Link>
                    <Nav.Link href="#action2">Shop</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                    
                    </Nav>

                    <Form className="d-flex me-5">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        {
                            <Button 
                                variant="danger"
                                disabled={isLoading}
                                onClick={!isLoading ? handleClick : null}
                                style={{width:"55px"}}
                            >
                                {isLoading ? <ImSpinner2 className="loaderIcon"/> : <ImSearch/>}    
                            </Button>
                        }
                    </Form>
                    <h1></h1>
                    <div className="d-flex gap-3">
                        {/* <CustumButton btnTitle='Sign Up' btnClass='clr2bg color-white border-0 rounded' btnStyle={{height:"2.3rem"}}/> */}
                        <CustumButton btnTitle='Sign In' btnClass='clr2bg color-white border-0 rounded' btnStyle={{height:"2.3rem"}} />
                    </div>
                    <div className="d-flex mx-4 justify-content-center  align-items-center gap-1">
                        <BsCart2 />
                    </div>

                </Offcanvas.Body>
                
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      );
}