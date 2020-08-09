import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/air-quality-weather-sg"></Route>
    <Route path="/air-quality-weather-sg/charts"></Route>
    <Route path="/air-quality-weather-sg/forecast"></Route>
    <Route path="/air-quality-weather-sg/mapPollution"></Route>
    <Route path="/air-quality-weather-sg/about"></Route>
    <Route path="/air-quality-weather-sg/psi"></Route>
    <Route path="/air-quality-weather-sg/pm25"></Route>
    <Route path="/air-quality-weather-sg/weather"></Route>
  </Switch>
);
