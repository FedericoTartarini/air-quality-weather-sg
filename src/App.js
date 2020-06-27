import React, { Suspense, lazy, useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import { useHttpRequest } from "./Hooks/HttpRequest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGetLocation } from "./Hooks/GetLocation";
import Loader from "./Components/Loader";

const AboutView = lazy(() => import("./Views/AboutView"));
const MapPollutionView = lazy(() => import("./Views/MapPollutionView"));
const ForecastView = lazy(() => import("./Views/ForecastView"));
const CurrentReadingsView = lazy(() => import("./Views/CurrentReadingsView"));
const ChartsView = lazy(() => import("./Views/ChartsView"));

function App() {
  let currentDate = new Date();
  currentDate = currentDate - currentDate.getTimezoneOffset() * 60000;
  currentDate = new Date(currentDate).toLocaleString("en-US", {
    timeZone: "Asia/Singapore",
  });
  let isoString = new Date(currentDate).toISOString().substr(0, 19);

  const urlRH =
    "https://api.data.gov.sg/v1/environment/relative-humidity?date_time=" +
    isoString;
  const urlTmp =
    "https://api.data.gov.sg/v1/environment/air-temperature?date_time=" +
    isoString;
  const urlWeather2H =
    "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" +
    isoString;
  const urlWeather24H =
    "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date_time=" +
    isoString;

  // if it is midnight I am querying the previous day
  if (isoString.split("T")[1].split(":")[0] === "00") {
    currentDate = new Date();
    currentDate = currentDate - currentDate.getTimezoneOffset() * 60000;
    currentDate = new Date(currentDate).toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    isoString = new Date(currentDate).toISOString().substr(0, 19);
  }

  const dateString = isoString.split("T")[0];
  const urlPSI =
    "https://api.data.gov.sg/v1/environment/psi?date=" + dateString;
  const urlPM25 =
    "https://api.data.gov.sg/v1/environment/pm25?date=" + dateString;

  const dataPSI = useHttpRequest(urlPSI);
  const dataTmp = useHttpRequest(urlTmp);
  const dataRH = useHttpRequest(urlRH);
  const dataPM25 = useHttpRequest(urlPM25);
  const dataFor2H = useHttpRequest(urlWeather2H);
  const dataFor24H = useHttpRequest(urlWeather24H);
  const locationUser = useGetLocation(urlPSI);

  // todo select a better color palette for icons and website

  return (
    <Router basename="/air-quality-weather-sg">
      <div className="relative pb-10 min-h-screen">
        <NavigationBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <CurrentReadingsView
                dataPSI={dataPSI}
                dataTmp={dataTmp}
                dataRH={dataRH}
                dataFor2H={dataFor2H}
                dataFor24H={dataFor24H}
                dataPM25={dataPM25}
                locationUser={locationUser}
              />
            </Route>
            <Route path="/charts">
              <ChartsView data={dataPSI} locationUser={locationUser} />
            </Route>
            <Route path="/forecast">
              <ForecastView dataFor2H={dataFor2H} dataFor24H={dataFor24H} />
            </Route>
            <Route path="/mapPollution">
              <MapPollutionView data={dataPSI} />
            </Route>
            <Route path="/about">
              <AboutView />
            </Route>
          </Switch>
        </Suspense>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
