import React from "react";
import LineChart from "../Components/LineChart";
import TableIndicesCategories from "../Components/TableIndicesCategories";
import MyMap from "../Components/MyMap";

function ChartsView({ data }) {
  // todo update station name based on user's location
  const stationName = ["north"];
  return (
    <div className="container mx-auto py-3">
      <MyMap />
      <div className="flex justify-center">
        Last 24-h readings for the {stationName} station.
      </div>
      <LineChart
        data={data}
        pollutants={["pm10_sub_index", "pm25_sub_index", "no2_one_hour_max"]}
        stationName={stationName}
        footNote={[
          "* computed on 24-hour average Particulate Matter (PM) 10 reading (µg/m3)",
          "** computed on 24-hour average Particulate Matter (PM) 2.5 reading (µg/m3)",
        ]}
      />
      <LineChart
        data={data}
        pollutants={["o3_sub_index", "co_sub_index", "so2_sub_index"]}
        stationName={stationName}
        footNote={[
          "* computed based on 8-hour average Ozone reading (µg/m3)",
          "** computed on 8-hour average Carbon Monoxide (CO) reading(mg/m3)",
          "*** computed on 24-hour average Sulphur Dioxide (SO2) reading (µg/m3)",
        ]}
      />
      <TableIndicesCategories />
    </div>
  );
}

export default ChartsView;
