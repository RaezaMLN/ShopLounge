import React from "react";

function Input({ inpValue, inpClass, inpType, inpName, to }) {
  return (
    <div>
      <input type={inpType} className={inpClass} name={inpName} value={inpValue}></input>
    </div>
  );
}

export default Input;
