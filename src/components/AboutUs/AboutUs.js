import React, { Component } from "react";
import "./About.css";
import aboutLogo from "./assets/aboutLogo.svg";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div className="about" id="abtUs">
        <img
          src={aboutLogo}
          className={
            this.state.width > 500 ? "aboutLogo" : "aboutInvisibleLogo"
          }
        />
        <div
          className={
            this.state.width > this.state.height
              ? "aboutText"
              : "aboutText_vertical"
          }
        >
          <p>
            IIT Goa, only six years into its inception, has already grown to be
            a highly sought-after institution for engineering aspirants
            throughout the country, nestled into the vast and beautiful campus
            of GEC in Farmagudi with a vibrant population of over three thousand
            students and five hundred faculty members. With Cepheus, we strive
            to achieve excellence in technical endeavours; however, we are not
            untouched by the rich and unique culture of Goa, which will be
            reflected in the fest’s various subtleties.
          </p>
          <p>
            Cepheus is a celebration of our technical prowess - not just as an
            institution, but as a country. It aims at instilling a sense of
            collective learning by being a melting pot of ideas open to students
            of various institutions and disciplines. With intriguing events and
            competitions, along with resourceful workshops by experts and
            professionals, we wish to make Cepheus ‘22 a memorable experience
            for all concerned.
          </p>
        </div>
      </div>
    );
  }
}
