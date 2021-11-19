import React, { Component } from "react";
import "./Login.css";
import leftImg from "./assets/left.svg";
import rightImg from "./assets/right.svg";
import welcome from "./assets/welcome.svg";

export default class Login extends Component {
  state = { rememberMe: false, userName: "", password: "" };
  render() {
    return (
      <div className="loginPage">
        <img src={leftImg} className="left_image" />
        <img src={rightImg} className="right_image" />
        <img src={welcome} className="welcome_title" />

        <div className="mainContent">
          <div className="loginContainer">
            <div className="logininDiv">
              <p className="login_text">Log In</p>
              <div className="input_div">
                <p className="input_label">User Id:</p>
                <input
                  type="text"
                  value={this.state.userName}
                  onChange={(e) => {
                    this.setState({ userName: e.target.value });
                  }}
                />
              </div>
              <div className="input_div">
                <p className="input_label">Password:</p>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="forgot_remember_div">
                <div className="remember_div">
                  <div
                    className={
                      this.state.rememberMe
                        ? "remember_button_tick"
                        : "remember_button_notick"
                    }
                    onClick={() => {
                      this.setState({ rememberMe: !this.state.rememberMe });
                    }}
                  >
                    ✓
                  </div>
                  Remember Me
                </div>
                <div className="forgot_div" onClick={() => alert("Forgot")}>
                  Forgot Password
                </div>
              </div>
            </div>
            <div className="signupButtonDiv">
              <div
                className="signupButton"
                onClick={() =>
                  alert(this.state.userName + " " + this.state.password)
                }
              >
                SignUp
              </div>
              <div className="closeButton" onClick={this.props.close}>
                Close
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
