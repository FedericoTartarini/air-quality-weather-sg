import React from "react";
import TopImage from "../Components/TopImage";
import CurrentReadings from "../Components/CurrentReadings";
import Recommendation from "../Components/Recommendation";
import { Helmet } from "react-helmet";

function CurrentReadingsView({
  dataPSI,
  dataTmp,
  dataRH,
  dataFor2H,
  dataFor24H,
  dataPM25,
  locationUser,
  RequestedUseLocation,
  showRequestLocButton,
}) {
  return (
    <div>
      <Helmet>
        <title>Air quality and weather Singapore</title>
        <meta
          name="description"
          content="This page shows you the current temperature, relative humidity, PM 2.5, PSI readings."
        />
      </Helmet>
      <div className="flex">
        <TopImage dataPSI={dataPSI} locationUser={locationUser} />
      </div>
      <div>
        <CurrentReadings
          dataPSI={dataPSI}
          dataTmp={dataTmp}
          dataRH={dataRH}
          dataFor2H={dataFor2H}
          dataFor24H={dataFor24H}
          dataPM25={dataPM25}
          locationUser={locationUser}
          RequestedUseLocation={RequestedUseLocation}
          showRequestLocButton={showRequestLocButton}
        />
      </div>
      <div>
        <Recommendation dataPSI={dataPSI} locationUser={locationUser} />
      </div>
    </div>
  );
}

export default CurrentReadingsView;
