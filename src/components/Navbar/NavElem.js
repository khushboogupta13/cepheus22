import "./NavElem.css";
import React from "react";
import { HashLink } from "react-router-hash-link";

const NavElem = (props) => {
  return (
    <HashLink smooth to={`#${props.link}`} onClick={props.onClick}>
      <span className={props.id}>{props.elem}</span>
    </HashLink>
  );
};

export default NavElem;
