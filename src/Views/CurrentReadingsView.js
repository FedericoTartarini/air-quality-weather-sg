import React from "react";
import TopImage from "../Components/TopImage";
import CurrentReadings from "../Components/CurrentReadings";
import Recommendation from "../Components/Recommendation";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
      <div className="container mx-auto my-3 flex-col p-8 items-center justify-center rounded overflow-hidden border shadow-lg">
        <div className="text-gray-800 mb-2">
          <div className="font-bold text-md mb-2">
            Learn more about Singapore's weather:
          </div>
          <ul class="list-disc list-inside">
            <li>
              <Link to="/climate">Climate</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurrentReadingsView;
