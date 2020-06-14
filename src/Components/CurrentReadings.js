import React from "react";
import MajorPollutants from "./MajorPollutants";
import sunny from "../Static/Icons/sunny.png";
import CurrentValue from "./CurrentValue";
import {
  ClosestStation,
  ReadingAtUserLocation,
  TwoHForecastsAtUserLocation,
} from "../Functions/Utils";
import Loader from "./Loader";
import ForecastToIcon from "./ForecastToIcon";

function CurrentReadings({
  dataPSI,
  dataTmp,
  dataRH,
  dataFor2H,
  dataPM25,
  locationUser,
}) {
  return (
    <div className="container mx-auto my-3 flex px-5 items-center justify-center shadow-lg border rounded">
      <section className="text-gray-700 body-font flex-grow">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center my-5">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Closest station:{" "}
              {dataFor2H.data && locationUser.data ? (
                ClosestStation(dataFor2H.data, locationUser.data).name
              ) : (
                <Loader />
              )}
            </p>
            <div className="flex my-3 justify-center">
              <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap content-between sm:-m-4 -mx-4 my-3">
            <MajorPollutants
              dataPSI={dataPSI}
              locationUser={locationUser}
              pollutant={"psi_twenty_four_hourly"}
            />
            <MajorPollutants
              dataPSI={dataPM25}
              locationUser={locationUser}
              pollutant={"pm25_one_hourly"}
            />
          </div>
          <div className="text-center my-5">
            <div className="flex my-3 justify-center">
              <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
            </div>
            <div className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Temperature:{" "}
              <CurrentValue data={dataTmp} locationUser={locationUser} />
              °C
            </div>

            <div className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Relative humidity:{" "}
              <CurrentValue data={dataRH} locationUser={locationUser} />%
            </div>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              2-hour forecast for{" "}
              {dataFor2H.data && locationUser.data ? (
                ClosestStation(dataFor2H.data, locationUser.data).name +
                ": " +
                TwoHForecastsAtUserLocation(
                  dataFor2H.data,
                  ClosestStation(dataFor2H.data, locationUser.data).name
                )
              ) : (
                <Loader />
              )}
              {/* todo change based on user's location */}
            </p>
            {dataFor2H.data && locationUser.data ? (
              <ForecastToIcon
                description={TwoHForecastsAtUserLocation(
                  dataFor2H.data,
                  ClosestStation(dataFor2H.data, locationUser.data).name
                )}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentReadings;
