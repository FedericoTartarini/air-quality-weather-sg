import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ClosestStation,
  ForecastToIcon,
  TwoHForecastsAtUserLocation,
} from "../Functions/Utils";

function GetIcon(data, marker, _iconSize) {
  const Icon = L.icon({
    // todo change icon type
    iconUrl: require("../Static/Icons/sunny.png"),
    iconSize: [_iconSize], // size of the icon
  });
  return Icon;
}

function MapPollution({ data }) {
  const { innerWidth: width, innerHeight: height } = window;

  if (data.data) {
    const latestReading = data.data.items[data.data.items.length - 1];
    console.log(latestReading);
  }

  let zoom, iconSize;
  if (width > 500) {
    zoom = 11;
    iconSize = 35;
  } else {
    zoom = 10;
    iconSize = 25;
  }

  const position = [1.3521, 103.8198];
  return (
    <Map
      center={position}
      zoom={zoom}
      style={{ height: height - 108 - 104, width: "100%" }}
    >
      <TileLayer
        className="leaflet-tile-pane"
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.data
        ? data.data["region_metadata"].map((marker) => (
            <Marker
              key={marker.name}
              position={[
                marker.label_location.latitude,
                marker.label_location.longitude,
              ]}
              icon={GetIcon(data, marker, iconSize)}
            >
              {/* todo define icon popup*/}
              {/*<Popup>*/}
              {/*  <div className="text-center">*/}
              {/*    {marker.name} <br />{" "}*/}
              {/*    {TwoHForecastsAtUserLocation(data.data, marker.name)}*/}
              {/*  </div>*/}
              {/*</Popup>*/}
            </Marker>
          ))
        : ""}
    </Map>
  );
}

export default MapPollution;
