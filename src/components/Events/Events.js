import { useState } from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import Heading from "./assets/event_heading.svg";
import Competition from "./assets/competitionbutton.png";
import Rulebook from "./assets/rulebook.png";
import Workshop from "./assets/workshopButton.png";
import Doll from "./assets/Doll.svg";
import Kids from "./assets/Kids.svg";
import BlackLine from "./assets/blackLine.svg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json";
import toast from "react-hot-toast";

const baseURL = "";

const CompetitionCarousel = () => {
  const setting = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    centerPadding: 0,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="event_slider">
      <Slider {...setting}>
        {data.event.map((item) => (
          <Link to={`event/${item.eventName}`}>
            <img
              src={`${baseURL + item.posterURL}`}
              alt=""
              className="event_slide"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

// carousel for mobile view
const mobile_settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
  centerPadding: 0,
  arrows: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const WorkshopCarousel = () => {
  return (
    <div className="twoWorkshops">
      <div className="workshopsDesktop">
        <div className="event_slider">
          <Slider {...mobile_settings}>
            {data.workshops.map((item) => (
              <Link to={`workshops/${item.eventName}`}>
                <img
                  src={`${baseURL + item.posterURL}`}
                  alt=""
                  className="event_slide"
                />
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      <div className="workshopsMobile">
        <Slider {...mobile_settings}>
          {data.workshops.map((item) => (
            <Link to={`workshops/${item.eventName}`}>
              <img
                src={`${baseURL + item.posterURL}`}
                alt=""
                style={{ width: "60vw", height: "65vw", marginTop: "3rem" }}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Events = () => {
  const settings = {
    effect: "coverflow",
    centeredSlides: false,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 40, // Stretch space between slides (in px)
      depth: 300, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
  };

  const [competitionCards, setCompetitionCards] = useState(true);
  const competitionClick = () => {
    setCompetitionCards(true);
    setWorkshopCards(false);
  };

  const [workshopCards, setWorkshopCards] = useState(false);
  const workshopClick = () => {
    setWorkshopCards(true);
    setCompetitionCards(false);
  };

  return (
    <div id="events" className="events">
      <div id="eventsHeading" className="eventsHeading">
        <img src={Heading} alt="Events" className="eventHeadingRight" />
      </div>

      <div className="d-flex justify-content-center" id="boxes">
        <div className="p-2 col-example text-left">
          <div className="buttons" id="button1" onClick={competitionClick}>
            <img src={Competition} alt="competitions" id="competitionImg" />
          </div>
        </div>

        <div className="p-2 col-example text-left">
          <div className="buttons" id="button2" onClick={workshopClick}>
            <img src={Workshop} alt="workshops" id="workshopImg" />
          </div>
        </div>

        <div className="p-2 col-example text-left">
          <div
            className="buttons"
            id="button3"
            onClick={() => {           
              window.open("https://drive.google.com/file/d/1QQAe46dLrgQlvj0TuqOVKaKhDD4fUy9z/view?usp=sharing", "_blank")
            }}
          >
            <img src={Rulebook} alt="Rulebook" id="talkImg" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center" id="boxesMobile">
        <div className="p-2 col-example text-left">
          <div
            className="buttons"
            id="buttonMobile"
            onClick={() => {
              
              window.open("https://drive.google.com/file/d/1QQAe46dLrgQlvj0TuqOVKaKhDD4fUy9z/view?usp=sharing", "_blank")
            }}
          >
            <img src={Rulebook} alt="rulebook" id="talkImgMobile" />
            
          </div>
        </div>
      </div>

      <div className="backgroundLine" id="backgroundLine">
        <img
          src={BlackLine}
          style={{ marginTop: "-11rem", zIndex: 1, position: "relative" }}
          alt="blackline"
        />
      </div>

      <div className="backgroundElements" id="backgroundElements">
        <div className="doll">
          <img src={Doll} alt="doll" className="dollLeft" />
        </div>
        <div className="kids">
          <img
            src={Kids}
            alt="kids"
            className="kidsRight"
            style={{ marginRight: "auto" }}
          />
        </div>
      </div>

      <div className="carousel">
        {competitionCards ? <CompetitionCarousel /> : ""}
        {workshopCards ? <WorkshopCarousel /> : ""}
      </div>
    </div>
  );
};

export default Events;
