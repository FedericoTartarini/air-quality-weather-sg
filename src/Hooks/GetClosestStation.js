import React, { useEffect, useState } from "react";

export function useGetClosestStation(data, location) {
  const [station, setStation] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    if (data.data && location.data) {
      let lowestDistance = 10000;
      let closestStation = "";

      data.data.region_metadata.map((station) => {
        const distance = Math.sqrt(
          Math.pow(
            location.data.latitude - station.label_location.latitude,
            2
          ) +
            Math.pow(
              location.data.longitude - station.label_location.longitude,
              2
            )
        );
        if (distance < lowestDistance) {
          lowestDistance = distance;
          closestStation = station.name;
        }
      });

      return closestStation;
    }
  }, [data, location]);

  return station;
}
