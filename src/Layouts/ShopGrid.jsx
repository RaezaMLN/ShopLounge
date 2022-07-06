import React from "react";

import { Card, Form, Row, Col } from "react-bootstrap";
import { MdViewModule, MdViewList } from "react-icons/md";

import Header from "../Components/Header";
import GreyContainer from "../Components/GreyContainer";


export default function ShopeGrid() {
  return (
    <div>
        <Header/>
        <GreyContainer titlePage={"Shope Grid Default"}/>

        <div className="container" >
        
            <Row>
                <Col>
                    <Card style={{ border:"none"}}>
                        <Card.Body>
                            <Card.Title>Ecommerce Acceories & Fashion item </Card.Title>
                            <Card.Subtitle><small className="text-muted">About 9,620 results (0.62 seconds)</small></Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Form className="d-flex">
                        <Form.Group as={Row} >
                            <Form.Label column sm="4">Per Page:</Form.Label>
                            <Col sm="6">
                            <Form.Control type="number" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm="5">Sort By:</Form.Label>
                            <Col sm="7">
                                <Form.Select aria-label="Default select example">
                                    <option>Best Match</option>
                                    <option value="1">By ...</option>
                                    <option value="2">By ...</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="5">
                                View:
                                <MdViewModule/>
                                <MdViewList/>
                            </Form.Label>
                            <Col sm="7">
                        
                            <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Card style={{ width: '18rem', border:"none"}}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Vestibulum magna laoreet</Card.Title>
                    <Card.Text className="text-center">$26.00  <span className="color-pink">$42.00</span></Card.Text>
                </Card.Body>
                </Card>
        </div>
    </div>
  );
}
