import React from "react";
import {Form} from 'react-bootstrap'

function Input({ inpValue, inpClass, inpType, inpName, inpPlaceholder, to }) {
  return (
    <div>
      <Form.Control type={inpType} className={inpClass} name={inpName} value={inpValue} placeholder={inpPlaceholder} />
    </div>
  );
}

export default Input;
