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
          var text_height = obj.find(".column_container").height();
          var start_y, end_y;
          if (options.direction == "downwards") {
            start_y = -200;
            end_y = 0;
          } else if (options.direction == "upwards") {
            start_y = 0;
            end_y = -200;
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

    if (props.bias == 0) {
      jQuery("#example" + (props.bias + 1)).loopScroll({ speed: 10 });
      jQuery("#example" + (props.bias + 2)).loopScroll({
        direction: "downwards",
        speed: 15,
      });
    } else {
      jQuery("#example" + (props.bias + 2)).loopScroll({ speed: 20 });
      jQuery("#example" + (props.bias + 1)).loopScroll({
        direction: "downwards",
        speed: 15,
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
          <div className="column_container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="gallery1" id={"example" + (props.bias + 2)}>
        <div className="gallery">
          <div className="column_container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
