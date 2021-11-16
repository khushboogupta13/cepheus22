import React, { Component } from "react";
import "./Home.css";
import leftSymbol from "./assets/leftSymbol.svg";
import centerSymbol from "./assets/centerSymbol.svg";
import cepheusLogo from "./assets/cepheusLogo.svg";
import ScrollingGallery from "./scrollingGallery/ScrollingGallery";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    if (this.state.width > 1000) {
      return (
        <div id="home" className="home container-fluid">
          <img src={leftSymbol} className="left_symbol"></img>
          <div className="left_div">
            <div className="buttonsDiv">
              <div className="buttonGlow">Log in</div>
              <div className="buttonGlow">Sign up</div>
            </div>
          </div>
          <div className="center_div">
            <img src={centerSymbol} className="center_symbol"></img>
            <div className="number_text">
              <span className="fes_title">Cepheus</span>22
            </div>
            <div className="title_text">ANNUAL TECHNICAL FEST OF IITGOA</div>
          </div>
          <div className="right_div">
            {/* <div className="backCoveringDiv">
              <div className="baseCoveringDiv"> */}
            <div className="top_gallery">
              <ScrollingGallery />
            </div>
            <div className="bottom_gallery">
              <ScrollingGallery />
            </div>
            {/* </div>
            </div> */}
          </div>
        </div>
      );
    } else {
      return (
        <div id="home" class="home container-fluid">
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
}
