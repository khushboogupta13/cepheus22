import "./Sponsorship.css";
import leftImage from "./asset/leftSponsorImage.svg";
import rightImage from "./asset/rightSponsorImage.svg";
import heading from "./asset/sponsorText.svg";
import Sponsor from "./Sponsor";
import React from "react";
const hoverRobotics =
  "https://res.cloudinary.com/dijzrwmrb/image/upload/q_auto:eco/v1639985612/images/hover-wb_c07nl5.webp";

const sponsH = [
  {
    name: "Title Sponsor",
    cls: "title-s",
    key: 1,
    companies: [{ logo: hoverRobotics, name: "X0PA AI" }],
    isN: true,
  },
  {
    name: "Co-Sponsors",
    cls: "co-s",
    key: 2,
    companies: [{ logo: hoverRobotics, name: "GEEKSFORGEEKS" }],
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
    companies: [{ logo: hoverRobotics, name: "Campus Memories" }],
    isN: false,
  },
  {
    name: "Event Sponsors",
    cls: "event-s",
    key: 5,
    companies: [{ logo: hoverRobotics, name: "Marktechpost" }],
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
    companies: [{ logo: hoverRobotics, name: "Grab-On" }],
    isN: false,
  },
  {
    name: "Coupons Partner",
    cls: "cpn-s",
    key: 8,
    companies: [{ logo: hoverRobotics, name: "Hover Robotics" }],
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
