import React, { Component }  from 'react';

import { useState } from "react";
import classes from "./EventForm.module.css";
import Modal from "../../UI/Modal";
import AuctionHostDetails from "./AuctionHostDetails";
import AuctionDetails from "./AuctionDetails";

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
    <Modal onClose={props.onCloseForm}>
      {!showObjFillForm && <AuctionHostDetails />}
      {!showObjFillForm && (
        <AuctionDetails getNumObj={getNumObj} showObjForm={showObjForm} onCloseForm={props.onCloseForm}/>
      )}
    </Modal>
  );
};

export default EventForm;
