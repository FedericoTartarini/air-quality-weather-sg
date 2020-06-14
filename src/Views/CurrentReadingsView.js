import React from "react";
import TopImage from "../Components/TopImage";
import CurrentReadings from "../Components/CurrentReadings";
import Recommendation from "../Components/Recommendation";

function CurrentReadingsView({
  dataPSI,
  psiStation,
  dataTmp,
  dataRH,
  dataFor2H,
  dataPM25,
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
          dataFor2H={dataFor2H}
          dataPM25={dataPM25}
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
