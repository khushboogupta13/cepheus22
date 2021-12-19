import "./App.css";
import IndividualEvent from "./components/IndividualEvent/IndividualEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Login from './components/LogIn/Login'
import {
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";
import SiteContainer from "./siteContainer";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const history = useHistory();
  const location = useLocation();

  function headerView() {
    console.log("window location", location.pathname === "/callback/");
    if (location.pathname === "/callback/") {
      let paramString = location.search.split('?')[1];
      let params_arr = paramString.split('&');
      console.log(params_arr[0], params_arr[1]);
      let playerId;
      let is_profile_complete;
      
        let _pair = params_arr[0].split('=');
        playerId = _pair[1];

        _pair = params_arr[1].split('=');
        is_profile_complete = _pair[1];
        
      
      //console.log("callback  called",localStorage.getItem('id'))
      toast.success("Successfully Loged In");
      if(playerId && is_profile_complete === 'true'){
        history.push("/");
      }else if(playerId && is_profile_complete === 'false'){
            history.push(`/completeProfile/?${playerId} `);
      }
      
    }
  }
  useEffect(() => {
    headerView();
  });

  return (
    <div className="App">
      <Toaster />
      <Switch>
        <Route path="/" exact>
          <SiteContainer />
        </Route>
        <Route path="/completeProfile">
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
    </div>
  );
};

export default App;
