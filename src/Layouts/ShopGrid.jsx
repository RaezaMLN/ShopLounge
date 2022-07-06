import React, { useState, useEffect} from "react";
import { useSelector , useDispatch} from 'react-redux';


import { Card, Form, Row, Col, Tab, ListGroup } from "react-bootstrap";
import { MdViewModule, MdViewList } from "react-icons/md";


import GreyContainer from "../Components/GreyContainer";
import {getProduct} from "../Redux/Actions/productAction"
import sponsor from "../img/sponsor.png";

export default function ShopeGrid() {
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
            <div className='d-flex flex-wrap gap-5 my-5' >
                {
                    products &&
                    products.length > 0 &&
                    products.map((item, index)=>{
                        return(
                            <Card style={{ width: '340px', border:"none"}} >
                                <Card.Img variant="top" src={item.category.image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{item.title}</Card.Title>
                                    <div className="d-flex justify-content-center gap-1 ">
                                        <div id="shape1" className="bg-butterCup"></div>
                                        <div id="shape2" className="bg-wildStrawberry"></div>
                                        <div id="shape3" className="bg-lightSlateBlue"></div>
                                    </div>
                                    <Card.Text className="text-center">${Math.round((62/100)*(Number(item.price)))}<span className="clr2 mx-3"> ${item.price}</span></Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        </div>

        <Row className="justify-content-md-center">
            <Col md="auto">
            <img src={sponsor} />
            </Col>
        </Row>
    </div>
  );
}
