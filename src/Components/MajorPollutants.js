import React from "react";
import Loader from "./Loader";
import { GetLatestReading } from "../Functions/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinWink,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

function MajorPollutants({ data }) {
  let content = null;

  if (data.error) {
    content = <div>Could not fetch API</div>;
  }

  if (data.loading) {
    content = <Loader />;
  }

  if (data.data) {
    // todo change this once you get users location
    const lastReading = GetLatestReading("west", data.data);

    content = (
      <div className="p-4 w-1/2 md:mb-0 mb-6 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-5 flex-shrink-0">
          {/* todo change the icon and color as a function of the description*/}
          <FontAwesomeIcon icon={faGrinWink} size={"3x"} />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            {/* todo change the text as a function of props*/}
            24-h PSI: 55
          </h2>
          <p className="leading-relaxed text-base">Moderate</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center text-sm">
            {/* todo add space between learn more and icon*/}
            Learn More
            <FontAwesomeIcon icon={faQuestionCircle} />
          </a>
        </div>
      </div>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default MajorPollutants;
