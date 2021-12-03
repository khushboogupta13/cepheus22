import "./App.css";
import IndividualEvent from "./components/IndividualEvent/IndividualEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React,{useEffect} from "react";
import { Route , Switch, useParams, useHistory,useLocation} from "react-router-dom";
import SiteContainer from "./siteContainer";



const App = () =>{
  const history = useHistory();
  const location = useLocation();
  
  function headerView() {
    console.log("window location", location.pathname === "/callback/")
    if(location.pathname === "/callback/"){
      localStorage.setItem('token', location.search.substring(1));
      //console.log("callback  called",location.search.substring(1))
      history.push("/");
    }
  }
  useEffect(() => {
    headerView();    
  })
  
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
