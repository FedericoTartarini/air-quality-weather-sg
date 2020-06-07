import React from "react";
import MajorPollutants from "./MajorPollutants";
import sunny from "../Static/Icons/sunny.png";

function CurrentReadings({ data }) {
  return (
    <div className="container mx-auto my-3 flex px-5 items-center justify-center shadow-lg border rounded">
      <section className="text-gray-700 body-font flex-grow">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-5">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Closest station: Novena
              {/* todo change based on user's location */}
            </p>
            <div className="flex my-3 justify-center">
              <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap content-between sm:-m-4 -mx-4 my-3">
            <MajorPollutants data={data} />
            <MajorPollutants data={data} />
          </div>
          <div className="text-center mb-5">
            <div className="flex my-3 justify-center">
              <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
            </div>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Temperature: 30°C
              {/* todo change based on user's location */}
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Relative humidity: 80%
              {/* todo change based on user's location */}
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Novena 2-hour forecast: Partly Cloudy (Night)
              {/* todo change based on user's location */}
            </p>
            <img
              // className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              className="h-20 w-full object-contain my-3"
              alt="sunny"
              src={sunny}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentReadings;
