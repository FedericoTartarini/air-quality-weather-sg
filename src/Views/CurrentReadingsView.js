import React from "react";
import TopImage from "../Components/TopImage";
import CurrentReadings from "../Components/CurrentReadings";
import Recommendation from "../Components/Recommendation";

function CurrentReadingsView({
  dataPSI,
  psiStation,
  dataTmp,
  dataRH,
  locationUser,
}) {
  return (
    <div className="py-3">
      <div className="flex">
        <TopImage />
      </div>
      <div>
        <CurrentReadings
          dataPSI={dataPSI}
          psiStation={psiStation}
          dataTmp={dataTmp}
          dataRH={dataRH}
          locationUser={locationUser}
        />
      </div>
      <div>
        <Recommendation />
      </div>
    </div>
  );
}

export default CurrentReadingsView;
