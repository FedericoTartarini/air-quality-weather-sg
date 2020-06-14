import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { TwoHForecastsAtUserLocation } from "../Functions/Utils";

function MyMap({ data }) {
  const Icon = L.icon({
    iconUrl: require("../Static/Icons/partly-cloudy-night.png"),
    iconSize: [35], // size of the icon
  });

  const { innerWidth: width, innerHeight: height } = window;
  const position = [1.3521, 103.8198];
  return (
    <Map
      center={position}
      zoom={11}
      style={{ height: height - 108 - 104, width: "100%" }}
    >
      <TileLayer
        className="leaflet-tile-pane"
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.data
        ? data.data["area_metadata"].map((marker) => (
            <Marker
              key={marker.name}
              position={[
                marker.label_location.latitude,
                marker.label_location.longitude,
              ]}
              icon={Icon}
            >
              <Popup>
                {marker.name} <br />{" "}
                {TwoHForecastsAtUserLocation(data.data, marker.name)}
              </Popup>
            </Marker>
          ))
        : ""}
    </Map>
  );
}

export default MyMap;
