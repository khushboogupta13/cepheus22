import React, { Component } from "react";
import "./Home.css";
import leftSymbol from "./assets/leftSymbol.svg";
import centerSymbol from "./assets/centerSymbol.svg";
import cepheusLogo from "./assets/cepheusLogo.svg";

export default class Home extends Component {
  render() {
    return (
      <div class="home container-fluid">
        <img src={leftSymbol} className="left_symbol"></img>
        <div className="left_div">
          <div className="buttonsDiv">
            <div className="buttonGlow">Log in</div>
            <div className="buttonGlow">Sign in</div>
          </div>
        </div>
        <div className="center_div">
          <img src={centerSymbol} className="center_symbol"></img>
          <div className="number_text">
            <span className="fes_title">Cepheus</span>22
          </div>
          <div className="title_text">ANNUAL TECHNICAL FEST OF IITGOA</div>
        </div>
        <div className="right_div"></div>
      </div>
    );
  }
}
