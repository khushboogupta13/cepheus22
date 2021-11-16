import NavElem from "./NavElem";
import { Fragment } from "react/cjs/react.production.min";
import "./NavElems.css"

const NavElems = (props) => {
  return (
    <>
      <div className="firstItem">
        <NavElem
          elem={props.items[0].elem}
          id="e1"
          key={props.key}
          curr={props.items[0].curr}
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
            curr={navElement.curr}
            link={navElement.link}
            onClick={props.onClick}
          />
        ))}
      </div>
    </>
  );
};

export default NavElems;
