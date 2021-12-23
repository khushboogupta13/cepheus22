import "./Sponsorship.css";
import leftImage from "./asset/leftSponsorImage.svg";
import rightImage from "./asset/rightSponsorImage.svg";
import heading from "./asset/sponsorText.svg";
import Sponsor from "./Sponsor";
import React from "react";

const hoverRobotics =
  "https://res.cloudinary.com/dijzrwmrb/image/upload/q_auto:eco/v1639985612/images/hover-wb_c07nl5.webp";
const mrkTk =
  "https://res.cloudinary.com/cepheus22/image/upload/v1640179039/samples/WHITE-LOGO-2_hf0reo.webp";

const cmpM =
  "https://res.cloudinary.com/cepheus22/image/upload/v1640178112/samples/Campus_memories_logo_c2w0sf.webp";

const gfg =
  "https://res.cloudinary.com/cepheus22/image/upload/v1640179091/samples/GFG_LOGO-3_1_kxtdlj.webp";

const mentX =
  "https://res.cloudinary.com/dijzrwmrb/image/upload/q_auto:eco/v1639985612/images/mentor-wb_m53utr.webp";

const ythInc =
  "https://res.cloudinary.com/dijzrwmrb/image/upload/c_scale,q_auto:eco,w_1920/v1640066761/images/Yi_New_Logo_White_u5mpsl.webp";

const xpaAi =
  "https://res.cloudinary.com/cepheus22/image/upload/v1640178332/samples/WhatsApp_Image_2021-12-19_at_11.29.54_AM_hl7g7r.webp";

const stkGro =
  "https://res.cloudinary.com/cepheus22/image/upload/v1640235129/samples/StockGro_logo_-_Black_Font_-_White_Background_-_Copy_uxctia.png";

const grbOn =
  "https://res.cloudinary.com/cepheus22/image/upload/v1640235760/grabonin_xxkr7d.jpg";

const sponsH = [
  {
    name: "Title Sponsor",
    cls: "title-s",
    key: 1,
    companies: [{ logo: xpaAi, name: "X0PA AI", webL: "https://x0pa.com/" }],
    isN: true,
  },
  {
    name: "Co-Sponsors",
    cls: "co-s",
    key: 2,
    companies: [
      {
        logo: gfg,
        name: "GEEKSFORGEEKS",
        webL: "https://www.geeksforgeeks.org/",
      },
    ],
    isN: true,
  },
  // {
  //   name: "Associate Sponsors",
  //   cls: "ass-s",
  //   key: 3,
  //   companies: [
  //     { logo: hoverRobotics, name: "HOVER ROBOTICS" },
  //     { logo: hoverRobotics, name: "HOVER ROBOTICS" },
  //   ],
  // },
  {
    name: "Merchandise-Sponsors",
    cls: "merch-s",
    key: 4,
    companies: [
      {
        logo: cmpM,
        name: "Campus Memories",
        webL: "http://cepheusmemories.co.in/",
      },
    ],
    isN: false,
  },
  {
    name: "Event Sponsors",
    cls: "event-s",
    key: 5,
    companies: [
      {
        logo: mrkTk,
        name: "Marktechpost",
        webL: "https://www.marktechpost.com/",
      },
      {
        logo: stkGro,
        name: "Stock Gro",
        webL: "https://www.stockgro.club/",
      },
    ],
    isN: false,
  },
  // {
  //   name: "Media Partner",
  //   cls: "media-s",
  //   key: 6,
  //   companies: [{ logo: hoverRobotics, name: "HOVER ROBOTICS" }],
  // },
  {
    name: "Savings Partner",
    cls: "saving-s",
    key: 7,
    companies: [
      { logo: grbOn, name: "Grab-On", webL: "https://www.grabon.in/" },
    ],
    isN: false,
  },
  {
    name: "Coupons Partner",
    cls: "cpn-s",
    key: 8,
    companies: [
      {
        logo: hoverRobotics,
        name: "Hover Robotics",
        webL: "https://hoverrobotix.com/",
      },
    ],
    isN: false,
  },
];

const Sponsorship = () => {
  return (
    <div className="sponsors" id="sponsors">
      <div className="headingContainer">
        <img src={heading} />
      </div>
      <div className="imagesContainer">
        <div className="lImage">
          <img src={leftImage} />
        </div>
        <div className="sponsors-div">
          {sponsH.map((elem) => (
            <Sponsor details={elem} />
          ))}
        </div>
        <div className="rImage">
          <img src={rightImage} />
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
