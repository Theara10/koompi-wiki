import React from "react";
import Introduction from "../pages/Introduction";
import SearchBox from "./SearchBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome";

function Main() {
  return (
    <div className="main">
      <SearchBox />
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/introduction" component={Introduction} exact />
      </Switch>
    </div>
  );
}

export default Main;
