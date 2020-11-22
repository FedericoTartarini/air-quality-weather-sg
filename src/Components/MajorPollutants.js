import React from "react";
import Loader from "./Loader";
import {
  ClosestStation,
  GetLatestReading,
  MapNamePollutants,
  PollutantClass,
  GetHelpURL,
} from "../Functions/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MajorPollutants({ dataPSI, locationUser, pollutant }) {
  let content = null;

  if (locationUser.error || dataPSI.error) {
    content = <div>Could not fetch API</div>;
  }

  if (locationUser.loading || dataPSI.loading) {
    content = (
      <div className="container mx-auto">
        <Loader />
      </div>
    );
  }

  if (locationUser.data && dataPSI.data && dataPSI.data.items.length !== 0) {
    const stationName = ClosestStation(dataPSI.data, locationUser.data).name;

    const latestReading = GetLatestReading(stationName, dataPSI.data);

    content = (
      <div className="p-4 w-1/2 md:mb-0 mb-6 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-3 flex-shrink-0">
          <FontAwesomeIcon
            icon={PollutantClass(latestReading[pollutant], pollutant).icon}
            size={"3x"}
            color={PollutantClass(latestReading[pollutant], pollutant).color}
          />
        </div>
        <div className="flex-grow">
          <Link to={GetHelpURL(pollutant)}>
            <h2 className="text-lg title-font font-medium mb-3">
              {MapNamePollutants(pollutant, true)}:{" "}
              <sup>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </sup>
            </h2>
          </Link>
          <h2 className="text-3xl title-font font-medium mb-3">
            {latestReading[pollutant]}
            {pollutant === "pm25_one_hourly" ? (
              <span className="text-sm">
                {" "}
                µg/m<sup>3</sup>
              </span>
            ) : (
              ""
            )}
          </h2>
          <p className="leading-relaxed text-base">
            {PollutantClass(latestReading[pollutant], pollutant).description}
          </p>
        </div>
      </div>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default MajorPollutants;
