import React, { useState, useEffect} from "react";
import { useSelector , useDispatch} from 'react-redux';


import { Card, Form, Row, Col, Tab, ListGroup } from "react-bootstrap";
import { MdViewModule, MdViewList } from "react-icons/md";


import GreyContainer from "../Components/GreyContainer";
import {getProduct} from "../Redux/Actions/productAction"
import sponsor from "../img/sponsor.png";
import Carousel, {CarouselItem} from "../Components/Carousel";
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
                            <Form.Label >Per Page:</Form.Label>
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
