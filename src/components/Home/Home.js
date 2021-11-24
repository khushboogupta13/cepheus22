import React, { Component } from "react";
import "./Home.css";
import leftSymbol from "./assets/leftSymbol.svg";
import centerSymbol from "./assets/centerSymbol.svg";
import cepheusLogo from "./assets/cepheusLogo.svg";
import ScrollingGallery from "./scrollingGallery/ScrollingGallery";
import Login from "../LogIn/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      loginVisible: false,
      signinVisible: false,
    };
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
  closeLogin = () => {
    this.setState({ loginVisible: false });
  };
  render() {
    if (this.state.width > 1000) {
      return (
        <div id="home" className="home container-fluid">
          {this.state.loginVisible ? <Login close={this.closeLogin} /> : null}
          <img src={leftSymbol} className="left_symbol"></img>
          <div className="left_div">
            <div className="buttonsDiv">
              <div
                className="buttonGlow"
                onClick={() => this.setState({ loginVisible: true })}
              >
                Log in
              </div>
              <div className="buttonGlow" onClick={() => alert("Signup")}>
                Sign up
              </div>
            </div>
          </div>
          <div className="center_div">
            <div className="centreSymbolContainer">
              <img src={centerSymbol} className="center_symbol"></img>
            </div>
            <div className="number_text">
              <img src={cepheusLogo} className="fes_title" />
              22
            </div>
            <div className="title_text">ANNUAL TECHNICAL FEST OF IITGOA</div>
          </div>
          <div className="right_div">
            <div className="top_gallery">
              <ScrollingGallery bias={0} />
            </div>
            <div className="bottom_gallery">
              <ScrollingGallery bias={2} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="home" className="home_mob container-fluid">
          {this.state.loginVisible ? <Login close={this.closeLogin} /> : null}

          <div className="top_div">
            <img src={centerSymbol} className="center_symbol_mob"></img>
            <div className="number_text_mob">
              <img src={cepheusLogo} className="fes_title_mob" />
              22
            </div>
            <div className="title_text_mob">
              ANNUAL TECHNICAL FEST OF IITGOA
            </div>
          </div>
          <div className="bottom_div">
            <div className="buttonsDiv_mob">
              <div
                className="buttonGlow_mob"
                onClick={() => this.setState({ loginVisible: true })}
              >
                Log in
              </div>
              <div className="buttonGlow_mob" onClick={() => alert("Signup")}>
                Sign up
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
