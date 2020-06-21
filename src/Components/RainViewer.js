import React from "react";

function RainViewer({ data }) {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="container-flex mx-auto">
      <iframe
        src="https://www.rainviewer.com/map.html?loc=1.3521,103.8198,9&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=1&rmt=4&c=1&o=83&lm=1&th=0&sm=1&sn=1"
        width="100%"
        frameBorder="0"
        style={{ height: height - 108 - 104, width: "100%" }}
        allowFullScreen
      />
    </div>
  );
}

export default RainViewer;
