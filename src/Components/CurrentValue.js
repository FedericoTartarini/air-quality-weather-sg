import React from "react";
import Loader from "./Loader";
import {
  GetHelpURL,
  GetLatestReading,
  MapNamePollutants,
  PollutantClass,
  ReadingAtUserLocation,
} from "../Functions/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

function CurrentValue({ data, locationUser }) {
  let content = null;

  if (data.error) {
    content = <div>Could not fetch API</div>;
  }

  if (data.loading) {
    content = <Loader />;
  }

  if (data.data && locationUser.data) {
    content = (
      <span>{ReadingAtUserLocation(data.data, locationUser.data)}</span>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default CurrentValue;
