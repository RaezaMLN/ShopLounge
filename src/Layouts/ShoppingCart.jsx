import React, { Component } from 'react';

import GreyContainer from '../Components/GreyContainer';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function ShoppingCart(){
    
    
    return(
        <div>
            <GreyContainer titlePage={"Shopping Cart"}/>
            <Row className="container p-5">
                <Col lg="8">
                    <div className="row">
                        <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* {
                                ListCart.map((item,key)=>{
                                    return(
                                        <tr key={key}>    
                                        <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
                                        <td>{item.name}</td>
                                        <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
                                        <td>{item.price} $</td>
                                        <td>
                                                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                                <span className="btn btn-info">{item.quantity}</span>
                                                <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                                        </td>
                                        <td>{ TotalPrice(item.price,item.quantity)} $</td>
                                    </tr>
                                    )
                                })
                                    
                            }
                            <tr>
                                <td colSpan="5">Total Carts</td>
                                <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                            </tr> */}
                            </tbody>
                        
                        </table>
                        </div>
                    </div>
                </Col>

                <Col lg="4">
                    <div>
                        <div className='mb-5'>
                            <h5 className="text-center">Cart Totals</h5>
                            <Form className='p-4 bg-ghost-white rounded'>
                                <Form.Control plaintext readOnly defaultValue="Subtotals:" className="border-bottom my-3"/>
                                <Form.Control plaintext readOnly defaultValue="Totals:" className="border-bottom" />
                                <Form.Check type="checkbox" id="default-checkbox" label="Shipping & taxes calculated at checkout" className='my-4'/>
                                <Button variant="primary" type="submit" style={{width:"100%"}}>Proceed To Checkout</Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
            

            
        </div>
        
    )
}

