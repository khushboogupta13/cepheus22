import React, { Component } from "react";
import Lottie from "react-lottie-player";
import "./Loader.css";
import animationData from "./assets/load.json";

const Loader = () => {
  return (
    <div className="loader__div">
      <Lottie
        animationData={animationData}
        play
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default Loader;
