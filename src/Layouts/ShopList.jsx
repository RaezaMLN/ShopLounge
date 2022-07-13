import React, { useState, useEffect} from "react";
import { useSelector , useDispatch} from 'react-redux';


import { Card, Row, Col } from "react-bootstrap";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri"
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs"

import GreyContainer from "../Components/GreyContainer";
import {getProduct} from "../Redux/Actions/productAction"
import sponsor from "../img/sponsor.png";
import ShopHeader from "../Components/ShopHeader"


export default function ShopGrid() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product);
    const [products, setProducts] = useState() 
    useEffect(()=>{
        dispatch(getProduct());
    },[])
    useEffect(()=>{
        const filterProduct = product.list.filter((item, index )=>index<12)
        setProducts(filterProduct)
    },[product])
    
    console.log("see product", products)



  return (
    <div>
        <GreyContainer titlePage={"Shop List"}/>

        <div className="container my-5" >
            <ShopHeader/>
            <div >
                {
                    products &&
                    products.length > 0 &&
                    products.map((item, index)=>{
                        return(
                            <Card className="my-5 p-4">
                                <Row>
                                    <Col sm={4}>
                                        <Card.Img variant="top" src={item.category.image} />
                                    </Col>
                                    <Col sm={8}>
                                        <Card.Body>
                                            <Card.Title className="d-flex gap-3">
                                                {item.title}
                                                <div className="d-flex align-item-center gap-1 py-2">
                                                    <div id="shape1" className="bg-butterCup"></div>
                                                    <div id="shape2" className="bg-wildStrawberry"></div>
                                                    <div id="shape3" className="bg-lightSlateBlue"></div>
                                                </div>
                                            </Card.Title>
                                            <Card.Text className="d-flex">
                                                ${Math.round((62/100)*(Number(item.price)))}<span className="clr2 mx-3"> ${item.price}</span>
                                                <div>
                                                    <RiStarFill style={{color:"#FFC416"}}/>
                                                    <RiStarFill style={{color:"#FFC416"}}/>
                                                    <RiStarFill style={{color:"#FFC416"}}/>
                                                    <RiStarHalfFill style={{color:"#FFC416"}}/>
                                                    <RiStarLine style={{color:"#FFC416"}}/>
                                                </div>
                                            </Card.Text>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                            <Card.Text className="d-flex gap-4">
                                                <BsCart2 />
                                                <BsHeart/>
                                                <BsZoomIn/>
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        );
                    })
                }
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
