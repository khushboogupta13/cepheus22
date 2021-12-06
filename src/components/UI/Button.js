import React, { Component }  from 'react';
import classes from "./Button.module.css";

const Button = (props) => {
  const style = {
    borderRadius: "20px",
    width: "10rem",
    padding: "0.8rem",
    margin: "3px",
    color: props.color,
    backgroundColor:props.bgColor,
    border: `2px solid ${props.borderColor}`
  };

  if (props.sz === "small") {
    style.width="7rem";
    style.padding="0.5rem";
  }

  return (
    <button
      type={props.type}
      className={classes.bttn}
      onClick={props.onClick}
      style={style}
    >
      {props.children}
    </button>
  );
};

export default Button;
