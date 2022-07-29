import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs";

const CarouselShop = ({ listImage, title, price, description, onClickCart, onClickTitle }) => {
  const [showImage, setShowImage] = useState(listImage[0]);

  useEffect(() => {
    const updateImage = listImage;
    if (updateImage) {
      setShowImage(listImage[0]);
    }
  }, [listImage]);

  return (
    <Card className="my-5 p-4">
    <Row>
        <Col sm={4}>
        <Card.Img variant="top" src={showImage} />
        </Col>
        <Col sm={8}>
        <Card.Body>
            <Card.Title className="d-flex gap-3" onClick={onClickTitle} style={{cursor:"pointer"}}>
            {title}
            <div className="d-flex align-item-center gap-1 py-2">
                <div id="shape1" className="bg-butterCup" onClick={() => setShowImage(listImage[0])}></div>
                <div id="shape2" className="bg-wildStrawberry" onClick={() => setShowImage(listImage[1])} ></div>
                <div id="shape3" className="bg-lightSlateBlue" onClick={() => setShowImage(listImage[2])} ></div>
            </div>
            </Card.Title>
            <Card.Text className="d-flex">
            ${Math.round((62 / 100) * Number(price))}
            <span className="clr2 mx-3">
                <del className="Wild-Strawberry"> ${price}</del>
            </span>
            <div>
                <RiStarFill style={{ color: "#FFC416" }} />
                <RiStarFill style={{ color: "#FFC416" }} />
                <RiStarFill style={{ color: "#FFC416" }} />
                <RiStarHalfFill style={{ color: "#FFC416" }} />
                <RiStarLine style={{ color: "#FFC416" }} />
            </div>
            </Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="d-flex gap-4">
            <BsCart2 onClick={onClickCart} style={{ cursor: "pointer" }} />
            <BsHeart />
            <BsZoomIn />
            </Card.Text>
        </Card.Body>
        </Col>
    </Row>
    </Card>
  );
};

export default CarouselShop;
