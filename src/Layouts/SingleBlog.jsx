import React from 'react';
import { Row, Col, Figure } from "react-bootstrap";
import { WiDirectionLeft, WiDirectionRight } from "react-icons/wi";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

import singleblog from '../img/singleblog.png';
import singleblog2 from '../img/singleblog2.png';
import singleblog3 from '../img/singleblog3.png'
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
                            <Figure.Caption className="d-flex gap-2">
                                <div>
                                    <img src={Vector} /> 
                                    <Button btnTitle="Surf Auxion" btnStyle={{ backgroundColor:"#FFE7F9", color:"#151875", border:"none" }}/>
                                </div>
                                <div>
                                    <img src={calend} />
                                    <Button btnTitle="Aug 09 2020" btnStyle={{ backgroundColor:"#FFECE2", color:"#151875", border:"none" }}/>
                                </div>
                            </Figure.Caption>
                        </Figure>

                        <h3 style={{color:"#151875"}}>Mauris at orci non vulputate diam tincidunt nec.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                        <div style={{bacgroundColor:"#FAFAFB", borderLeftColor:"1px solid #FC45A0"}}>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”
                        </div>

                        <div className='d-flex gap-2'>
                            <img src={singleblog2}/>
                            <img src={singleblog3}/>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                        
                        <div>
                            Card
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                        
                        <div className="d-flex gap-3 ">
                            <div style={{width:"30px", height:"30px", background:"#5625DF", color:"white"}}     className="rounded-circle text-center"><RiFacebookFill /></div>
                            <div style={{width:"30px", height:"30px", background:"#FF27B7", color:"white"}} className="rounded-circle text-center"><RiInstagramFill/></div>
                            <div style={{width:"30px", height:"30px", background:"#37DAF3", color:"white"}} className="rounded-circle text-center"><RiTwitterFill /></div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <WiDirectionLeft /> Previous Post 
                            </div>
                            <div className='d-flex'>
                                <WiDirectionRight style={{fontSize:"30px"}} /> Next Post
                            </div>
                        </div>
                        
                    </Col>
                    <Col sm="4">

                    </Col>
                </Row>
            </div>
            

        </div>
    )
}