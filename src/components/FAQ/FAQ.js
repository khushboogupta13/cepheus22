import React, { useEffect } from 'react';
import Slider from "react-slick";
import "./FAQ.css";
import FAQ_LOGO from "./assets/Faq_logo.svg";
import jQuery from 'jquery';

const Card = () => {
  return (
    <div className="_card">
      <div className="_card-content">
        <p>dbsdcnacdnscns c jsbcsajc snkcdnasdncns sjjncjks cqndnk fdbsa   dcbsdbchsbh hdbhv  jcjejjclkjc dkchdksjnckjsn kjsbdcjbd cbjv bbbb bbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbb hdasnvjc sdjn skjcnksnc ckadscnnda cnansckjnac  amncnsakjcLXDKLQwc sacaslkdnsakjcnmsac jawsjiaej qsbdjncn cwskjbcns cdnwnlkdwnc nwdnbkjnw cdwbjc</p>
      </div>
    </div>
  );
}



const FAQ = () => {
  
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
     
      <div className="FAQ_center">
        <div className="container" >
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
      </div>

      <div className="FAQ_bottom">

      </div>

    </div>);
  
}



export default FAQ;