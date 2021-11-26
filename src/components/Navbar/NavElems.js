import NavElem from "./NavElem";
import "./NavElems.css"
import React from "react";

const NavElems = (props) => {
  
  return (
    <React.Fragment>
      <div className="firstItem">
        <NavElem
          elem={props.items[0].elem}
          id="e1"
          key={props.key}
          link={props.items[0].link}
          onClick={props.onClick}
        />
      </div>
      <div className="restItems">
        {props.items.slice(1).map((navElement,idx) => (
          <NavElem
            elem={navElement.elem}
            id={`e${idx+2}`}
            key={navElement.key}
            link={navElement.link}
            onClick={props.onClick}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default NavElems;
