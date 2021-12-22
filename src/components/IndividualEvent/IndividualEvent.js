import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import "./IndividualEvent.css";
import data from "../Events/data.json";
import EventForm from "../Events/EventRegistrationForm/EventForm";
import Register from "./assets/register.png";
import Rulebook from "./assets/fest_rulebook.png";
/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

const baseURL = process.env.PUBLIC_URL + "/images/";

const IndividualEvent = () => {
  const { eventName } = useParams();
  const [PopupRegistration, setPopupRegistration] = useState(false);

  let event;
  let eventi = useLocation();
  eventi = eventi.pathname.substring(1, eventi.pathname.length);

  const eventType = eventi.substring(0, eventi.indexOf("/"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (eventType === "event") {
    event = data.event.find((e) => e.eventName === eventName);
  }
  if (eventType === "workshops") {
    event = data.workshops.find((e) => e.eventName === eventName);
  }

  const formPopUp = () => {
    setPopupRegistration(true);
  };

  const hideEventRegistrationFormHandler = () => {
    setPopupRegistration(false);
  };

  return (
    <Fragment>
      {PopupRegistration && (
        <EventForm
          onCloseForm={hideEventRegistrationFormHandler}
          teamSize={event.size}
          eventName={eventName}
          isWider="0"
        />
      )}
      <div id="individualEvent" className="individualEvent">
        <div className="eventHeading">
          <img src={`${baseURL + event.eventHeading}`} alt="eventHeading" />
        </div>

        <div className="d-flex justify-content-center blackBg" id="mainContent">
          <div className="p-2 col-example text-left">
            <div className="poster">
              <img
                id="eventPoster"
                src={`${baseURL + event.posterURL}`}
                alt={event.eventName}
                id="poster"
              />
            </div>
          </div>

          <div className="p-2 col-example text-left">
            <div className="content">
              <p className="eventContent"> {event.content} </p>
              <p> Team size: {event.size}</p>
            </div>

            <div className="registerButton" onClick={formPopUp}>
              <img src={Register} alt="Register" style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndividualEvent;
