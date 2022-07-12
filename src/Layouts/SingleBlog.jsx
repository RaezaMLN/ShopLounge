import React from 'react';
import { Row, Col, Figure } from "react-bootstrap";


import singleblog from '../img/singleblog.png';
import Vector from '../img/Vector.png';
import calend from '../img/calend.png';
import GreyContainer from '../Components/GreyContainer';
import Button from '../Components/Button';

export default function SingleBlog(){
    return(
        <div>
            <GreyContainer titlePage={"Product Details"}/>
            <div className="container">
                <Row >
                    <Col sm="8">
                    <Figure>
                        <Figure.Image
                            // width={171}
                            // height={180}
                            alt="sigle-blog"
                            src={singleblog}
                        />
                        <Figure.Caption>
                        <img src={Vector} /> 
                        <Button btnTitle="Surf Auxion" btnStyle={{ backgroundColor:"#FFE7F9", color:"#151875", border:"none" }}/>
                        <img src={calend} />
                        </Figure.Caption>
                        </Figure>
                        
                        
                        
                    </Col>
                    <Col sm="4">

                    </Col>
                </Row>
            </div>
            

        </div>
    )
}