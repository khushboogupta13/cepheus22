import React, { useEffect, useState} from 'react';
import "./FAQ.css";
import FAQ_LOGO from "./assets/Faq.svg";
import jQuery from 'jquery';
import { Carousel } from "react-bootstrap";

const Card = () => {
  return (
    <div className="_card">
      <div className="_card-content">
        <p>dbsdcnacdnscns c jsbcsajc snkcdnasdncns sjjncjks cqndnk fdbsa   dcbsdbchsbh hdbhv  jcjejjclkjc dkchdksjnckjsn kjsbdcjbd cbjv bbbb bbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbb hdasnvjc sdjn skjcnksnc ckadscnnda cnansckjnac  amncnsakjcLXDKLQwc sacaslkdnsakjcnmsac jawsjiaej qsbdjncn cwskjbcns cdnwnlkdwnc nwdnbkjnw cdwbjc</p>
      </div>
    </div>
  );
}

const Mobile_FAQ_center = () => {
  return(
    <div className="mobile_FAQ_center">
      <Carousel
      indicators={false}
      wrap={true}
      prevLabel={""}
      nextLabel={""}
      interval={3000}
      pause={"hover"}
      >
          <Carousel.Item>
              <Card />
          </Carousel.Item>
          <Carousel.Item>
              <Card />
          </Carousel.Item>
          <Carousel.Item>
              <Card />
          </Carousel.Item>
      </Carousel>        
    </div>
  );
}

const FAQ_center = () => {
  return (
  <div className="FAQ_center">
        <div className="_container" >
            <div className="column_container" id="example1">
                <div className="column1" id="col">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>    

            <div className="column_container" id="example2">
                <div className="column1" id="col">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>    

            <div className="column_container" id="example3">
                <div className="column1" id="col">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>    

            <div className="column_container" id="example4">
                <div className="column1" id="col">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>    

            <div className="column_container" id="example5">
                <div className="column1" id="col">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>    

        </div>
      </div> );
  }
const FAQ = () => {
  
  const mediaMatch = window.matchMedia("(max-width: 720px)");
  const [mobile, setMobile] = useState(mediaMatch.matches);
 
  useEffect(() => {
    const handler = (e) => setMobile(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  useEffect(() => {

    (function($, undefined) {
      $.fn.loopScroll = function(p_options) {
        var options = $.extend({
            direction: "upwards",
            speed: 60
        }, p_options);
    
        return this.each(function() {
          var obj = $(this).find(".column1");
          var text_height = obj.find("._card").height();
          var start_y, end_y;
          if (options.direction == "downwards") {
            start_y = -text_height;
            end_y = 0;
          } else if (options.direction == "upwards") {
            start_y = 0;
            end_y = -text_height;
          }
    
          var animate = function() {
            // setup animation of specified block "obj"
            // calculate distance of animation    
            var distance = Math.abs(end_y - parseInt(obj.css("top")));
              
              //alert("animate " + obj.css("top") + "-> " + end_y + " " + distance);
               
            //duration will be distance / speed
            obj.animate(
              { top: end_y },  //scroll upwards
              1000 * distance / options.speed,
              "linear",
              function() {
                  // scroll to start position
                  obj.css("top", start_y);
                  animate();    
              }
            );
          };
    
          obj.find("._card").clone().appendTo(obj);
          $(this).on("mouseover", function() {
            obj.stop();
          }).on("mouseout", function() {
            animate(); // resume animation
          });
          obj.css("top", start_y);
          animate(); // start animation
            
        });
      };
    }(jQuery));
    
    jQuery("#example1").loopScroll();
    jQuery("#example2").loopScroll({direction: "downwards", speed: 120});
    jQuery("#example3").loopScroll();
    jQuery("#example4").loopScroll({direction: "downwards", speed: 120});
    jQuery("#example5").loopScroll();
  })
  return (

//     <div class="news_container" id="example3">
// <div class="column1">
//        <Card />  
//     </div>
//   </div>      
    <div className="FAQ" id="faq">

      <div className="FAQ_top">
        <img src={FAQ_LOGO} alt="FAQ" className="Faq_logo" />
      </div>
      {mobile ? <Mobile_FAQ_center /> : <FAQ_center />}
      

      <div className="FAQ_bottom">

      </div>

    </div>);
  
}



export default FAQ;