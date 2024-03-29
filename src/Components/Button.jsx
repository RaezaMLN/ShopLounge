import React from "react";
import "../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
function CButton({ btnVariant, btnStyle, btnClass, btnTitle, eventClick, btnType }) {
  return (
    <div>
      <Button variant={btnVariant} style={btnStyle} className={btnClass} onClick={eventClick} type={btnType}>
        {btnTitle}
      </Button>
    </div>
  );
}

export default CButton;
