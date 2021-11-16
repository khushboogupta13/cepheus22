import React, { useEffect } from "react";
import "./ScrollingGallery.css";
import jQuery from "jquery";

const Card = () => {
  return (
    <div className="img_card">
      <img
        className="card_img"
        src="https://picsum.photos/seed/picsum/300/200"
      ></img>
    </div>
  );
};

export default function ScrollingGallery() {
  return (
    <div className="gallery">
      <div className="column_container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="column_container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
