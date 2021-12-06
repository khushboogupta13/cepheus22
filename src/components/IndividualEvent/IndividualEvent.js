import React, { Fragment, useState } from "react";
import { useLocation, useParams } from "react-router";
import "./IndividualEvent.css";
import data from "../Events/data.json";
import poster from "./assets/poster.png";
import eventHeading from "./assets/EventName.svg";
import EventForm from "../Events/EventRegistrationForm/EventForm";

const IndividualEvent = () => {
  const { eventName } = useParams();
  const [PopupRegistration, setPopupRegistration] = useState(false);

  let event;
  let eventi = useLocation();
  eventi = eventi.pathname.substring(1, eventi.pathname.length);

  const eventType = eventi.substring(0, eventi.indexOf("/"));

  if (eventType === "event") {
    event = data.event.find((e) => e.eventName === eventName);
  }
  if (eventType === "workshops") {
    event = data.workshops.find((e) => e.eventName === eventName);
  }
  if (eventType === "talks") {
    event = data.talks.find((e) => e.eventName === eventName);
  }
  console.log(event.posterURL);

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
          <img src={eventHeading} alt="eventHeading" />
        </div>

        <div className="d-flex justify-content-center" id="mainContent">
          <div className="p-2 col-example text-left">
            <div className="poster">
              <img src={poster} alt={event.eventName} id="poster" />
            </div>
          </div>

          <div className="p-2 col-example text-left">
            <div className="content">
              <p> {event.content} </p>
              <p> Team size: {event.size}</p>
            </div>
            <button onClick={formPopUp}>Register</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndividualEvent;
