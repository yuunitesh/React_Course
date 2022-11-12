import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`my-3 py-2 px-4 rounded-md bg-violet-600 text-white ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
