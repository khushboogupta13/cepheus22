import "./App.css";
import IndividualEvent from "./components/IndividualEvent/IndividualEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Login from './components/LogIn/Login';

import {
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";
import SiteContainer from "./siteContainer";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import { nodeName } from "jquery";

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Isloaded", isLoading);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Isloaded", isLoading);
    }, 5000);
  }, []); // here

  function headerView() {
    console.log("window location", location.pathname === "/callback/");
    if (location.pathname === "/callback/") {
      let paramString = location.search.split("?")[1];
      let params_arr = paramString.split("&");
      console.log(params_arr[0], params_arr[1]);
      let playerId;
      let is_profile_complete;

      let _pair = params_arr[0].split("=");
      playerId = _pair[1];

      _pair = params_arr[1].split("=");
      is_profile_complete = _pair[1];

      //console.log("callback  called",localStorage.getItem('id'))
      if(playerId && is_profile_complete === 'true'){
        localStorage.setItem('id', playerId);
        localStorage.setItem('is_profile_complete', 'true');
        history.push("/");
      } else if (playerId && is_profile_complete === "false") {
        history.push(`/completeProfile/?${playerId} `);
      }
    }
  }
  useEffect(() => {
    headerView();
  });

  return (
    <div className="App">
      {isLoading && <Loader />}
      <>
        <Toaster />
        <Switch>
          <Route path="/" exact>
            <SiteContainer />
          </Route>
          <Route path="/completeProfile" exact>
            <Login />
          </Route>
          <Route path="/event/:eventName" exact>
            <IndividualEvent />
          </Route>
          <Route path="/workshops/:eventName" exact>
            <IndividualEvent />
          </Route>
          <Route path="/talks/:eventName" exact>
            <IndividualEvent />
          </Route>
        </Switch>
      </>
      )
    </div>
  );
};

export default App;
