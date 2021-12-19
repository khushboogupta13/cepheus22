import "./App.css";
import IndividualEvent from "./components/IndividualEvent/IndividualEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
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

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Isloaded", isLoaded);
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, []); // here

  function headerView() {
    console.log("window location", location.pathname === "/callback/");
    if (location.pathname === "/callback/") {
      localStorage.setItem("token", location.search.substring(1));
      //console.log("callback  called")
      toast.success("Successfully Loged In");
      history.push("/");
    }
  }
  useEffect(() => {
    headerView();
  });

  if (isLoaded) {
    return (
      <div className="App">
        <Toaster />
        <Switch>
          <Route path="/" exact>
            <SiteContainer />
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
  } else {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }
};

export default App;
