import React from "react";
import TopImage from "../Components/TopImage";
import MajorPollutants from "../Components/MajorPollutants";
import CurrentReadings from "../Components/CurrentReadings";

function CurrentReadingsView(props) {
  return (
    <React.Fragment>
      <div className="flex">
        <TopImage />
      </div>
      <div className="flex">
        {/*<MajorPollutants data={props.data} />*/}
        <CurrentReadings />
      </div>
    </React.Fragment>
  );
}

export default CurrentReadingsView;
