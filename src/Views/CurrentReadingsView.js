import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Loader from "../Components/Loader";

const Recommendation = lazy(() => import("../Components/Recommendation"));
const TopImage = lazy(() => import("../Components/TopImage"));
const CurrentReadings = lazy(() => import("../Components/CurrentReadings"));

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
        <title>Air quality and Weather Singapore</title>
        <meta
          name="description"
          content="This page allows you to monitor and track in real-time the standard indexes of the major outdoor
      pollutants in Singapore. In addition you can monitor the current temperature and relative humidity in your location as well as the
      weather forecasts for Singapore"
        />
      </Helmet>
      <Suspense fallback={<Loader />}>
        <div className="flex">
          <TopImage dataPSI={dataPSI} locationUser={locationUser} />
        </div>
      </Suspense>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Recommendation dataPSI={dataPSI} locationUser={locationUser} />
      </Suspense>
      <div className="container mx-auto my-3 p-8 items-center justify-center rounded overflow-hidden border shadow-lg">
        <div className="text-gray-800 mb-2">
          <div className="font-bold text-md mb-2">Learn more about:</div>
          <ul className="list-disc list-inside">
            <li className="py-1">
              <Link to="/climate-of-singapore">The climate of Singapore</Link>
            </li>
            <li className="py-1">
              <Link to="/pollutant-standards-index-singapore">
                What the Pollutant Standards Index (PSI) measures
              </Link>
            </li>
            <li className="py-1">
              <Link to="/pm25">What is 1-h Particular Matter 2.5 µm</Link>
            </li>
            <li className="py-1">
              <Link to="/weather-singapore">
                Where we are getting the data from
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurrentReadingsView;
