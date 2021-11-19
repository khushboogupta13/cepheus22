import { useState } from "react";
import strip from "../../assets/navContainer.svg";
import navElems from "./NavElems";
import NavElems from "./NavElems";
import "./Navbar.css";
import Scrollspy from "react-scrollspy";

const navItems = [
  { elem: "Home", key: 0, link: "home" },
  { elem: "AboutUs", key: 1, link: "abtUs" },
  { elem: "Events", key: 2, link: "events" },
  { elem: "Schedule", key: 3, link: "schedule" },
  { elem: "FAQ", key: 4, link: "faq" },
  { elem: "Sponsors", key: 5, link: "sponsors" },
  { elem: "ContactUs", key: 6, link: "contactUs" },
];

const Navbar = () => {
  const [nav, setNav] = useState(navItems);

  const onChangeHandler = (event) => {
    if (event === undefined || (event.id === nav[0].link)) {

    } else {
      let idx = 0;
      for (let i = 0; i < 7; i++) {
        if (nav[i].link == event.id) {
          idx = i;
          break;
        }
      }
      setNav((prevArr) => {
        let updatedArr = [];
        for (let i = idx; i < 7; i++) {
          updatedArr.push(prevArr[i]);
        }
        for (let i = 0; i < idx; i++) {
          updatedArr.push(prevArr[i]);
        }
        return updatedArr;
      });
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div>
          <img src={strip} />
        </div>
        <div className="navElemsContainer">
          <NavElems items={nav} />
        </div>
      </div>

      <Scrollspy
        items={[
          "home",
          "abtUs",
          "events",
          "schedule",
          "faq",
          "sponsors",
          "contactUs",
        ]}
        currentClassName="is-current"
        onUpdate={onChangeHandler}
      ></Scrollspy>
    </div>
  );
};

export default Navbar;
