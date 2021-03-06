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
import Cause from "../component/Cause/Cause";
import SignUp from "../component/Register";
import AboutUs from "../component/AbouUs";
import Payment from "../component/Payment/Payment";
import UserDetails from "../component/User/UserDetails";
import DataTable from "./DataTable";
import EditProfile from "../component/EditProfile"

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
          <Route path="/cause">
            <Cause />
          </Route>
          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/user-details">
            <UserDetails/>
          </Route>
          <Route path="/data-table">
            <DataTable/>
          </Route>
          <Route path="/edit-profile">
            <EditProfile></EditProfile>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Routers