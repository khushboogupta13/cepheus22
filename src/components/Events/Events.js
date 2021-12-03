import {useState} from 'react';
import "./Events.css";
import {Link } from 'react-router-dom'
import Heading from "./assets/Events.svg";
import Competition from './assets/competitionbutton.png';
import Talk from './assets/talkButton.png';
import Workshop from './assets/workshopButton.png';
import Doll from './assets/Doll.svg';
import Kids from './assets/Kids.svg';
import BlackLine from './assets/blackLine.svg';
import poster from './assets/poster.png'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from './data.json'
/* eslint-disable */
const CompetitionCarousel = () => {
  const setting = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
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
          dots: true
        }
      }
    ]
  }
  
  
  return (

    <div className="event_slider">
      <Slider {...setting}>
        {data.event.map((item) => (
          <Link to={`event/${item.eventName}`}>
              <img src={poster} alt='' className="event_slide" />
          </Link>
          ))}
        
      </Slider>
    </div>
)}

const WorkshopCarousel = () => {
  
  return (

    <div className="twoWorkshops">
        <div className="d-flex justify-content-center" id = "boxes">

        <div className="p-2 col-example text-left">
          <div className="workshop">
          <Link to={`workshops/bashIt`}>
              <img src={poster} alt='Bash It!' id = "workshop1" />
          </Link>
          </div>
          </div>

        <div className="p-2 col-example text-left">
          <div className="workshop">
            <Link to={`workshops/hackTheGames`}>
              <img src = {poster} alt = "HackTheGames" id = "workshop2" />
            </Link>
          </div>
        </div>
        </div>
    </div>)}

const TalkCarousel = () => {
  return (

    <div className="oneTalk">

      <div className="d-flex justify-content-center" id = "boxes">
          <div className="p-2 col-example text-center">
            <div className="talk" >
                <Link to={`talks/roboticsCareer`}>
                  <img src = {poster} alt = "Make a Career in Robotics" id = "talk1" />
                </Link>
            </div>
            </div>
          </div>

    </div>
)}

const Events=()=>{

  const settings = {
    effect: "coverflow",
    centeredSlides: false,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 40, // Stretch space between slides (in px)
      depth: 300, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false // Enables slides shadows
    }
  };

  const [competitionCards, setCompetitionCards] = useState(true);
  const competitionClick = () => {setCompetitionCards(true); setTalkCards(false); setWorkshopCards(false)};

  const [workshopCards, setWorkshopCards] = useState(false)
  const workshopClick = () => {setWorkshopCards(true); setCompetitionCards(false); setTalkCards(false)};
  
  const [talkCards, setTalkCards] = useState(false)
  const talkClick = () => {setTalkCards(true); setWorkshopCards(false); setCompetitionCards(false)};
  
  const [treasureHuntDescription, setTreasureHuntDescription] = useState(true);
  const [fizzbuzzDescription, setFizzbuzzDescription] = useState(false);
  const [circuitalDilemmaDescription, setCircuitalDilemmaDescription] = useState(false);
  const [hackTheGamesDescription, setHacktheGamesDescription] = useState(true);
  const [hackOverflowDescription, setHackOverflowDescription] = useState(false);
  const [beatTheStreetDescription, setBeatTheStreetDescription] = useState(false);
  const [bashItDescription, setBashItDescription] = useState(true);
  const [arduinoTrialDescription, setArduinoTrialDescription] = useState(false);
  const [roboticsCareerDescription, setRoboticsCareerDescription] = useState(false);
  const [loremIpsumDescription, setLoremIpsumDescription] = useState(true);
  const [ctfDescription, setCtfDescription] = useState(false);
  const [builderBridgeDescription, setBuilderBridgeDescription] = useState(false);
  
  return(
    <div id="events" className="events">

        <div id="eventsHeading" className="eventsHeading">
          <img src = {Heading} alt = "Events" className="eventHeadingRight" />
        </div>

        <div className="d-flex justify-content-center" id = "boxes">

          <div className="p-2 col-example text-left">
            <div className="buttons" id = "button1" onClick={competitionClick}>
              <img src = {Competition} alt = "competitions" style={{maxHeight:"70%", maxWidth:"70%", margin:"auto"}} />
            </div>
            </div>

          <div className="p-2 col-example text-left">
            <div className="buttons" id = "button2" onClick={workshopClick}>
              <img src = {Workshop} alt = "workshops" style={{maxHeight:"70%", maxWidth:"70%", margin: "auto"}}/>
            </div>
          </div>

          <div className="p-2 col-example text-left">
            <div className="buttons" id = "button3" onClick={talkClick}>
              <img src = {Talk} alt = "talks" style={{maxHeight:"70%", maxWidth:"70%", margin:"auto"}} />
            </div>
          </div>
          </div>

          <div className="backgroundLine" id = "backgroundLine">
            <img src={BlackLine} style={{marginTop: "-9rem", zIndex:1, position: "relative"}} />
          </div>

          <div className="backgroundElements" id="backgroundElements">
            <div className="doll">
              <img src = {Doll} alt = "doll" className="dollLeft" />
            </div>
            <div className="kids">
            <img src = {Kids} alt="kids" className="kidsRight" style={{marginRight: "auto"}}/>
            </div>
          </div>  

          <div className="carousel">
            {competitionCards?  <CompetitionCarousel /> : "" }
            {workshopCards?  <WorkshopCarousel /> : "" }
            {talkCards?  <TalkCarousel /> : "" }
          </div> 
          
          {/* <div className="eventDescription">
            <p>
              Event Description 
            </p>
          </div> */}
    
    </div>)
}

export default Events;