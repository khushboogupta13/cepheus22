import React, { useState } from "react";
import "./Login.css";
import leftImg from "./assets/left.svg";
import rightImg from "./assets/right.svg";
import welcome from "./assets/welcome.svg";
import axios from "axios";
import {  useHistory} from "react-router-dom";

export default function Login() {
  const [playerID, setPlayerID] = useState(
    window.location.search.split("?")[1]
  );
  const [mobile, setMobile] = useState();
  const [clg, setClg] = useState();
  const history = useHistory();
  return (
    <div className="loginPage">
      <img src={leftImg} className="left_image" />
      <img src={rightImg} className="right_image" />
      <img src={welcome} className="welcome_title" />
      <div className="welcome_mobile">Welcome</div>

      <div className="mainContent">
        <div className="loginContainer">
          <div className="logininDiv">
            <p className="login_text">Profile</p>
            <div className="input_div">
              <p className="input_label">Player ID:</p>
              <input type="text" value={playerID} readOnly />
            </div>
            <div className="input_div">
              <p className="input_label">Mobile No:</p>
              <input
                type="number"
                value={mobile}
                onChange={(e) => {
                  if (e.target.value.length <= 10) {
                    setMobile(e.target.value);
                  }
                }}
              />
            </div>

            <div className="input_div">
              <p className="input_label">college Name:</p>
              <input
                type="text"
                value={clg}
                onChange={(e) => {
                  setClg(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="signupButtonDiv">
            <div
              className="signupButton"
              onClick={async (e) => {
                const phoneno = /^\d{10}$/;
                if (mobile.match(phoneno)) {
                  const res = await axios.post(
                    process.env.React_App_Backend_url + "user/complete_profile",
                    {
                      phone_no: mobile,
                      college: clg,
                    },
                    {
                      headers: {
                        "content-type": "application/json",
                        "Authorization": playerID,
                      },
                    }
                  );
                  if (res.status == 200) {
                    localStorage.setItem("id",playerID);
                    localStorage.setItem("is_profile_complete", 'true');
                    history.push('/');
                    
                  } else {
                    console.log("error!!");
                  }
                } else {
                  alert("Incorrect phone number");
                }
              }}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
