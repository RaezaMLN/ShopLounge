import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { MdViewModule, MdViewList } from "react-icons/md";

export default function ShopHeader(){
    return(
        <Row>
            <Col sm="4">
                <Card style={{ border:"none"}}>
                    <Card.Body className="p-0">
                        <Card.Title>Ecommerce Acceories & Fashion item </Card.Title>
                        <Card.Subtitle><small className="text-muted">About 9,620 results (0.62 seconds)</small></Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm="8">
                <Form className="d-flex gap-5 justify-content-end" >
                    <Form.Group className="d-flex gap-2" >
                        <Form.Label>Per Page:</Form.Label>
                        <Form.Control type="number" style={{width:"100px"}}/>
                    </Form.Group>
                    
                    <Form.Group className="d-flex gap-2"  >
                        <Form.Label style={{width:"85px"}}>Sort By:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Best Match</option>
                            <option value="1">By ...</option>
                            <option value="2">By ...</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="d-flex gap-2" >
                        <Form.Label >
                            View:
                            <MdViewModule/>
                            <MdViewList/>
                        </Form.Label>
                        <Form.Control type="text" placeholder="" style={{width:"100px"}}/>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}