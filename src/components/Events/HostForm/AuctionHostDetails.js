import React, { Component }  from 'react';

import { useState } from "react";
import classes from "./AuctionHostDetails.module.css";

const AuctionHostDetails = () => {
  const [passwordInp, setPasswordInp] = useState("");
  const [passIsValid, setPassIsValid] = useState(false);

  const passwordChangeHandler = (event) => {
    setPasswordInp(event.target.value);
    if(passwordInp.trim().length >= 8){
      setPassIsValid(true);
    }else{
      setPassIsValid(false);
    }
  };

  return (
    <form>
      <h2>Auction Host Details</h2>
      <div className={classes.input}>
        <label htmlFor="HostName">Name of the Host</label>
        <input id="HostName" type="text" placeholder="John Watson" />
      </div>

      <div className={classes.input}>
        <label htmlFor="Hostid">Host Id</label>
        <input id="Hostid" type="text" placeholder="johnwatson1234" />
      </div>

      <div className={classes.input}>
        <label htmlFor="Password">Password</label>
        <div>
          <input
            id="Password"
            type="password"
            placeholder="*********"
            onChange={passwordChangeHandler}
            value={passwordInp}
          />
          {!passIsValid && (
            <p className={classes.min}>
              <span>*</span> Minimum 8 charcters required
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuctionHostDetails;
