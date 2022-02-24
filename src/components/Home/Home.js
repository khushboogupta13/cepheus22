import React, { Component } from "react";
import "./Home.css";
import leftSymbol from "./assets/leftSymbol.svg";
import centerSymbol from "./assets/centerSymbol.svg";
import cepheusLogo from "./assets/cepheusLogo.svg";
import ScrollingGallery from "./scrollingGallery/ScrollingGallery";
import toast from "react-hot-toast";
import Profile from "../Profile/Profile";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      token: localStorage.getItem("id"),
      PopupProfile: false,
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

  render() {
    if (this.state.width > 1030) {
      return (
        <>
          {this.state.PopupProfile && (
            <Profile
              onCloseProfile={() => {
                this.setState({ PopupProfile: false });
              }}
              isWider="1"
            />
          )}
          <div id="home" className="home container-fluid">
            <img src={leftSymbol} alt=" " className="left_symbol"></img>
            <div className="left_div">
              <div className="buttonsDiv">
                {this.state.token && (
                  <div
                    className="buttonGlow"
                    onClick={() => {
                      this.setState({ PopupProfile: true });
                    }}
                  >
                    Profile
                  </div>
                )}
                <div className="buttonGlow">
                  {this.state.token ? (
                    <div
                      onClick={() => {
                        this.setState({ token: null });
                        localStorage.removeItem("id");
                        localStorage.clear();
                        toast.success("Successfully LogOut!!");
                      }}
                    >
                      Log out
                    </div>
                  ) : (
                    <a href={process.env.React_App_Backend_url + "user/login"}>
                      Log in
                    </a>
                  )}
                </div>
                <a href="https://cepheusmemories.co.in/" target="_blank">
                  <button class="button-1" role="button">
                    Buy Merchandise
                  </button>
                </a>
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
        </>
      );
    } else {
      return (
        <>
          {this.state.PopupProfile && (
            <Profile
              onCloseProfile={() => {
                this.setState({ PopupProfile: false });
              }}
              isWider="1"
            />
          )}
          <div id="home" className="home_mob container-fluid">
            <div className="top_div">
              <img
                src={centerSymbol}
                className="center_symbol_mob"
                alt=" "
              ></img>
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
                {this.state.token && (
                  <div
                    className="buttonGlow_mob"
                    onClick={() => {
                      this.setState({ PopupProfile: true });
                    }}
                  >
                    Profile
                  </div>
                )}

                <div className="buttonGlow_mob">
                  {this.state.token ? (
                    <div
                      onClick={() => {
                        this.setState({ token: null });
                        localStorage.clear();
                        toast.success("Successfully LogOut!!!");
                      }}
                    >
                      Log out
                    </div>
                  ) : (
                    <a href={process.env.React_App_Backend_url + "user/login"}>
                      Log in
                    </a>
                  )}
                </div>
                <a href="https://cepheusmemories.co.in/" target="_blank">
                  <button class="button-1" role="button">
                    Buy Merchandise
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
