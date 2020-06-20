import React from "react";
import MapWeather from "../Components/MapWeather";

function MapForecast2H({ data }) {
  return (
    <div>
      <MapWeather data={data} />
    </div>
  );
}

export default MapForecast2H;
