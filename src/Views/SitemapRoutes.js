import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/air-quality-weather-sg" />
    <Route path="/air-quality-weather-sg/air-pollution-singapore-haze" />
    <Route path="/air-quality-weather-sg/weather-forecast-singapore" />
    <Route path="/air-quality-weather-sg/map-air-pollution-singapore-haze" />
    <Route path="/air-quality-weather-sg/about-air-quality-and-weather-sg" />
    <Route path="/air-quality-weather-sg/pollutant-standards-index-singapore" />
    <Route path="/air-quality-weather-sg/pm25" />
    <Route path="/air-quality-weather-sg/weather-singapore" />
  </Switch>
);
