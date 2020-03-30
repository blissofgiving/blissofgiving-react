import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from "../component/Home";
import SignIn from "../component/SignIn";
import FundRaiser from "../component/FundRaiser/FundRaiser";

 function Routers() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
              
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/faund-raiser">
              <FundRaiser />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  export default Routers