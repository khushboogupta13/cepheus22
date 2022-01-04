import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import "./IndividualEvent.css";
import data from "../Events/data.json";
import EventForm from "../Events/EventRegistrationForm/EventForm";
import Register from "./assets/register.png";
import Rulebook from "./assets/fest_rulebook.png";
import toast from "react-hot-toast";
/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

const baseURL = "";

const IndividualEvent = () => {
  const { eventName } = useParams();
  const [PopupRegistration, setPopupRegistration] = useState(false);

  let event;
  let eventi = useLocation();
  eventi = eventi.pathname.substring(1, eventi.pathname.length);

  const eventType = eventi.substring(0, eventi.indexOf("/"));
  const myPlayerId = localStorage.getItem("id");
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
    if(!myPlayerId){
      toast.error('Please Login to Register');
    }else{
      setPopupRegistration(true);
    }
    
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
          eventId={event.event_id}
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
                src={`${event.posterURL}`}
                alt={event.eventName}
                id="poster"
              />
            </div>
          </div>

          <div className="p-2 col-example text-left">
            <div className="content">
              <p className="eventContent"> {event.content} </p>
              <p> Team size: {event.size}</p>
              {event.deadline && <p>Deadline: {event.deadline}</p>}
            </div>

            <div className="registerButton" onClick={() => {
              if(event.registration){
                formPopUp();
              }else{
                toast.error("Registration Closed!!");
              }
              
             }
            }>
              <img src={Register} alt="Register" style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndividualEvent;