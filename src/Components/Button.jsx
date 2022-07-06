import React from "react";
import "../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Button({ btnVariant, btnStyle, btnClass, btnTitle }) {
  return (
    <div>
      <button variant={btnVariant} style={btnStyle} className={btnClass}>
        {btnTitle}
      </button>
    </div>
  );
}

export default Button;
