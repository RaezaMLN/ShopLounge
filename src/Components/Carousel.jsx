import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

const Carousel = ({ listImage, title, price, changeBackground }) => {
  const [showImage, setShowImage] = useState(listImage[0]);
  console.log("image", listImage);
  console.log("title", title);

  return (
    <Card style={{ width: "18rem" }} className="m-3 border border-5">
      <Card.Img variant="top" src={showImage} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-evenly">
        <Card.Title className="lato fw-bold Wild-Strawberry" style={{ fontSize: "18px" }}>
          {title}
        </Card.Title>
        <div className="w-100 d-flex flex-row justify-content-center gap-2">
          <div className="rounded-3 my-2" style={{ backgroundColor: "#05E6B7", width: "25px", height: "8px", cursor: "pointer" }} onClick={() => setShowImage(listImage[0])}></div>
          <div className="rounded-3 my-2" style={{ backgroundColor: "#F701A8", width: "25px", height: "8px", cursor: "pointer" }} onClick={() => setShowImage(listImage[1])}></div>
          <div className="rounded-3 my-2" style={{ backgroundColor: "#00009D", width: "28px", height: "8px", cursor: "pointer" }} onClick={() => setShowImage(listImage[2])}></div>
        </div>
        <Card.Text className="Midnight-Blue josefin m-0" style={{ fontSize: "14px" }}>
          Code - Y523201
        </Card.Text>
        <Card.Text className="Midnight-Blue lato" style={{ fontSize: "14px" }}>
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Carousel;
