import React, { useEffect } from "react";
import "./ScrollingGallery.css";
import jQuery from "jquery";

let images = [
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194958/cepheus22/posters/arduino_trial_ndjgnz.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194958/cepheus22/posters/treasure_hunt_b1eu2y.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194957/cepheus22/posters/stratathon_prpgjl.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194957/cepheus22/posters/squid_ctf_qpjp0x.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194956/cepheus22/posters/robotics_career_vigass.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194956/cepheus22/posters/play_microbit_hxq2b2.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194955/cepheus22/posters/hackoverflow_jd2aky.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194955/cepheus22/posters/lorem_ipsum_dniwh5.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194955/cepheus22/posters/hack_the_game_qua2bi.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194955/cepheus22/posters/fizzbuzz_cyckhr.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194953/cepheus22/posters/circuital_dilemma_wcasj9.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194953/cepheus22/posters/builder_bridge_dtec3n.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194953/cepheus22/posters/beat_the_street_h8h5ez.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640194953/cepheus22/posters/bash_it_wf8mz7.webp",
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
    (function($, undefined) {
      $.fn.loopScroll = function(p_options) {
        var options = $.extend(
          {
            direction: "upwards",
            speed: 60,
          },
          p_options
        );

        return this.each(function() {
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

          var animate = function() {
            // setup animation of specified block "obj"
            // calculate distance of animation
            var distance = Math.abs(end_y - parseInt(obj.css("top")));

            //alert("animate " + obj.css("top") + "-> " + end_y + " " + distance);

            //duration will be distance / speed
            obj.animate(
              { top: end_y }, //scroll upwards
              (1000 * distance) / options.speed,
              "linear",
              function() {
                // scroll to start position
                obj.css("top", start_y);
                animate();
              }
            );
          };

          obj
            .find(".column_container")
            .clone()
            .appendTo(obj);

          obj.css("top", start_y);
          animate(); // start animation
        });
      };
    })(jQuery);

    if (props.bias === 0) {
      jQuery("#example" + (props.bias + 1)).loopScroll({ speed: 10 });
      jQuery("#example" + (props.bias + 2)).loopScroll({
        direction: "downwards",
        speed: 20,
      });
    } else {
      jQuery("#example" + (props.bias + 2)).loopScroll({ speed: 20 });
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
              <Card image={images[6]} />
            </div>
          ) : (
            <div className="column_container">
              <Card image={images[7]} />
              <Card image={images[8]} />
              <Card image={images[9]} />
              <Card image={images[10]} />
              <Card image={images[11]} />
              <Card image={images[12]} />
              <Card image={images[13]} />
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
              <Card image={images[6]} />
            </div>
          ) : (
            <div className="column_container">
              <Card image={images[7]} />
              <Card image={images[8]} />
              <Card image={images[9]} />
              <Card image={images[10]} />
              <Card image={images[11]} />
              <Card image={images[12]} />
              <Card image={images[13]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
