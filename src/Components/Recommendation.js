import React from "react";
import singaporeLine from "../Static/Icons/singapore-line.png";
import {
  ClosestStation,
  GetLatestReading,
  HealthAdvisory,
  PollutantClass,
} from "../Functions/Utils";
import Loader from "./Loader";

function Recommendation({ dataPSI, locationUser }) {
  let content = "";

  if (dataPSI.error) {
    content = <div>Could not fetch API</div>;
  }

  if (dataPSI.loading) {
    content = <Loader />;
  }

  if (locationUser.data && dataPSI.data) {
    const stationName = ClosestStation(dataPSI.data, locationUser.data).name;

    const latestReading = GetLatestReading(stationName, dataPSI.data);

    const description = PollutantClass(
      latestReading["psi_twenty_four_hourly"],
      "psi_twenty_four_hourly"
    ).description;

    content = (
      <div className="container mx-auto flex-col p-8 items-center justify-center rounded overflow-hidden border shadow-lg">
        <div className="px-6 py-4 text-gray-800">
          <div className="font-bold text-md mb-2">
            The 24-h Pollutant Standards Index (PSI) is "{description}". It is
            advised that:
          </div>
          <p className="text-base">
            <span className="font-bold">Healthy persons: </span>
            {HealthAdvisory(description).healthy}
          </p>
          <p className="text-base">
            <span className="font-bold">
              Elderly, pregnant women, children:{" "}
            </span>
            {HealthAdvisory(description).old}
          </p>
          <p className="text-base">
            <span className="font-bold">
              People with lung or heart diseases:{" "}
            </span>
            {HealthAdvisory(description).sick}
          </p>
        </div>
        <img
          className="w-full mt-3 object-contain"
          src={singaporeLine}
          alt="Singapore's line"
        />
      </div>
    );
  }

  return content;
}

// todo add note below singapore-line saying that recommendations are not medical advices

export default Recommendation;
