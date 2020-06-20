import React, { useEffect, useState } from "react";
import MapWeather from "../Components/MapWeather";
import DropDown from "../Components/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

function MapForecast2H({ data }) {
  const [toggle, setToggle] = useState(true);

  // useEffect(() => {}, [data]);

  return (
    <div>
      <div className="container mx-auto my-2 text-center">
        {" "}
        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold p-2 rounded inline-flex items-center justify-evenly"
          onClick={() => setToggle(!toggle)}
        >
          <span className="text-right w-32 mr-6">
            {toggle ? "2-h Forecast" : "24-h Forecast"}
          </span>
          <FontAwesomeIcon
            icon={toggle ? faToggleOn : faToggleOff}
            size={"1x"}
            className="mr-8"
          />
        </button>
      </div>
      <div>
        <MapWeather data={data} />
      </div>
    </div>
  );
}

export default MapForecast2H;
