import React from "react";

// import { useState } from "react";
import classes from "./AuctionHostDetails.module.css";

const AuctionHostDetails = (props) => {
  const teamSize = props.teamSize;
  // const [idInp, setidInp] = useState("");
  // const [passIsValid, setPassIsValid] = useState(false);

  // const idChangeHandler = (event) => {
  //   setidInp(event.target.value);
  //   if (idInp.trim().length >= 8) {
  //     setPassIsValid(true);
  //   } else {
  //     setPassIsValid(false);
  //   }
  // };

  const playersDetails = [];
  for (var i = 0; i < teamSize; i++) {
    const playerDetail = (
      <div className={classes.input}>
        <label htmlFor={`playerid${i + 2}`}> Player ID {i + 2}:</label>
        <input id={`playerid${i + 2}`} type="text" placeholder="88888888" />
      </div>
    );
    playersDetails.push(playerDetail);
  }

  return (
    <div className={classes.form_container}>
      <form>
        <h2 className={classes.event_title}>{`${props.eventName}`}</h2>
        <h2 className={classes.event_title}>Registration Form</h2>
        <hr className={classes.bline} />
        <div className={classes.input}>
          <label htmlFor="playerid1">Player ID 1:</label>
          <input id="playerid1" type="text" value="12345678" readOnly />
        </div>
        {teamSize > 1 ? playersDetails : <></>}
        <hr className={classes.bline} />
        <h5 className={classes.confmsg}>Are you sure you want to register?</h5>
        <div className={classes.btn_container}>
          <button className={classes.yes_btn} type="submit">
            O
          </button>
          <button className={classes.no_btn} onClick={props.onCloseForm}>
            X
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuctionHostDetails;
