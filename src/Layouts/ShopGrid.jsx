import React, { useState, useEffect} from "react";
import { useSelector , useDispatch} from 'react-redux';
import { Card, Row, Col, Form } from "react-bootstrap";


import GreyContainer from "../Components/GreyContainer";
import {getProduct} from "../Redux/Actions/productAction"
import CarouselShop from "../Components/CarouselShop";
import sponsor from "../img/sponsor.png";
import ShopHeader from "../Components/ShopHeader"
import { MdDeleteForever, MdViewModule, MdViewList } from "react-icons/md";



export default function ShopGrid() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product);
    const [products, setProducts] = useState() 
    useEffect(()=>{
        dispatch(getProduct());
    },[])

    useEffect(()=>{
        const filterProduct = product.list.filter((item, index )=>index<36)
        setProducts(filterProduct)
    },[product])
    
    console.log("see product", products)



  return (
    <div>
        <GreyContainer titlePage={"Shope Grid Default"}/>
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

        <div className="container my-5" >
            <ShopHeader/>
            <div className='d-flex flex-wrap gap-5 my-5' >
                {
                    products &&
                    products.length > 0 &&
                    products.map((item, index)=>{
                        return <CarouselShop listImage={item.images} title={item.title} price={item.price} />;
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
