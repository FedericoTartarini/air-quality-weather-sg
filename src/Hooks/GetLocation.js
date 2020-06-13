import { useEffect, useState } from "react";

export function useGetLocation(props) {
  const [location, setLocation] = useState({
    loading: false,
    data: null,
    error: false,
  });

  function getCoordinates(position) {
    setLocation({
      loading: false,
      data: position.coords,
      error: false,
    });
  }

  function showError(error) {
    setLocation({
      loading: false,
      data: {
        accuracy: 2678,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 1.3271039999999998,
        longitude: 103.841792,
        speed: null,
      },
      error: false,
    });

    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert(
          "User denied the request for Geolocation.\n" +
            "We are assuming you are in the center of Singapore"
        );
        break;
      case error.POSITION_UNAVAILABLE:
        alert(
          "Location information is unavailable.\n" +
            "We are assuming you are in the center of Singapore"
        );
        break;
      case error.TIMEOUT:
        alert(
          "The request to get user location timed out.\n" +
            "We are assuming you are in the center of Singapore"
        );
        break;
      case error.UNKNOWN_ERR:
        alert(
          "An unknown error occurred.\n" +
            "We are assuming you are in the center of Singapore"
        );
        break;
    }
  }

  useEffect(() => {
    console.log("Requesting location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates, showError);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }, [props]);
  return location;
}
