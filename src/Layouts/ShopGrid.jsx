import React, { useState, useEffect} from "react";
import { useSelector , useDispatch} from 'react-redux';


import { Card, Row, Col, OverlayTrigger } from "react-bootstrap";


import GreyContainer from "../Components/GreyContainer";
import {getProduct} from "../Redux/Actions/productAction"
import sponsor from "../img/sponsor.png";
import ShopHeader from "../Components/ShopHeader"
import { MdDeleteForever } from "react-icons/md";
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs"


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
        <GreyContainer titlePage={"Shope Grid Default"}/>

        <div className="container my-5" >
            <ShopHeader/>
            <div className='d-flex flex-wrap gap-5 my-5' >
                {
                    products &&
                    products.length > 0 &&
                    products.map((item, index)=>{
                        return(
                            <Card style={{ width: '270px', border:"none"}} >
                                
                                <div className="container-image">
                                    <Card.Img variant="top" src={item.category.image}/>
                                    <div className="overlay ">
                                        <div className="overlay-icon position-relative"> <BsCart2 class="position-absolute top-50 start-50 translate-middle"/></div>
                                        <div className="overlay-icon position-relative"> <BsZoomIn class="position-absolute top-50 start-50 translate-middle"/></div>
                                        <div className="overlay-icon position-relative"> <BsHeart  class="position-absolute top-50 start-50 translate-middle"/></div>
                                    </div>
                                </div> 
                                
                                
                                
                                <Card.Body>
                                    <Card.Title className='text-center'>{item.title}</Card.Title>
                                    <div className="d-flex justify-content-center gap-1 ">
                                        <div id="shape1" className="bg-butterCup"></div>
                                        <div id="shape2" className="bg-wildStrawberry"></div>
                                        <div id="shape3" className="bg-lightSlateBlue"></div>
                                    </div>
                                    <Card.Text className="text-center">${Math.round((62/100)*(Number(item.price)))}<del className="Wild-Strawberry mx-3"> ${item.price}</del></Card.Text>
                                </Card.Body>
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
