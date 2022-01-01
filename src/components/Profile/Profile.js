import React, { useState, useEffect } from "react";
import "./Profile.css";
import CopyIcon from "./copy.png";
import Modal from "../UI/Modal";
import axios from "axios";


const Profile = (props) => {
  const [copy, setCopy] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState();

  function copyControlFunction() {

    const timer = setTimeout(() => setCopy(false), 3000);
    return () => clearTimeout(timer);
  }
  const playerId = localStorage.getItem("id");
  const is_profile_complete = localStorage.getItem("is_profile_complete");
  useEffect(async () => {

    if (playerId && is_profile_complete === "true") {
      await axios.get(
        process.env.React_App_Backend_url + "user/registered_events",
        {
          headers: {
            "content-type": "application/json",
            Authorization: playerId,
          },
        }
      ).then((res) => {
          setEvents(res.data.events);
          setIsLoading(false);
      }).catch(err => {
        console.log("error",err)
      });
      
    }
  },[events]);
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
            {events == null ? (
              <div className="noEvents" >
                <p>Loading...</p>
              </div> 
            ):
            (events.length === 0
              ? <div className="noEvents">
                  <p>No Events Registered</p>
                </div>
              : events.map((event) => {
                  return (
                    <div className="eventCard">
                      <img
                        src={event.image_src}
                        alt={event.name}
                      />
                      <div className="eventInfo">
                        <h2>{event.name}</h2>
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Profile;
