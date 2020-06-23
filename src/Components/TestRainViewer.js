import React from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";

function TestRainViewer() {
  const { innerWidth: width, innerHeight: height } = window;

  let zoom;
  if (width > 500) {
    zoom = 11;
  } else {
    zoom = 10;
  }

  const position = [1.3521, 103.8198];
  return (
    <Map
      center={position}
      zoom={zoom}
      style={{ height: height - 108 - 104, width: "100%" }}
      zoomControl={false}
    >
      <ZoomControl position="bottomleft" />
      <TileLayer
        className="leaflet-tile-pane"
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        url="https://tilecache.rainviewer.com/v2/radar/1592664000/256/{z}/{x}/{y}/2/1_1.png"
        attribution='<a href="https://rainviewer.com" target="_blank">rainnviewer.com</a>'
      />
    </Map>
  );
}

export default TestRainViewer;
