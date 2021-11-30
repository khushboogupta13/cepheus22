import "./Events.css";
import Heading from "./assets/Events.svg";
import Competition from './assets/competitionbutton.png';
import Talk from './assets/talkButton.png';
import Workshop from './assets/workshopButton.png';
import Doll from './assets/Doll.svg';
import Kids from './assets/Kids.svg';
import BlackLine from './assets/blackLine.svg';
import Slider from './swiper';

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

  const data = [...Array(10).keys()];

  return(
    <div id="events" className="events">
        <div id="eventsHeading" className="eventsHeading">
          <img src = {Heading} alt = "Events" className="eventHeadingRight" />
        </div>

        <div className="d-flex justify-content-center" id = "boxes">
          <div className="p-2 col-example text-left">
            <div className="buttons" id = "button1">
              <img src = {Competition} alt = "competitions" style={{maxHeight:"60%", maxWidth:"60%", margin:"auto"}} />
            </div>
            </div>
          <div className="p-2 col-example text-left">
            <div className="buttons" id = "button2">
              <img src = {Workshop} alt = "workshops" style={{maxHeight:"60%", maxWidth:"60%", margin: "auto"}}/>
            </div>
          </div>
          <div className="p-2 col-example text-left">
            <div className="buttons" id = "button3">
              <img src = {Talk} alt = "talks" style={{maxHeight:"60%", maxWidth:"60%", margin:"auto"}} />
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
  
      
          
    </div>)
}

export default Events;