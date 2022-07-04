import React from "react";

function Button({ title, btnClass, to }) {
  return (
    <div>
      <button type="submit" className={btnClass}>
        {title}
      </button>
    </div>
  );
}

export default Button;
