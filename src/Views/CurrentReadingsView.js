import React from "react";
import TopImage from "../Components/TopImage";
import MajorPollutants from "../Components/MajorPollutants";
import CurrentReadings from "../Components/CurrentReadings";

function CurrentReadingsView({ data }) {
  return (
    <React.Fragment>
      <div className="flex">
        <TopImage />
      </div>
      <div className="flex">
        <CurrentReadings data={data} />
      </div>
    </React.Fragment>
  );
}

export default CurrentReadingsView;
