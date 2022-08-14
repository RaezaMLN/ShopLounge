import React from 'react';
import sponsor from "../img/sponsor.png";
import { Row, Col } from "react-bootstrap";


export default function Brand(){
    return(
        <Row className="justify-content-md-center my-5">
            <Col md="auto">
                <img src={sponsor} />
            </Col>
        </Row>
    )
}