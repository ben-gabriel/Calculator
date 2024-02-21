import React from "react";

function Button({ onClick, value, className }) {
  return (
    <button
      className={`rounded-md py-2 ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default Button;