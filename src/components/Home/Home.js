import React, { Component } from "react";
import "./Home.css";
import leftSymbol from "./assets/leftSymbol.svg";
import centerSymbol from "./assets/centerSymbol.svg";
import cepheusLogo from "./assets/cepheusLogo.svg";
import ScrollingGallery from "./scrollingGallery/ScrollingGallery";
import toast,{Toaster} from 'react-hot-toast';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      token: localStorage.getItem("token"),
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    console.log(this.state.token);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    if (this.state.width > 1030) {
      return (
        <div id="home" className="home container-fluid">
          <img src={leftSymbol} alt=" " className="left_symbol"></img>
          <div className="left_div">
            <div className="buttonsDiv">
              {
                this.state.token && 
                <div className="buttonGlow" >
                Profile
                </div> 
              }
              <div className="buttonGlow">
                {this.state.token ? (
                  <div
                    onClick={() => {
                      
                      this.setState({ token: null });
                      localStorage.removeItem("token");
                      toast.success("Successfully LogOut!!")
                    }}
                  >
                    Log out
                  </div>
                ) : (
                  <a href={process.env.React_App_Backend_url+"/user/login"}>Log in</a>
                )}
              </div>
              
            </div>
          </div>
          <div className="center_div">
            <div className="centreSymbolContainer">
              <img src={centerSymbol} alt=" " className="center_symbol"></img>
            </div>
            <div className="number_text">
              <img src={cepheusLogo} alt=" " className="fes_title" />
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
          <div className="top_div">
            <img src={centerSymbol} className="center_symbol_mob" alt=" "></img>
            <div className="number_text_mob">
              <img src={cepheusLogo} className="fes_title_mob" alt=" " />
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
                onClick={() => window.open(process.env.REACT_APP_BACKEND_URL)}
              >
                Log in
              </div>
              {/* <div
                className="buttonGlow_mob"
                onClick={() =>
                  window.open(
                    process.env.REACT_APP_BACKEND_URL + "/login",
                    "_blank"
                  )
                }
              >
                Sign up
              </div> */}
            </div>
          </div>
        </div>
      );
    }
  }
}
