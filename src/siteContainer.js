import React from 'react';
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Events from "./components/Events/Events";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import Sponsorship from "./components/Sponsorship/Sponsorship";

const SiteContainer = () => {
      return(
      <div>
        <Navbar />
          <Home />
          <AboutUs />
          <Events />
          <SchedulePage />
          <FAQ />
          <Sponsorship />
          <ContactUs />
      </div>
    )
      }

export default SiteContainer;