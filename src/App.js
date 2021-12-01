import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Events from "./components/Events/Events";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import Sponsorship from "./components/Sponsorship/Sponsorship";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Events />
      <SchedulePage />
      <FAQ />
      <Sponsorship />
      <ContactUs />
    </div>
  );
}

export default App;
