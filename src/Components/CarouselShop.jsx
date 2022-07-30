import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs";

const CarouselShop = ({ listImage, title, price, onClickCart, onClickTitle }) => {
  const [showImage, setShowImage] = useState(listImage[0]);
  // console.log("image", listImage);

  useEffect(() => {
    const updateImage = listImage;
    if (updateImage) {
      setShowImage(listImage[0]);
    }
  }, [listImage]);

  return (
    <Card className="my-3" style={{ width: "270px", border: "none" }}>
      <div className="container-image">
        <Card.Img variant="top" src={showImage} />
        <div className="overlay overlay-shop">
          <div className="overlay-icon-shop position-relative">
            <BsCart2 class="position-absolute top-50 start-50 translate-middle" onClick={onClickCart} style={{ cursor: "pointer" }} />
          </div>
          <div className="overlay-icon-shop position-relative">
            <BsZoomIn class="position-absolute top-50 start-50 translate-middle" />
          </div>
          <div className="overlay-icon-shop position-relative">
            <BsHeart class="position-absolute top-50 start-50 translate-middle" />
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="text-center lato" onClick={onClickTitle} style={{ cursor: "pointer" }}>
          {title}
        </Card.Title>
        <div className="d-flex justify-content-center gap-1 ">
          <div id="shape1" className="bg-butterCup" onClick={() => setShowImage(listImage[0])}></div>
          <div id="shape2" className="bg-wildStrawberry" onClick={() => setShowImage(listImage[1])}></div>
          <div id="shape3" className="bg-lightSlateBlue" onClick={() => setShowImage(listImage[2])}></div>
        </div>
        <Card.Text className="text-center">
          ${Math.round((62 / 100) * Number(price))}
          <del className="Wild-Strawberry mx-3"> ${price}</del>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CarouselShop;
