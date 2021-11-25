import React from "react";
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './swiper.css'

const Slider = ({ settings, children }) => {
      const params = {
            pagination: {
                  el: ".swiper-pagination",
                  clickable: true
            },
            navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
            },
            spaceBetween: 10,
            ...settings
            };

      return <Swiper {...params}>{children}</Swiper>;
};

export default Slider;
