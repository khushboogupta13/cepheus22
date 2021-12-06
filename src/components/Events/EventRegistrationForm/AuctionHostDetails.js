import React, { Component } from "react";

import { useState } from "react";
import classes from "./AuctionHostDetails.module.css";

const AuctionHostDetails = (props) => {
  const teamSize = props.teamSize;
  const [idInp, setidInp] = useState("");
  const [passIsValid, setPassIsValid] = useState(false);

  const idChangeHandler = (event) => {
    setidInp(event.target.value);
    if (idInp.trim().length >= 8) {
      setPassIsValid(true);
    } else {
      setPassIsValid(false);
    }
  };

  const playersDetails = [];
  for (var i = 0; i < teamSize; i++) {
    const playerDetail = (
      <div className={classes.input}>
        <label htmlFor={`playerid${i + 2}`}> Player ID {i + 2}:</label>
        <input id={`playerid${i + 2}`} type="text" placeholder="88888888"/>
      </div>
    );
    playersDetails.push(playerDetail);
  }
  return (
    <form>
      <h2>{`${props.eventName} Registration Form`}</h2>
      <div className={classes.input}>
        <label htmlFor="playerid1">Player ID 1:</label>
        <input id="playerid1" type="text" value="12345678" readOnly />
      </div>
      {teamSize > 1 ? playersDetails : <></>}
      <h5>Are you sure you want to register?</h5>
      <button type="submit">Yes, I want to register</button>
      <button onClick={props.onCloseForm}>Cancel</button>
    </form>
  );
};

export default AuctionHostDetails;
