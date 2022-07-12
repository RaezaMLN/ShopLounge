import React, { useState, useEffect} from "react";


import { Card, Row, Col, Tabs, Tab } from "react-bootstrap";
import { RiStarFill, RiInstagramFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri"
import { BsHeart } from "react-icons/bs"

import GreyContainer from "../Components/GreyContainer";
import sponsor from "../img/sponsor.png";
import room3 from "../img/room3.png";
import { Description, Additional, Review, Video } from "../Components/Sonnet"


export default function ProductDetail() {
    



  return (
    <div>
        <GreyContainer titlePage={"Product Details"}/>

        <div className="container my-5" >
            <div >
                <Card className="my-5 p-4">
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex flex-column gap-4">
                                    <Card.Img variant="top" src={room3} className="rounded" />
                                    <Card.Img variant="top" src={room3} className="rounded" />
                                    <Card.Img variant="top" src={room3} className="rounded" />
                                </Col>
                                <Col>
                                    <Card.Img variant="top" src={room3} className="rounded" style={{width:"375px", height:"100%"}}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>
                                    Title 
                                    <div className="d-flex align-item-center gap-1 py-2">
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        <RiStarFill style={{color:"#FFC416"}}/>
                                        (22)
                                    </div>
                                </Card.Title>
                                <Card.Text className="d-flex">
                                    ${Math.round((62/100)*(Number(34)))}<span className="clr2 mx-3"> ${34}</span>
                                </Card.Text>
                                <Card.Text>
                                    <h4>Color</h4> 
                                    lorem djjhdjdfhjfhj
                                </Card.Text>
                                <Card.Text className="d-flex gap-4">
                                    <h6>Add to cart</h6>
                                    <BsHeart/>
                                </Card.Text>
                                <div>
                                    <h5>Category:</h5>
                                </div>
                                <div>
                                    <h5>Tags</h5>
                                </div>
                                <div className="d-flex gap-4">
                                    <h5>Share</h5>
                                    <div style={{width:"30px", height:"30px", background:"#151875", color:"white"}} className="rounded-circle text-center"><RiFacebookFill /></div>
                                    <div style={{width:"30px", height:"30px", background:"#FB2E86", color:"white"}} className="rounded-circle text-center"><RiInstagramFill/></div>
                                    <div style={{width:"30px", height:"30px", background:"#151875", color:"white"}} className="rounded-circle text-center"><RiTwitterFill /></div>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>     
            </div>
        </div>
        <div style={{ backgroundColor: "#F6F5FF", height:"500px"}}>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 container pt-5"
            >
                <Tab eventKey="description" title="Description">
                    <Description />
                </Tab>
                <Tab eventKey="additionalInfo" title="Additional Info">
                    <Additional/>
                </Tab>
                <Tab eventKey="reviews" title="Reviews" >
                    <Review/>
                </Tab>
                <Tab eventKey="video" title="Video" >
                    <Video/>
                </Tab>
            </Tabs>
        </div>
        <Row className="justify-content-md-center my-5">
            <Col md="auto">
            <img src={sponsor} />
            </Col>
        </Row>
    </div>
  );
}