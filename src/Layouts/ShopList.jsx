import React, { useState, useEffect} from "react";
import { useSelector , useDispatch} from 'react-redux';


import { Card, Row, Col, Form } from "react-bootstrap";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri"
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs"
import { MdDeleteForever, MdViewModule, MdViewList } from "react-icons/md";

import GreyContainer from "../Components/GreyContainer";
import {getProduct} from "../Redux/Actions/productAction"
import Brand from "../Components/Brand"


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
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
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
        <Brand/>
    </div>
  );
}
