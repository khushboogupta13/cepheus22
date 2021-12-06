import React, { Component } from "react";

import { useState } from "react";
import classes from "./EventForm.module.css";
import Modal from "../../UI/Modal";
import AuctionHostDetails from "./AuctionHostDetails";

const EventForm = (props) => {
  const [showObjFillForm, setShowObjFillForm] = useState(false);

  const showObjForm = () => {
    setShowObjFillForm(true);
  };

  const getNumObj = (objNum) => {
    setShowObjFillForm(true);
    console.log(objNum);
  };
  console.log(props.teamSize);
  return (
    <Modal onClose={props.onCloseForm} isWider={props.isWider}>
      {!showObjFillForm && (
        <AuctionHostDetails
          teamSize={props.teamSize}
          eventName={props.eventName}
          onCloseForm={props.onCloseForm}
        />
      )}
    </Modal>
  );
};

export default EventForm;
