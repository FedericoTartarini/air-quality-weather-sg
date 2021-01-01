import React from "react";
import Loader from "./Loader";
import { ReadingAtUserLocation } from "../Functions/Utils";
import { Link } from "react-router-dom";

function CurrentValue({ dataTmp, dataRH, locationUser }) {
  let content = null;

  if (dataTmp.error || dataRH.error || locationUser.error) {
    content =
      // <p className="p-5">
      //   data.gov.sg is under maintenance and we could not download the
      //   current weather conditions. Please try again later. Sorry for the inconvenience.
      // </p>
      "";
  } else if (dataTmp.loading && dataRH.loading && locationUser.loading) {
    content = <Loader />;
  } else if (dataTmp.data && dataRH.data && locationUser.data) {
    content = (
      <div>
        <div className="flex my-3 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex" />
        </div>
        <div className="text-base leading-relaxed py-1 xl:w-2/4 lg:w-3/4 mx-auto">
          <Link to="/weather-singapore">
            Temperature:{" "}
            <span>
              {ReadingAtUserLocation(dataTmp.data, locationUser.data)}
            </span>
            °C
          </Link>
        </div>
        <div className="text-base leading-relaxed py-1 xl:w-2/4 lg:w-3/4 mx-auto">
          <Link to="/weather-singapore">
            Relative humidity:{" "}
            <span>{ReadingAtUserLocation(dataRH.data, locationUser.data)}</span>
          </Link>
        </div>
      </div>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default CurrentValue;
