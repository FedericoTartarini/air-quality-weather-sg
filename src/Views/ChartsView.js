import React from "react";
import LineChart from "../Components/LineChart";

function ChartsView({ data }) {
  // todo update station name based on user's location
  const stationName = ["north"];
  return (
    <div className="container mx-auto py-3">
      <div className="flex justify-center">
        Last 24-h readings for the {stationName} station.
      </div>
      <LineChart
        data={data}
        pollutants={["pm10_sub_index", "pm25_sub_index", "no2_one_hour_max"]}
        stationName={stationName}
      />
      <LineChart
        data={data}
        pollutants={["o3_sub_index", "co_sub_index", "so2_sub_index"]}
        stationName={stationName}
      />
    </div>
  );
}

export default ChartsView;
