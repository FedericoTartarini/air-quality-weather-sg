import React from "react";
import MajorPollutants from "./MajorPollutants";

function CurrentReadings({ data }) {
  return (
    <div className="container mx-auto flex px-5 items-center justify-center">
      <section className="text-gray-700 body-font flex-grow">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-5">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Closest station: Novena
              {/* todo change based on user's location */}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap content-between sm:-m-4 -mx-4 -mb-10 -mt-4">
            <MajorPollutants data={data} />
            <MajorPollutants data={data} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentReadings;
