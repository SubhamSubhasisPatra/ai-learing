import React from "react";

import "./Button.css";

const Button = (props) => {
  console.log(props.children);
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
