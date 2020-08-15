import React from "react";
import singaporeLine from "../Static/Icons/singapore-line.png";
import {
  ClosestStation,
  GetLatestReading,
  HealthAdvisory,
  PollutantClass,
  GetHelpURL,
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
        <div className="text-gray-800 mb-2">
          <div className="font-bold text-md mb-2">
            The 24-h Pollutant Standards Index (PSI) is "{description}".
            Advisory for the general public regarding activities outdoors:
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
          alt="Image of Marina Bay Sands in Singapore"
        />
        <p className="mt-2 text-xs text-center text-gray-800">
          This app does not provide medical advice. It is intended for
          informational purposes only. It is not a substitute for professional
          medical advice. For more information about the above recommendations
          visit{" "}
          <a className="text-gray-700" href={GetHelpURL("help")}>
            NEA's website
          </a>
          .
        </p>
      </div>
    );
  }

  return content;
}

export default Recommendation;
