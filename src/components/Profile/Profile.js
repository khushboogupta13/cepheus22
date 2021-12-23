import React, { useState, useEffect } from "react";
import "./Profile.css";
import CopyIcon from "./copy.png";
import Modal from "../UI/Modal";
import axios from "axios";

const Profile = (props) => {
  const [copy, setCopy] = useState(false);

  const [events, setEvents] = useState();

  function copyControlFunction() {
    const timer = setTimeout(() => setCopy(false), 3000);
    return () => clearTimeout(timer);
  }
  const playerId = localStorage.getItem("id");
  const is_profile_complete = localStorage.getItem("is_profile_complete");

  useEffect(async () => {
    if (playerId && is_profile_complete === "true") {
      let data = await axios.get(
        process.env.React_App_Backend_url + "user/profile",
        {
          headers: {
            "content-type": "application/json",
            Authorization: playerId,
          },
        }
      );
      if (data.status === 200) {
        setEvents(data.events);
      }
    }
  });
  return (
    <Modal onClose={props.onCloseProfile} isWider={props.isWider}>
      <div className="profile">
        <div className="playerIdContainer">
          <p className="playerIDText">Player ID:</p>
          <div className="playerId">
            <p>{playerId}</p>
            <img
              onClick={() => {
                navigator.clipboard.writeText(playerId);
                setCopy(true);
                copyControlFunction();
              }}
              src={CopyIcon}
              className="copyIcon"
              alt="copy"
            />
            <div className="copyText">
              {!copy && <p>Copy</p>}
              {copy && <p>Copied</p>}
            </div>
          </div>
        </div>

        <div className="myEventsText">
          <p>My Events</p>
        </div>
        <div className="registeredEventsWrapper">
          <div className="registeredEvents">
            {!events ? (
              <div className="noEvents">
                <p>Event registration will start soon</p>
              </div>
            ) : (
              <></>
            )}
            {events == null
              ? null
              : events.map((event) => {
                  return (
                    <div className="eventCard">
                      <img
                        src="https://techfest.org/2021/workshops/cyberethical.jpg"
                        alt=""
                      />
                      <div className="eventInfo">
                        <h2>EventName</h2>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Profile;
