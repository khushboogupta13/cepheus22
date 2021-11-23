import React, { useEffect, useState} from 'react';
import "./FAQ.css";
import FAQ_LOGO from "./assets/Faq.png";
import FAQ_LOGO_SVG from "./assets/Faq.svg";
import FAQ_BOX from "./assets/box.png";
import FAQ_BOTTOM_BOX from "./assets/bottom_box.png";
import jQuery from 'jquery';


const Card = ( {que,ans} ) => {
  return (
    <div className="_card">
      <div className="_card-content">
        <p>{que}..</p>
        <br/>
        <p>{ans}..</p>
      </div>
    </div>
  );
}

const q1 = "Q1";
  const a1 = "A1";
  const q2 = "Q2";
  const a2 = "A2";
  const q3 = "Q3";
  const a3 = "A3";
  const q4 = "Q4";
  const a4 = "A4";
  const q5 = "Q5";
  const a5 = "A5";
  const q6 = "Q6";
  const a6 = "A6";
  const q7 = "Q7";
  const a7 = "A7";
  const q8 = "Q8";
  const a8 = "A8";
  const q9 = "Q9";
  const a9 = "A9";
  const q10 = "Q10";
  const a10 = "A10";
  const q11 = "Q11";
  const a11 = "A11";
  const q12 = "Q12";
  const a12 = "A12";
  const q13 = "Q13";
  const a13 = "A13";
  const q14 = "Q14";
  const a14 = "A14";
  const q15 = "Q15";
  const a15 = "A15";

  const faqList = [
    <Card que={q1} ans={a1}/>,
    <Card que={q2} ans={a2}/>,
    <Card que={q3} ans={a3}/>,
    <Card que={q4} ans={a4}/>,
    <Card que={q5} ans={a5}/>,
    <Card que={q6} ans={a6}/>,
    <Card que={q7} ans={a7}/>,
    <Card que={q8} ans={a8}/>,
    <Card que={q9} ans={a9}/>,
    <Card que={q10} ans={a10}/>,
    <Card que={q11} ans={a11}/>,
    <Card que={q12} ans={a12}/>,
    <Card que={q13} ans={a13}/>,
    <Card que={q14} ans={a14}/>,
    <Card que={q15} ans={a15}/>,
  ];

const Columns = ({c}) => {
      
      const cols = []
      var cd_no = 1;
      let cd=0;
      if(c == 5){
          cd = 3;
      }else if (c== 4){
          cd = 4;
      }
      else if(c == 3){
          cd = 5;
      }else if (c == 2){
          cd = 8;
      }
      else if(c == 1){
          cd = 15;
      }
      for(let i=1; i <=c; i++){

        const col= []
        for(let j=1; j<= cd; j++) {
          
          if(cd_no > 15) {
            break;
          }
          col.push(
            faqList[cd_no-1]
          );
          cd_no = cd_no + 1;
        }
        cols.push(
          <div className="_column_container" id={"example"+i}>
              <div className="column1" id="col">
                <div className="_c">
                  {col}
                </div>                
              </div>
          </div>
        );
        
      }
      
      
      return (
        <>{cols}</>
      );
}

const FAQ_center = ({c}) => {
  
  return (
  <div className="FAQ_center">
        <div className="_container" >
            <Columns c={c}/>
        </div>
      </div> );
  }
const FAQ = () => {
   
  
  const mediaMobileMatch = window.matchMedia("(max-width: 370px)");
  const [mobile, setMobile] = useState(mediaMobileMatch.matches);

  const mediaTab2Match = window.matchMedia("(max-width: 768px)");
  const [tab2, setTab2] = useState(mediaTab2Match.matches);
  
  const mediaTab3Match = window.matchMedia("(max-width: 1024px)");
  const [tab3, setTab3] = useState(mediaTab3Match.matches);

  const mediaDesk4Match = window.matchMedia("(max-width: 1500px)");
  const [desk4, setDesk4] = useState(mediaDesk4Match.matches);

  const [col, setCol] = useState(5);

  

  
 
 
  useEffect(() => {
    const handlerMobile = (e) => setMobile(e.matches);
    const handlerTab2 = (e) => setTab2(e.matches);
    const handlerTab3 = (e) => setTab3(e.matches);
    const handlerDesk4 = (e) => setDesk4(e.matches);

    mediaMobileMatch.addListener(handlerMobile);
    mediaTab2Match.addListener(handlerTab2);
    mediaTab3Match.addListener(handlerTab3);
    mediaDesk4Match.addListener(handlerDesk4);
    return () => {
      mediaMobileMatch.removeListener(handlerMobile);
      mediaTab2Match.removeListener(handlerTab2);
      mediaTab3Match.removeListener(handlerTab3);
      mediaDesk4Match.removeListener(handlerDesk4);
    }
  },[]);

  useEffect(() => {

    (function($, undefined) {
      $.fn.loopScroll = function(p_options) {
        var options = $.extend({
            direction: "upwards",
            speed: 60
        }, p_options);
    
        return this.each(function() {
          var obj = $(this).find(".column1");
          var text_height = obj.find("._c").height();
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
    
          obj.find("._c").clone().appendTo(obj);
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
  
  function handler(){
    if(desk4 && !tab3 && !tab2 && !mobile){
        return <FAQ_center c={4}/>
    }
    if(desk4 && tab3 && !tab2 && !mobile){
       return <FAQ_center c={3} />
    }
    if(desk4 && tab3 && tab2 && !mobile){
        return <FAQ_center c={2} />
    }
    if(desk4 && tab3 && tab2 && mobile){
        return <FAQ_center c={1} />
    }
    if(!desk4 && !tab3 && !tab2 && !mobile){
      return <FAQ_center c={5} />
  }
    console.log(desk4,tab3,tab2,mobile);
  }
  return (

//     <div class="news_container" id="example3">
// <div class="column1">
//        <Card />  
//     </div>
//   </div>      
    <div className="FAQ" id="faq">
      
      <div className="FAQ_top">   
        <div className="top_wrap">
          <img src={mobile ? FAQ_LOGO_SVG : FAQ_LOGO} style={{width: mobile ? '95%' : '', display: mobile ? 'none': 'block'}}alt="FAQ" className="Faq_logo" />
          <img src={FAQ_BOX} alt="FAQ" className="Faq_box" />
        </div>    
      </div>
      
      {handler()}
      

      <div className="FAQ_bottom">
          <img src={FAQ_BOTTOM_BOX} alt="FAQ" className="Faq_bottom_box" />
      </div>
      

    </div>);
  
}



export default FAQ;