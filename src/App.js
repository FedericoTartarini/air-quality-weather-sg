import React, { Suspense, lazy, useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import { useHttpRequest } from "./Hooks/HttpRequest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";

import WikiPM25 from "./Views/WikiPM25";
import WikiWeather from "./Views/WikiWeather";

const AboutView = lazy(() => import("./Views/AboutView"));
const WikiPSI = lazy(() => import("./Views/WikiPSI"));
const MapPollutionView = lazy(() => import("./Views/MapPollutionView"));
const ForecastView = lazy(() => import("./Views/ForecastView"));
const CurrentReadingsView = lazy(() => import("./Views/CurrentReadingsView"));
const ChartsView = lazy(() => import("./Views/ChartsView"));

function App() {
  let tzOffset = new Date().getTimezoneOffset(); //offset in milliseconds
  tzOffset = tzOffset - (480 + tzOffset);
  let isoString = new Date(Date.now() - tzOffset * 60000)
    .toISOString()
    .substr(0, 19);

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
    let tzOffset = new Date().getTimezoneOffset(); //offset in milliseconds
    tzOffset = tzOffset - (360 + tzOffset);
    isoString = new Date(Date.now() - tzOffset * 60000)
      .toISOString()
      .substr(0, 19);
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

  const [locationUser, setLocationUser] = useState({
    loading: false,
    data: {
      accuracy: 2678,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: 1.3271039999999998,
      longitude: 103.841792,
      speed: null,
    },
    error: false,
  });
  const [showRequestLocButton, setShowRequestLocButton] = useState(true);

  // todo for the moment the try and catch below has fixed the issue on Safari but needs to be fixed
  useEffect(() => {
    try {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            RequestedUseLocation();
            setShowRequestLocButton(false);
          } else {
            console.log("permission not granted");
          }
          // Don't do anything if the permission was denied.
        });
    } catch {}
  }, [isoString]);

  function getCoordinates(position) {
    setLocationUser({
      loading: false,
      data: position.coords,
      error: false,
    });
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert(
          "You denied the request for Geolocation.\n" +
            "Please allow us to access your location if you want to see the data for your current location."
        );
        break;
      case error.POSITION_UNAVAILABLE:
        alert(
          "Location information is unavailable.\n" +
            "We are assuming you are in the center of Singapore"
        );
        break;
      case error.TIMEOUT:
        alert(
          "The request to get user location timed out.\n" +
            "We are assuming you are in the center of Singapore"
        );
        break;
      case error.UNKNOWN_ERR:
        alert(
          "An unknown error occurred.\n" +
            "We are assuming you are in the center of Singapore"
        );
        break;
      default:
        alert(
          "An unknown error occurred.\n" +
            "We are assuming you are in the center of Singapore"
        );
    }
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0,
  };

  function RequestedUseLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        showError,
        options
      );
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }

  // todo see if I can add a route with sitemap

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
                RequestedUseLocation={RequestedUseLocation}
                showRequestLocButton={showRequestLocButton}
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
            <Route path="/psi">
              <WikiPSI />
            </Route>
            <Route path="/pm25">
              <WikiPM25 />
            </Route>
            <Route path="/weather">
              <WikiWeather />
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
