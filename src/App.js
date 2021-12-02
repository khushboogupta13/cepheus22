import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Events from "./components/Events/Events";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import Sponsorship from "./components/Sponsorship/Sponsorship";
import IndividualEvent from "./components/IndividualEvent/IndividualEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Route , Switch} from "react-router-dom";
import SiteContainer from "./siteContainer";


const App = () =>{
  return (
      <div className="App">
      <Switch>
        <Route path='/' exact>
          <SiteContainer />
        </Route>
        <Route
          path="/event/:eventName" exact>
                <IndividualEvent />
          </Route>
          <Route
          path="/workshops/:eventName" exact>
                <IndividualEvent />
          </Route>
          <Route
          path="/talks/:eventName" exact>
                <IndividualEvent />
          </Route>
        </Switch>
      </div>  
  );
}

export default App;
