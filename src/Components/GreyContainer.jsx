import React from "react";

export default function GreyContainer({ titlePage }) {
  return (
    <div className="d-flex align-item-center px-5 py-5" style={{ backgroundColor: "#F6F5FF", height: "200px" }}>
      <div className="container">
        <h1 className="josefin Midnight-Blue fw-bold" style={{ fontSize: "36px" }}>
          {titlePage}
        </h1>
        <span className="lato" style={{fontSize:"16px"}}>
          Home . Pages . <span className="Wild-Strawberry">{titlePage}</span>
        </span>
      </div>
    </div>
  );
}
