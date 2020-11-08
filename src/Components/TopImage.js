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

  if (locationUser.error || dataPSI.error) {
    // todo provide more meaningful descriptions
    // todo check here and in other locations these if statements
    content = <div>Could not fetch API</div>;
  }

  if (locationUser.loading || dataPSI.loading) {
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
        <ChooseTopImageSingapore airQualityDescription={description} />
      </div>
    );
  }

  return content;
}

export default TopImage;
