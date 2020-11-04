import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Body from "../components/body";
import Horarios from "./horarios";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Body}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/horarios" component={Horarios}></Route>
    </Switch>
  );
}

export default Routes;
