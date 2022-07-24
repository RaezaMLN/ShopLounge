import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsCart2, BsHeart, BsZoomIn } from "react-icons/bs";

const Carousel = ({ listImage, title, price, onClickCart, onClickTitle }) => {
  const [showImage, setShowImage] = useState(listImage[0]);

  useEffect(() => {
    const updateImage = listImage;
    if (updateImage) {
      setShowImage(listImage[0]);
    }
  }, [listImage]);

  return (
    <Card style={{ width: "18rem" }} className="m-3 border border-5">
      <div className="container-image">
        <Card.Img variant="top" src={showImage} />
        <div className="overlay overlay-home">
          <div className="overlay-icon-home position-relative">
            {" "}
            <BsCart2 class="position-absolute top-50 start-50 translate-middle" onClick={onClickCart} style={{ cursor: "pointer" }} />
          </div>
          <div className="overlay-icon-home position-relative">
            {" "}
            <BsZoomIn class="position-absolute top-50 start-50 translate-middle" style={{ cursor: "pointer" }} />
          </div>
          <div className="overlay-icon-home position-relative">
            {" "}
            <BsHeart class="position-absolute top-50 start-50 translate-middle" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <Card.Body className="d-flex flex-column align-items-center justify-content-evenly cardBody">
        <Card.Title className="lato fw-bold Wild-Strawberry" style={{ fontSize: "18px", cursor: "pointer" }} onClick={onClickTitle}>
          {title}
        </Card.Title>
        <div className="w-100 d-flex flex-row justify-content-center gap-2">
          <div className="rounded-3 my-2" style={{ backgroundColor: "#05E6B7", width: "25px", height: "8px", cursor: "pointer" }} onClick={() => setShowImage(listImage[0])}></div>
          <div className="rounded-3 my-2" style={{ backgroundColor: "#F701A8", width: "25px", height: "8px", cursor: "pointer" }} onClick={() => setShowImage(listImage[1])}></div>
          <div className="rounded-3 my-2 cardButton Bg-Midnight-Blue " style={{ width: "28px", height: "8px", cursor: "pointer" }} onClick={() => setShowImage(listImage[2])}></div>
        </div>
        <Card.Text className="Midnight-Blue josefin m-0 cardText" style={{ fontSize: "14px" }}>
          Code - Y523201
        </Card.Text>
        <Card.Text className="Midnight-Blue lato cardText" style={{ fontSize: "14px" }}>
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Carousel;
