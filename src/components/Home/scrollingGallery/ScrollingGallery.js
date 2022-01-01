import React, { useEffect } from "react";
import "./ScrollingGallery.css";
import jQuery from "jquery";

let images = [
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742313/cepheus22/NewPosters/Treasure_Hunt_qwu3g8.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742314/cepheus22/NewPosters/Fizzbuzz_s3wnm3.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742313/cepheus22/NewPosters/beet_the_street_aq245k.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742313/cepheus22/NewPosters/Arduino_s_trail_f1mjle.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742315/cepheus22/NewPosters/Lorem_Imsum_tzpruk.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742313/cepheus22/NewPosters/capture_the_flag_dh3vsa.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742313/cepheus22/NewPosters/buider_bridge_ilkdaa.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742314/cepheus22/NewPosters/GFG_webinar_xsg0zl.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742315/cepheus22/NewPosters/Make_a_career_in_robotics_tbjdmk.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742315/cepheus22/NewPosters/Play_with_mirobit_byln3f.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742314/cepheus22/NewPosters/Hack_the_game_kidtgb.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742315/cepheus22/NewPosters/ML_hackathon_vqmn7y.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742314/cepheus22/NewPosters/hack_overflow_no2syo.webp",
  "https://res.cloudinary.com/dcydix7rc/image/upload/c_scale,q_auto:eco,w_500/v1640742314/cepheus22/NewPosters/Circulital_dilemma_xkyjwa.webp",
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
