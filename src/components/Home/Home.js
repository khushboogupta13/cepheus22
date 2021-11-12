import React, { Component } from "react";
import "./Home.css";
import leftSymbol from "./assets/leftSymbol.svg";
import centerSymbol from "./assets/centerSymbol.svg";
import cepheusLogo from "./assets/cepheusLogo.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div class="row home">
          <div className="left_div col-3">
            <img src={leftSymbol} className="left_symbol"></img>
          </div>
          <div className="center_div col-5">
            <img src={centerSymbol} className="center_symbol"></img>
            <div className="row festTitle">
              <div className="col logoDiv">
                <img src={cepheusLogo} className="festLogo"></img>
              </div>
              <div className="col number_text">22</div>
            </div>
            <div className="row title_text">
              ANNUAL TECHNICAL FEST OF IITGOA
            </div>
          </div>
          <div className="right_div col-4">Right</div>
        </div>
      </div>
    );
  }
}
