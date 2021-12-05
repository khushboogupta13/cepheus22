import React, { Component }  from 'react';
import { useRef } from "react";
import classes from "./AuctionDetails.module.css";
import Button from "../../UI/Button";

const AuctionDetails = (props) => {
  const objectCountRef = useRef();

  const submitHandlerAD = (event) => {
    event.preventDefault();
    props.getNumObj(objectCountRef.current.value);
  };

  return (
    <form onSubmit={submitHandlerAD}>
      <h2>Auction Details</h2>
      <div className={classes.input}>
        <label htmlFor="auction-type">Auction Type</label>
        <input id="auction-type" type="text" placeholder="Limited" />
      </div>

      <div className={classes.input}>
        <label htmlFor="cntOfobjects">Number of objects</label>
        <input
          ref={objectCountRef}
          id="cntOfobjects"
          type="number"
          min="1"
          step="1"
          placeholder="1"
        />
      </div>
      <div className={classes.formButtons}>
        <Button
          onClick={submitHandlerAD}
          type="submit"
          bgColor="rgb(53, 203, 229)"
          color="white"
          sz="small"
        >
          Submit
        </Button>
        <Button
          onClick={props.onCloseForm}
          color="black"
          bgColor="transparent"
          borderColor="grey"
          sz="small"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AuctionDetails;
