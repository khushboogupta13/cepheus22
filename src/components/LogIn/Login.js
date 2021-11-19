import React, { Component } from "react";
import "./Login.css";
import leftImg from "./assets/left.svg";
import rightImg from "./assets/right.svg";
import welcome from "./assets/welcome.svg";

export default class Login extends Component {
  render() {
    return (
      <div className="loginPage">
        <img src={leftImg} className="left_image" />
        <img src={rightImg} className="right_image" />
        <img src={welcome} className="welcome_title" />

        <div className="mainContent">
          <div className="loginContainer"></div>
        </div>
      </div>
    );
  }
}
