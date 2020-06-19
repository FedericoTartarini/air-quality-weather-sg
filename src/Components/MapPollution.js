import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { PollutantClass } from "../Functions/Utils";

function RenderValue(stationName, values) {
  return (
    <div className="text-center">
      <span className="text-lg capitalize">{stationName}</span> <br />
      Sub-indices values <br />
      PSI = {values.psi_twenty_four_hourly[stationName]} <br />
      Ozone = {values.o3_sub_index[stationName]} <br />
      PM 10 = {values.pm10_sub_index[stationName]} <br />
      PM 25 = {values.pm25_sub_index[stationName]} <br />
      CO = {values.co_sub_index[stationName]} <br />
      SO2 = {values.so2_sub_index[stationName]} <br />
      NO2 = {values.no2_one_hour_max[stationName]} <br />
    </div>
  );
}

function GetIcon(data, _iconSize) {
  const description = PollutantClass(data, "psi_twenty_four_hourly").color;
  const Icon = L.icon({
    iconUrl: require(`../Static/Icons/${description}.png`),
    iconSize: [_iconSize], // size of the icon
  });
  return Icon;
}

function MapPollution({ data }) {
  const { innerWidth: width, innerHeight: height } = window;

  let latestReading;
  if (data.data) {
    latestReading = data.data.items[data.data.items.length - 1].readings;
  }

  let zoom, iconSize;
  if (width > 500) {
    zoom = 11;
    iconSize = 45;
  } else {
    zoom = 10;
    iconSize = 30;
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
              icon={GetIcon(
                latestReading.psi_twenty_four_hourly[marker.name],
                iconSize
              )}
            >
              todo define icon popup
              <Popup>{RenderValue(marker.name, latestReading)}</Popup>
            </Marker>
          ))
        : ""}
    </Map>
  );
}

export default MapPollution;
