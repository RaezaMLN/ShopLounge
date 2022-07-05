import React from "react";
import { Button } from "react-bootstrap";

function CustumButton({ btnVariant, btnStyle, btnClass, btnTitle }) {
  return (
    <div>
      <Button variant={btnVariant} style={btnStyle} className={btnClass}>{btnTitle}</Button>
    </div>
  );
}

export default CustumButton;
