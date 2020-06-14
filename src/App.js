import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import CurrentReadingsView from "./Views/CurrentReadingsView";
import ChartsView from "./Views/ChartsView";
import { useHttpRequest } from "./Hooks/HttpRequest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGetLocation } from "./Hooks/GetLocation";

function App() {
  let currentDate = new Date();
  currentDate = currentDate - currentDate.getTimezoneOffset() * 60000;
  currentDate = new Date(currentDate);
  let isoString = currentDate.toISOString().substr(0, 19);

  const urlRH =
    "https://api.data.gov.sg/v1/environment/relative-humidity?date_time=" +
    isoString;
  const urlTmp =
    "https://api.data.gov.sg/v1/environment/air-temperature?date_time=" +
    isoString;
  const urlWeather2H =
    "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=" +
    isoString;

  // if it is midnight I am querying the previous day
  if (isoString.split("T")[1].split(":")[0] === "00") {
    currentDate = currentDate - 12 * 60 * 60000;
    currentDate = new Date(currentDate);
    isoString = currentDate.toISOString().substr(0, 19);
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

  const locationUser = useGetLocation(urlPSI);

  // todo get latest readings for that PSI station

  return (
    <Router>
      <div className="relative pb-10 min-h-screen">
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <CurrentReadingsView
              dataPSI={dataPSI}
              dataTmp={dataTmp}
              dataRH={dataRH}
              dataFor2H={dataFor2H}
              dataPM25={dataPM25}
              locationUser={locationUser}
            />
          </Route>
          <Route path="/charts">
            <ChartsView data={dataPSI} />
          </Route>
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
