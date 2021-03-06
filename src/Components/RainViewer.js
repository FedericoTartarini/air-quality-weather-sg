import React from "react";
import { Helmet } from "react-helmet";

function RainViewer() {
  const { innerHeight: height } = window;

  return (
    <div className="container-flex mx-auto">
      <Helmet>
        <title>Rain Radar Singapore</title>
        <meta
          name="description"
          content="This page shows the rain radar data for the past two hours in Singapore.
          The weather radar data is extremely useful since it allows you to assess where it is currently raining
          and how the rain clouds are moving.
          In addition you can also zoom out and see the weather radar for any location in the world."
        />
      </Helmet>
      <iframe
        src="https://www.rainviewer.com/map.html?loc=1.3521,103.8198,9&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=1&rmt=4&c=1&o=83&lm=1&th=0&sm=1&sn=1"
        width="100%"
        frameBorder="0"
        title="Rain Radar"
        style={{ height: height - 108 - 104, width: "100%" }}
        allowFullScreen
      />
    </div>
  );
}

export default RainViewer;
