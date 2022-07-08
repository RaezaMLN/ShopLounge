import React, { useState, useEffect} from "react";


import { Card, Row, Col } from "react-bootstrap";
import { RiStarFill } from "react-icons/ri"
import { BsHeart } from "react-icons/bs"

import GreyContainer from "../Components/GreyContainer";
import sponsor from "../img/sponsor.png";
import sofa from "../img/sofa.png";


export default function ShopGrid() {
    



  return (
    <div>
        <GreyContainer titlePage={"Shope Grid Default"}/>

        <div className="container my-5" >
            <div >
                <Card className="my-5 p-4">
                    <Row>
                        <Col sm={4}>
                            <Card.Img variant="top" src={sofa} />
                        </Col>
                        <Col sm={8}>
                            <Card.Body>
                                <Card.Title className="d-flex gap-3">
                                    Title
                                    <div className="d-flex align-item-center gap-1 py-2">
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                    </div>
                                </Card.Title>
                                <Card.Text className="d-flex">
                                    ${Math.round((62/100)*(Number(item.price)))}<span className="clr2 mx-3"> ${item.price}</span>
                                </Card.Text>
                                <Card.Text>
                                    <h1>Color</h1> 
                                    {item.description}
                                </Card.Text>
                                <Card.Text className="d-flex gap-4">
                                    Add to cart
                                    <BsHeart/>
                                </Card.Text>
                                <Card.Text >
                                    Category:
                                    Tag:
                                    Share: 
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                      
            </div>
        </div>

        <Row className="justify-content-md-center my-5">
            <Col md="auto">
            <img src={sponsor} />
            </Col>
        </Row>
    </div>
  );
}
