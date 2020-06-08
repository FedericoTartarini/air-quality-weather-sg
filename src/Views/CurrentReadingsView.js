import React from "react";
import TopImage from "../Components/TopImage";
import MajorPollutants from "../Components/MajorPollutants";
import CurrentReadings from "../Components/CurrentReadings";
import Recommendation from "../Components/Recommendation";

function CurrentReadingsView({ data }) {
  return (
    <div className="py-3">
      <div className="flex">
        <TopImage />
      </div>
      <div>
        <CurrentReadings data={data} />
      </div>
      <div>
        <Recommendation />
      </div>
    </div>
  );
}

export default CurrentReadingsView;
