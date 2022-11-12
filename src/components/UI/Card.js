import React from "react";

const Card = (props) => {
  return (
    <div className={`bg-white mx-6 my-3 rounded-xl ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
