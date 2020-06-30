import React from "react";
import Loader from "./Loader";
import { ReadingAtUserLocation } from "../Functions/Utils";

function CurrentValue({ data, locationUser }) {
  let content = null;

  if (data.error || locationUser.error) {
    content = <div>Could not fetch API</div>;
  }

  if (data.loading && locationUser.loading) {
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
