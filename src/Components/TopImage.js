import React from "react";
import {
  ChooseTopImageSingapore,
  ClosestStation,
  GetLatestReading,
  PollutantClass,
} from "../Functions/Utils";
import Loader from "./Loader";

function TopImage({ dataPSI, locationUser }) {
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
      <div className="container mx-auto flex items-center justify-center shadow-lg">
        {/* todo change image as a function of the time of the day and pollution */}
        <img
          // className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          className="h-48 w-full rounded object-cover"
          alt="top image website"
          src={ChooseTopImageSingapore(description)}
        />
      </div>
    );
  }

  return content;
}

export default TopImage;
