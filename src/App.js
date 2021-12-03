import "./App.css";
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
