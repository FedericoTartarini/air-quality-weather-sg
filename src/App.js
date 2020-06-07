import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CurrentReadingsView from "./Views/CurrentReadingsView";
import { useHttpRequest } from "./Hooks/HttpRequest";

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

  return (
    <div className="relative pb-10 min-h-screen">
      <Header />
      <div className="py-5">
        <CurrentReadingsView data={psiData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
