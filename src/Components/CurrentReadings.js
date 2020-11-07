import React, { useState, useEffect } from "react";
import MajorPollutants from "./MajorPollutants";
import CurrentValue from "./CurrentValue";
import { ClosestStation } from "../Functions/Utils";
import CurrentForecast from "./CurrentForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CurrentReadings({
  dataPSI,
  dataTmp,
  dataRH,
  dataFor2H,
  dataFor24H,
  dataPM25,
  locationUser,
  RequestedUseLocation,
  showRequestLocButton,
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
          <div className="text-center my-3">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Closest weather station:{" "}
              <span className="capitalize">{station}</span>
              {/*  todo print Novena, Juron, etc. not west, east. Get the info from location metadata */}
              {/*  todo allow user to select a station */}
            </p>
          </div>

          <div
            className={
              "container flex mx-auto justify-center" +
              (showRequestLocButton ? "" : " hidden")
            }
          >
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={() => {
                RequestedUseLocation();
              }}
            >
              Use my location
              <span className="ml-2">
                <FontAwesomeIcon icon={faCrosshairs} />
              </span>
            </button>
          </div>
          {/* horizontal line */}
          <div className="flex my-3 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex" />
          </div>
          <div className="flex flex-wrap content-between sm:-m-4 -mx-4 my-3">
            {/* show also AQI */}
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
              <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex" />
            </div>
            <div className="text-base leading-relaxed py-1 xl:w-2/4 lg:w-3/4 mx-auto">
              <Link to="/weather-singapore">
                Temperature:{" "}
                <CurrentValue data={dataTmp} locationUser={locationUser} />
                °C
              </Link>
            </div>

            <div className="text-base leading-relaxed py-1 xl:w-2/4 lg:w-3/4 mx-auto">
              <Link to="/weather-singapore">
                Relative humidity:{" "}
                <CurrentValue data={dataRH} locationUser={locationUser} />%
              </Link>
            </div>
            <Link to={"/weather-forecast-singapore"}>
              <CurrentForecast
                locationUser={locationUser}
                dataFor2H={dataFor2H}
                dataFor24H={dataFor24H}
                station={station}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentReadings;
