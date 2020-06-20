import React, { useState } from "react";
import LineChart from "../Components/LineChart";
import TableIndicesCategories from "../Components/TableIndicesCategories";
import { ClosestStation, PollutantClass } from "../Functions/Utils";
import Loader from "../Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ChartsView({ data, locationUser }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [stationName, setStationName] = useState("central");

  function DropDownItem({ item }) {
    return (
      <span
        className="block py-1 px-8 hover:bg-gray-200 capitalize"
        onClick={() => {
          setDropDownOpen(!dropDownOpen);
          setStationName(item);
        }}
      >
        {item}
      </span>
    );
  }

  let content = "";

  if (data.error) {
    content = <div>Could not fetch API</div>;
  }

  if (data.loading) {
    content = <Loader />;
  }

  if (locationUser.data && data.data) {
    content = (
      <div className="container mx-auto py-3">
        <div className="flex justify-center content-center">
          <p className="py-2 mr-2">Last 24-h data. Station:</p>
          <div className="relative">
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              <span className="capitalize mx-2">{stationName}</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div
              className={
                "bg-gray-100 absolute right-0 rounded mt-1 py-1 text-center shadow-md" +
                (dropDownOpen ? "" : " hidden")
              }
            >
              <DropDownItem item={"north"} />
              <DropDownItem item={"central"} />
              <DropDownItem item={"south"} />
              <DropDownItem item={"east"} />
              <DropDownItem item={"west"} />
            </div>
          </div>
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

  return content;
}

export default ChartsView;
