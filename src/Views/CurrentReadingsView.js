import React from "react";
import TopImage from "../Components/TopImage";
import MajorPollutants from "../Components/MajorPollutants";
import CurrentReadings from "../Components/CurrentReadings";
import Recommendation from "../Components/Recommendation";

function CurrentReadingsView({ data }) {
  return (
    <React.Fragment>
      <div className="flex">
        <TopImage />
      </div>
      <div>
        <CurrentReadings data={data} />
      </div>
      <div>
        <Recommendation />
      </div>
    </React.Fragment>
  );
}

export default CurrentReadingsView;
