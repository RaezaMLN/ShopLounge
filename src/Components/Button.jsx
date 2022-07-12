import React from "react";
import "../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
function Button({ btnVariant, btnStyle, btnClass, btnTitle }) {
  return (
    <div>
      <Button variant={btnVariant} style={btnStyle} className={btnClass}>
        {btnTitle}
      </Button>
    </div>
  );
}

export default Button;
