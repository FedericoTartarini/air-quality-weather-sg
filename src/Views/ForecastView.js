import React, { useState } from "react";
import MapWeather2H from "../Components/MapWeather2H";
import MapWeather24H from "../Components/MapWeather24H";
import RainViewer from "../Components/RainViewer";

function ForecastView({ dataFor2H, dataFor24H }) {
  const [buttonSelection, setButtonSelection] = useState("24-h Forecast");

  let subViews = ["24-h Forecast", "Rain Radar"];

  if (dataFor2H.data) {
    if (Object.entries(dataFor2H.data.items[0]).length !== 0) {
      subViews.push("2-h Forecast");
    }
  }

  function LinkViewSelector({ text }) {
    return (
      <li className="-mb-px mr-1">
        <span
          className={
            "bg-white inline-block text-gray-500 py-2 px-4 " +
            (buttonSelection === text
              ? " border-l border-t border-r rounded-t text-gray-700 font-semibold"
              : " border-b hover:text-gray-800 ")
          }
          onClick={() => setButtonSelection(text)}
        >
          {text}
        </span>
      </li>
    );
  }

  function ViewSelector() {
    return (
      <div className="container mx-auto my-2 text-center text-sm">
        <ul className="flex border-b justify-center">
          {subViews.map((view) => (
            <LinkViewSelector key={view} text={view} />
          ))}
        </ul>
      </div>
    );
  }

  function View({ selection }) {
    if (selection === "2-h Forecast") {
      return <MapWeather2H data={dataFor2H} />;
    } else if (selection === "24-h Forecast") {
      return <MapWeather24H data={dataFor24H} />;
    } else {
      return <RainViewer />;
    }
  }

  return (
    <div>
      <ViewSelector />
      <View selection={buttonSelection} />
    </div>
  );
}

export default ForecastView;
