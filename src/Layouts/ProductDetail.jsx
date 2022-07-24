import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


import { Card, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import { RiStarFill, RiInstagramFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri"
import { BsHeart } from "react-icons/bs"

import GreyContainer from "../Components/GreyContainer";
import sponsor from "../img/sponsor.png";
import room3 from "../img/room3.png";
import { Description, Additional, Review, Video } from "../Components/Sonnet"


export default function ProductDetail() {
    const products = useSelector((state) => state.product);
    const [detailProduct, setDetailProduct]= useState({})
    const param = useParams();
    console.log("see products",products.list)
    
    useEffect(()=>{
        if(products?.list){
            console.log("see id",products.list.id === param.id)
            // const detail = products.list.find(e => e.id=== param.id )
        //     if(products.list.id === param.id){
                // setDetailProduct(detail)
        //     }
        }
    },[]);

    // console.log(detailProduct)

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
        <div style={{ backgroundColor: "#F6F5FF", height:"500px"}} className="d-flex gap-3">
            <div onClick={()=>{<Description />}} className="border-bottom">Description</div>
            <div onClick={()=>{<Additional />}} className="border-bottom">Additional Info</div>
            <div onClick={()=>{<Review />}} className="border-bottom">Reviews</div>
            <div onClick={()=>{<Video />}} className="border-bottom">Video</div>

        
        </div>  
        <Row className="justify-content-md-center my-5">
            <Col md="auto">
            <img src={sponsor} />
            </Col>
        </Row>
    </div>
  );
}
