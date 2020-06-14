import React from "react";
import Loader from "./Loader";
import {
  GetHelpURL,
  GetLatestReading,
  MapNamePollutants,
  PollutantClass,
} from "../Functions/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

function MajorPollutants({ dataPSI, psiStation, pollutant }) {
  let content = null;

  if (dataPSI.error) {
    content = <div>Could not fetch API</div>;
  }

  if (dataPSI.loading) {
    content = <Loader />;
  }

  if (psiStation.data && dataPSI.data) {
    const lastReading = GetLatestReading(psiStation.data, dataPSI.data);

    content = (
      <div className="p-4 w-1/2 md:mb-0 mb-6 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-3 flex-shrink-0">
          <FontAwesomeIcon
            icon={PollutantClass(lastReading[pollutant], pollutant).icon}
            size={"3x"}
            color={PollutantClass(lastReading[pollutant], pollutant).color}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font font-medium mb-3">
            {MapNamePollutants(pollutant, true)}:
          </h2>
          <h2 className="text-lg title-font font-medium mb-3">
            {lastReading[pollutant]}
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
            {PollutantClass(lastReading[pollutant], pollutant).description}
          </p>
          <div onClick={() => window.open(GetHelpURL(pollutant))}>
            <p className="mt-3 mr-2 inline-flex items-center text-sm">
              Learn More
            </p>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
      </div>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default MajorPollutants;
