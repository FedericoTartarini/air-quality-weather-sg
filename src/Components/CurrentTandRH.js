import React from "react";
import { Link } from "react-router-dom";
import CurrentValue from "./CurrentValue";

function CurrentTandRH(dataTmp, dataRH, locationUser) {
  return (
    <div>
      <div className="flex my-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex" />
      </div>
      <div className="text-base leading-relaxed py-1 xl:w-2/4 lg:w-3/4 mx-auto">
        <Link to="/weather-singapore">
          Temperature:{" "}
          <CurrentValue data={dataTmp} locationUser={locationUser} />
          °C
        </Link>
      </div>
      <div className="text-base leading-relaxed py-1 xl:w-2/4 lg:w-3/4 mx-auto">
        <Link to="/weather-singapore">
          Relative humidity:{" "}
          <CurrentValue data={dataRH} locationUser={locationUser} />%
        </Link>
      </div>
    </div>
  );
}

export default CurrentTandRH;
