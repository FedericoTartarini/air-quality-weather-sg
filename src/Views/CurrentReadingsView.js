import React from "react";
import TopImage from "../Components/TopImage";
import CurrentReadings from "../Components/CurrentReadings";
import Recommendation from "../Components/Recommendation";

function CurrentReadingsView({ data, psiStation }) {
  return (
    <div className="py-3">
      <div className="flex">
        <TopImage />
      </div>
      <div>
        <CurrentReadings data={data} psiStation={psiStation} />
      </div>
      <div>
        <Recommendation />
      </div>
    </div>
  );
}

export default CurrentReadingsView;
