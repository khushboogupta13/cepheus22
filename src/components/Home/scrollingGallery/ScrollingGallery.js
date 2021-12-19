import React, { useEffect } from "react";
import "./ScrollingGallery.css";
import jQuery from "jquery";

let images = [
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821666/cepheus22/stratathon_eh5han.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821662/cepheus22/beet_the_street_j36qde.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821666/cepheus22/Treasure_Hunt_paxokp.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821662/cepheus22/buider_bridge_lrboxl.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821666/cepheus22/Play_with_mirobit_mltk0q.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821664/cepheus22/hack_overflow_hjijzi.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821663/cepheus22/Cybersec_webinar_uaet7f.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821665/cepheus22/hackthegame-01_kho5gm.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821663/cepheus22/Fizzbuzz_gj7nak.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821663/cepheus22/circuitalDilemma-01_hwuswn.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821663/cepheus22/Bash_it_roykk6.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821663/cepheus22/Arduino_s_Trial_f4wioa.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821665/cepheus22/Make_a_career_in_robotics_orfsqj.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821665/cepheus22/Lorem_Imsum_sjghbu.png",
  "https://res.cloudinary.com/dcydix7rc/image/upload/f_auto/q_auto/v1639821662/cepheus22/capture_the_flag_kbplz1.png",
];

const Card = (props) => {
  return (
    <div className="img_card">
      <img className="card_img" src={props.image} alt=" "></img>
    </div>
  );
};
/* eslint-disable */
export default function ScrollingGallery(props) {
  useEffect(() => {
    (function ($, undefined) {
      $.fn.loopScroll = function (p_options) {
        var options = $.extend(
          {
            direction: "upwards",
            speed: 60,
          },
          p_options
        );

        return this.each(function () {
          var obj = $(this).find(".gallery");
          // var text_height = obj.find(".column_container").height();
          var start_y, end_y;
          if (options.direction === "downwards") {
            start_y = -500;
            end_y = 0;
          } else if (options.direction === "upwards") {
            start_y = 0;
            end_y = -500;
          }

          var animate = function () {
            // setup animation of specified block "obj"
            // calculate distance of animation
            var distance = Math.abs(end_y - parseInt(obj.css("top")));

            //alert("animate " + obj.css("top") + "-> " + end_y + " " + distance);

            //duration will be distance / speed
            obj.animate(
              { top: end_y }, //scroll upwards
              (1000 * distance) / options.speed,
              "linear",
              function () {
                // scroll to start position
                obj.css("top", start_y);
                animate();
              }
            );
          };

          obj.find(".column_container").clone().appendTo(obj);

          obj.css("top", start_y);
          animate(); // start animation
        });
      };
    })(jQuery);

    if (props.bias === 0) {
      jQuery("#example" + (props.bias + 1)).loopScroll({ speed: 10 });
      jQuery("#example" + (props.bias + 2)).loopScroll({
        direction: "downwards",
        speed: 13,
      });
    } else {
      jQuery("#example" + (props.bias + 2)).loopScroll({ speed: 12 });
      jQuery("#example" + (props.bias + 1)).loopScroll({
        direction: "downwards",
        speed: 17,
      });
    }
    // jQuery("#example3").loopScroll();
    // jQuery("#example4").loopScroll({ direction: "downwards", speed: 120 });
    // jQuery("#example5").loopScroll();
  });
  return (
    <div className="gallery2">
      <div className="gallery1" id={"example" + (props.bias + 1)}>
        <div className="gallery">
          {props.bias === 0 ? (
            <div className="column_container">
              <Card image={images[0]} />
              <Card image={images[1]} />
              <Card image={images[2]} />
              <Card image={images[3]} />
              <Card image={images[4]} />
              <Card image={images[5]} />
              {/* <Card image={images[7]} /> */}
            </div>
          ) : (
            <div className="column_container">
              <Card image={images[6]} />

              <Card image={images[8]} />
              {/* <Card image={images[9]} /> */}
              {/* <Card image={images[10]} /> */}
              {/* <Card image={images[11]} /> */}
              <Card image={images[12]} />
              <Card image={images[13]} />
              <Card image={images[14]} />
            </div>
          )}
        </div>
      </div>
      <div className="gallery1" id={"example" + (props.bias + 2)}>
        <div className="gallery">
          {props.bias !== 0 ? (
            <div className="column_container">
              <Card image={images[0]} />
              <Card image={images[1]} />
              <Card image={images[2]} />
              <Card image={images[3]} />
              <Card image={images[4]} />
              <Card image={images[5]} />
              {/* <Card image={images[7]} /> */}
            </div>
          ) : (
            <div className="column_container">
              <Card image={images[6]} />
              <Card image={images[8]} />
              {/* <Card image={images[9]} /> */}
              {/* <Card image={images[10]} /> */}
              {/* <Card image={images[11]} /> */}
              <Card image={images[12]} />
              <Card image={images[13]} />
              <Card image={images[14]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
