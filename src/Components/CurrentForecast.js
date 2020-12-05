import React from "react";
import {
  ClosestStation,
  ForecastToIcon,
  TwoHForecastsAtUserLocation,
} from "../Functions/Utils";
import Loader from "./Loader";

function CurrentForecast({ dataFor2H, dataFor24H, locationUser, station }) {
  let content = "";
  if (dataFor2H.error || dataFor24H.error || locationUser.error) {
    content = (
      <p className="p-5">
        Sorry. data.gov.sg is under maintenance and we could not download the
        current weather forecasts. Please try again later.
      </p>
    );
  } else if (dataFor2H.loading || dataFor24H.loading || locationUser.loading) {
    content = <Loader />;
  } else if (dataFor2H.data && dataFor24H.data && locationUser.data) {
    let text;
    let stringForecast;
    let iconSource;

    if (Object.entries(dataFor2H.data.items[0]).length === 0) {
      text = "next 6-h weather forecast";
      stringForecast = dataFor24H.data.items[0].periods[0].regions[station];
      iconSource = ForecastToIcon(stringForecast);
    } else {
      text = "next 2-hour weather forecast";
      stringForecast = TwoHForecastsAtUserLocation(
        dataFor2H.data,
        ClosestStation(dataFor2H.data, locationUser.data).name
      );
      iconSource = ForecastToIcon(stringForecast);
    }

    content = (
      <div>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          {text}: {stringForecast}
        </p>
        <img
          className="h-12 w-full object-contain my-3"
          src={iconSource}
          alt="current weather forecast icon"
        />
      </div>
    );
  }

  return content;
}

export default CurrentForecast;
