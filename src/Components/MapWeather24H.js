import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { ForecastToIcon } from "../Functions/Utils";

function GetIcon(description, _iconSize) {
  const Icon = L.icon({
    iconUrl: ForecastToIcon(description),
    iconSize: [_iconSize], // size of the icon
  });
  return Icon;
}

const regionsMetadata = {
  west: { latitude: 1.35735, longitude: 103.7 },
  national: { latitude: 0, longitude: 0 },
  east: { latitude: 1.35735, longitude: 103.94 },
  central: { latitude: 1.35735, longitude: 103.82 },
  south: { latitude: 1.29587, longitude: 103.82 },
  north: { latitude: 1.41803, longitude: 103.82 },
};

function MapWeather24H({ data }) {
  const { innerWidth: width, innerHeight: height } = window;
  const [indexForecast, setIndexForecast] = useState(0);

  let zoom, iconSize;
  if (width > 500) {
    zoom = 11;
    iconSize = 45;
  } else {
    zoom = 10;
    iconSize = 30;
  }

  function ButtonForecast({ text, index }) {
    if (text === "12-18") {
      text = "Next 6-h";
    } else if (text === "18-06") {
      text = "Night";
    } else if (text === "06-12") {
      text = "Morning";
    }

    return (
      <button
        className={
          "bg-white hover:bg-gray-200 text-gray-500 py-1 px-3" +
          (indexForecast === index
            ? " border text-gray-700 font-semibold"
            : " border-b hover:text-gray-800 ")
        }
        onClick={() => setIndexForecast(index)}
      >
        {text}
      </button>
    );
  }

  const position = [1.3521, 103.8198];
  return (
    <div className="relative">
      <Map
        center={position}
        zoom={zoom}
        style={{ height: height - 108 - 104, width: "100%" }}
        className="z-0"
      >
        <TileLayer
          className="leaflet-tile-pane"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.data
          ? Object.keys(data.data["items"][0]["periods"][0]["regions"]).map(
              (marker) => (
                <Marker
                  key={marker}
                  position={[
                    regionsMetadata[marker].latitude,
                    regionsMetadata[marker].longitude,
                  ]}
                  icon={GetIcon(
                    data.data["items"][0]["periods"][indexForecast]["regions"][
                      marker
                    ],
                    iconSize
                  )}
                >
                  <Popup>
                    <div className="text-center">
                      <span className="text-lg capitalize">{marker}</span>{" "}
                      <br />
                      {
                        data.data["items"][0]["periods"][indexForecast][
                          "regions"
                        ][marker]
                      }
                    </div>
                  </Popup>
                </Marker>
              )
            )
          : ""}
      </Map>
      <div className="z-10 absolute top-0 right-0 left-0 mx-auto text-center">
        <div className="inline-flex mt-2 shadow-lg">
          {data.data
            ? data.data["items"][0]["periods"].map((period, index) => (
                <ButtonForecast
                  text={
                    period.time.start.split("T")[1].split(":")[0] +
                    "-" +
                    period.time.end.split("T")[1].split(":")[0]
                  }
                  index={index}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default MapWeather24H;
