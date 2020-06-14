import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function MyMap(props) {
  const position = [1.35, 103.8];
  return (
    <Map
      className="map"
      center={position}
      zoom={10}
      style={{ height: 300, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}

export default MyMap;
