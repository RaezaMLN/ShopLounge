import React from "react";

export default function GreyContainer({ titlePage }) {
  return (
    <div className="d-flex align-item-center px-5 py-5" style={{ backgroundColor: "#F6F5FF", height: "200px" }}>
      <div className="container">
        <h1 className="josefin">{titlePage}</h1>
        <span className="lato">
          Home . Pages . <span className="color-pink">{titlePage}</span>
        </span>
      </div>
    </div>
  );
}
