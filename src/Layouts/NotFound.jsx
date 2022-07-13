import React from "react";
import GreyContainer from "../Components/GreyContainer";
import notFound from "../img/notFound.png";
import { Button, Row, Col } from "react-bootstrap";
import sponsor from "../img/sponsor.png"

export default function NotFound(){
    return(
        <div>
            <GreyContainer titlePage="404 Not Found" />
            <div className="d-flex justify-content-center">
                <img src={notFound} alt="Not Found" />
            </div>
            <div className="d-flex justify-content-center mb-5"><Button>Back To Home</Button></div>

            <Row className="justify-content-md-center my-5">
                <Col md="auto">
                <img src={sponsor} />
                </Col>
            </Row>
        </div>

    )
}