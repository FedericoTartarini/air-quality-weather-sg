import React from "react";
import singaporeLine from "../Static/Icons/singapore-line.png";
import { HealthAdvisory } from "../Functions/Utils";

function Recommendation(props) {
  return (
    <div className="container mx-auto flex-col p-8 items-center justify-center rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 text-gray-800">
        <div className="font-bold text-md mb-2">
          The 24-h Pollutant Standards Index (PSI) is "Good". It is advised
          that:
        </div>
        <p className="text-base">
          <span className="font-bold">Healthy persons: </span>
          {/* todo update based on the reading */}
          {HealthAdvisory("Good").healthy}
        </p>
        <p className="text-base">
          <span className="font-bold">Elderly, pregnant women, children: </span>
          {/* todo update based on the reading */}
          {HealthAdvisory("Good").old}
        </p>
        <p className="text-base">
          <span className="font-bold">
            {/* todo update based on the reading */}
            People with lung or heart diseases:{" "}
          </span>
          {HealthAdvisory("Good").sick}
        </p>
      </div>
      <img
        className="w-full mt-3 object-contain"
        src={singaporeLine}
        alt="Singapore's line"
      />
    </div>
  );
}

export default Recommendation;
