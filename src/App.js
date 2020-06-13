import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import CurrentReadingsView from "./Views/CurrentReadingsView";
import ChartsView from "./Views/ChartsView";
import { useHttpRequest } from "./Hooks/HttpRequest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGetLocation } from "./Hooks/GetLocation";
import { useGetClosestStation } from "./Hooks/GetClosestStation";

function App() {
  let currentDate = new Date();

  // convert to SG time
  currentDate.setHours(currentDate.getHours() + 8);

  // the API does not provide data at midnight hence I am querying the previous day
  if (currentDate.getHours() === 0) {
    currentDate.setHours(currentDate.getHours() - 24);
  }

  const todayDate = currentDate.toISOString().split("T")[0];

  const url = "https://api.data.gov.sg/v1/environment/psi?date=" + todayDate;

  const psiData = useHttpRequest(url);

  const location = useGetLocation(url);

  const psiStation = useGetClosestStation(psiData, location);

  return (
    <Router>
      <div className="relative pb-10 min-h-screen">
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <CurrentReadingsView data={psiData} />
          </Route>
          <Route path="/charts">
            <ChartsView data={psiData} />
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
