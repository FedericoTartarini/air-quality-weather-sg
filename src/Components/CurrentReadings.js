import React, { useState, useEffect } from "react";
import MajorPollutants from "./MajorPollutants";
import CurrentValue from "./CurrentValue";
import {
  ClosestStation,
  ForecastToIcon,
  TwoHForecastsAtUserLocation,
} from "../Functions/Utils";
import CurrentForecast from "./CurrentForecast";

function CurrentReadings({
  dataPSI,
  dataTmp,
  dataRH,
  dataFor2H,
  dataFor24H,
  dataPM25,
  locationUser,
}) {
  const [station, setStation] = useState("central");

  useEffect(() => {
    let value = "";
    if (dataFor2H.data && locationUser.data && dataPSI.data) {
      value = ClosestStation(dataFor2H.data, locationUser.data).name;
      if (value === undefined) {
        value = ClosestStation(dataPSI.data, locationUser.data).name;
      }
      setStation(value);
    }
  }, [dataFor2H, dataPSI, locationUser]);

  return (
    <div className="container mx-auto my-3 flex px-5 items-center justify-center shadow-lg border rounded">
      <section className="text-gray-700 body-font flex-grow">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center my-5">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Closest station: {station}
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
            <CurrentForecast
              locationUser={locationUser}
              dataFor2H={dataFor2H}
              dataFor24H={dataFor24H}
              station={station}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentReadings;
