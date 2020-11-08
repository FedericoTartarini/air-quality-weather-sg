import {
  faGrinWink,
  faMeh,
  faFlushed,
  faGrimace,
  faDizzy,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function GetLatestReading(stationName, data) {
  const lastReading = data.items[data.items.length - 1].readings;
  let values = {};
  for (let key of Object.keys(lastReading)) {
    // console.log('last reading: ' + lastReading[key]['west']);
    values[key] = lastReading[key][stationName];
  }
  return values;
}

export function HealthAdvisory(airQualityDescription) {
  switch (airQualityDescription) {
    case "Good":
      return {
        healthy: "Normal activities.",
        old: "Normal activities.",
        sick: "Normal activities.",
      };
    case "Moderate":
      return {
        healthy: "Normal activities.",
        old: "Normal activities.",
        sick: "Normal activities.",
      };
    case "Unhealthy":
      return {
        healthy: "Reduce prolonged or strenuous physical exertion.",
        old: "Minimise prolonged or strenuous physical exertion.",
        sick: "Avoid prolonged or strenuous physical exertion.",
      };
    case "Very Unhealthy":
      return {
        healthy: "Avoid prolonged or strenuous physical exertion.",
        old: "Minimise activities.",
        sick: "Avoid activities.",
      };
    case "Hazardous":
      return {
        healthy: "Minimise activities.",
        old: "Avoid activities.",
        sick: "Avoid activities.",
      };
    default:
      return {
        healthy: "Minimise activities.",
        old: "Avoid activities.",
        sick: "Avoid activities.",
      };
  }
}

export function MapNamePollutants(pollutant, abbreviated) {
  abbreviated = typeof abbreviated !== "undefined" ? abbreviated : true;
  switch (pollutant) {
    case "psi_twenty_four_hourly":
      return abbreviated ? "24-h PSI" : "24-h Pollution Standard Index (PSI)";
    case "o3_sub_index":
      return "O3 sub-index*";
    case "pm25_sub_index":
      return "PM2.5 sub-index**";
    case "pm10_sub_index":
      return "PM10 sub-index*";
    case "pm10_twenty_four_hourly":
      return abbreviated ? "24-h PM 10" : "24-h Particulate Matter 10 µm";
    case "co_sub_index":
      return abbreviated ? "CO" : "CO sub-index**";
    case "so2_sub_index":
      return abbreviated ? "SO2" : "SO2 sub-index***";
    case "no2_one_hour_max":
      return abbreviated ? "NO2" : "NO2 1-h max (µg/m3)";
    case "pm25_one_hourly":
      return abbreviated ? "1-h PM2.5" : "1-h PM2.5 (µg/m3)";
    default:
      return "Not mapped";
  }
}

export function GetHelpURL(pollutant) {
  switch (pollutant) {
    case "psi_twenty_four_hourly":
      return "/pollutant-standards-index-singapore";
    case "pm25_one_hourly":
      return "/pm25";
    case "o3_sub_index":
      return "https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics";
    case "pm25_sub_index":
      return "https://www.epa.gov/pm-pollution/particulate-matter-pm-basics";
    case "pm10_sub_index":
      return "https://www.epa.gov/pm-pollution/particulate-matter-pm-basics";
    case "pm10_twenty_four_hourly":
      return "https://www.epa.gov/pm-pollution/particulate-matter-pm-basics";
    case "co_sub_index":
      return "https://www.epa.gov/co-pollution/basic-information-about-carbon-monoxide-co-outdoor-air-pollution";
    case "so2_sub_index":
      return "https://www.epa.gov/so2-pollution/sulfur-dioxide-basics";
    case "no2_one_hour_max":
      return "https://www.epa.gov/no2-pollution/basic-information-about-no2";
    default:
      return "https://www.nea.gov.sg/our-services/pollution-control/air-pollution/faqs";
  }
}

export function PollutantClass(value, parameter) {
  let threshold;

  const colors = [
    "#2ca02c",
    "#1f77b4",
    "#fcc105",
    "#ff7f0e",
    "#d62728",
    "#9467bd",
  ];
  const icons = [
    faGrinWink,
    faMeh,
    faFlushed,
    faGrimace,
    faDizzy,
    faSkullCrossbones,
  ];
  let description = [
    "Good",
    "Moderate",
    "Unhealthy",
    "Very Unhealthy",
    "Hazardous",
  ];

  // thresholds from https://www.haze.gov.sg/docs/default-source/faq/computation-of-the-pollutant-standards-index-(psi).pdf
  if (parameter === "psi_twenty_four_hourly") {
    threshold = [50, 100, 200, 300, 400];
  } else if (parameter === "pm25_one_hourly") {
    threshold = [55, 150, 250, 300];
    description = ["Normal", "Elevated", "High", "Very high"];
  } else if (parameter === "pm25_sub_index") {
    threshold = [50, 100, 200, 300, 400];
  } else if (parameter === "pm25_twenty_four_hourly") {
    threshold = [12, 55, 150, 250, 350];
  } else if (parameter === "pm10_sub_index") {
    threshold = [50, 100, 200, 300, 400];
  } else if (parameter === "pm10_twenty_four_hourly") {
    threshold = [50, 150, 350, 420, 500];
  } else if (parameter === "so2_sub_index") {
    threshold = [50, 100, 200, 300, 400];
  } else if (parameter === "so2_twenty_four_hourly") {
    threshold = [80, 365, 800, 1600, 2100];
  } else if (parameter === "co_sub_index") {
    threshold = [50, 100, 200, 300, 400];
  } else if (parameter === "co_eight_hour_max") {
    threshold = [5, 10, 17, 34, 46];
  } else if (parameter === "o3_sub_index") {
    threshold = [50, 100, 200, 300, 400];
  } else if (parameter === "o3_eight_hour_max") {
    threshold = [118, 157, 235, 785, 980];
  } else if (parameter === "no2_one_hour_max") {
    threshold = [1130, 1130, 1130, 2260, 3000];
  }

  for (let i = 0; i < threshold.length; i++) {
    if (value <= threshold[i]) {
      return {
        color: colors[i],
        icon: icons[i],
        description: description[i],
        threshold: threshold[threshold.length - 1],
      };
    }
  }

  if (value > threshold[threshold.length - 1]) {
    return {
      color: colors[threshold.length],
      icon: icons[threshold.length],
      description: description[threshold.length],
      threshold: threshold[threshold.length - 1],
    };
  }
}

export function ReadingAtUserLocation(data, userLocation) {
  let temperature;
  const stationID = ClosestStation(data, userLocation).id;
  for (let ix in data.items[0].readings) {
    if (data.items[0].readings[ix].station_id === stationID) {
      temperature = data.items[0].readings[ix].value;
    }
  }
  return temperature;
}

export function TwoHForecastsAtUserLocation(data, stationName) {
  let forecastString;
  for (let ix in data.items[0].forecasts) {
    // console.log(data.items[0].forecasts[ix]);
    if (data.items[0].forecasts[ix].area === stationName) {
      forecastString = data.items[0].forecasts[ix].forecast;
    }
  }
  return forecastString;
}

export function ClosestStation(data, userLocation) {
  let lowestDistance = 10000;
  let station = "";

  // this is for Tmp, RH data
  try {
    for (let ix in data.metadata.stations) {
      // console.log('closest station: ' + weatherForecastStations[ix]);
      const _distance = Math.sqrt(
        Math.pow(
          userLocation.latitude - data.metadata.stations[ix].location.latitude,
          2
        ) +
          Math.pow(
            userLocation.longitude -
              data.metadata.stations[ix].location.longitude,
            2
          )
      );
      if (_distance < lowestDistance) {
        lowestDistance = _distance;
        station = {
          id: data.metadata.stations[ix].id,
          name: data.metadata.stations[ix].name,
        };
      }
    }
  } catch {}

  try {
    for (let ix in data.area_metadata) {
      // console.log('closest station: ' + weatherForecastStations[ix]);
      const _distance = Math.sqrt(
        Math.pow(
          userLocation.latitude -
            data.area_metadata[ix].label_location.latitude,
          2
        ) +
          Math.pow(
            userLocation.longitude -
              data.area_metadata[ix].label_location.longitude,
            2
          )
      );
      if (_distance < lowestDistance) {
        lowestDistance = _distance;
        station = {
          id: data.area_metadata[ix].id,
          name: data.area_metadata[ix].name,
        };
      }
    }
  } catch {}

  try {
    for (let ix in data.region_metadata) {
      // console.log('closest station: ' + weatherForecastStations[ix]);
      const _distance = Math.sqrt(
        Math.pow(
          userLocation.latitude -
            data.region_metadata[ix].label_location.latitude,
          2
        ) +
          Math.pow(
            userLocation.longitude -
              data.region_metadata[ix].label_location.longitude,
            2
          )
      );
      if (_distance < lowestDistance) {
        lowestDistance = _distance;
        station = {
          id: data.region_metadata[ix].id,
          name: data.region_metadata[ix].name,
        };
      }
    }
  } catch {}

  return station;
}

export function ForecastToIcon(description) {
  let imgURL;
  switch (description) {
    case "Partly Cloudy (Night)":
      imgURL = require("../Static/Icons/partly-cloudy-night.png");
      break;
    case "Partly Cloudy (Day)":
      imgURL = require("../Static/Icons/partly-cloudy-day.png");
      break;
    case "Moderate Rain":
      imgURL = require("../Static/Icons/moderate-rain.png");
      break;
    case "Light Rain":
      imgURL = require("../Static/Icons/light-rain.png");
      break;
    case "Light Showers":
      imgURL = require("../Static/Icons/light-rain.png");
      break;
    case "Cloudy":
      imgURL = require("../Static/Icons/cloudy.png");
      break;
    case "Fair & Warm":
      imgURL = require("../Static/Icons/sunny.png");
      break;
    case "Fair (Day)":
      imgURL = require("../Static/Icons/sunny.png");
      break;
    case "Hazy":
      imgURL = require("../Static/Icons/hazy.png");
      break;
    case "Slightly Hazy":
      imgURL = require("../Static/Icons/slightly-hazy.png");
      break;
    case "Fair (Night)":
      imgURL = require("../Static/Icons/fair-night.png");
      break;
    case "Heavy Thundery Showers":
      imgURL = require("../Static/Icons/heavy-tundery-showers.png");
      break;
    case "Heavy Thundery Showers with Gusty Winds":
      imgURL = require("../Static/Icons/heavy-tundery-showers-wind.png");
      break;
    case "Thundery Showers":
      imgURL = require("../Static/Icons/thunder-shower.png");
      break;
    case "Passing Showers":
      imgURL = require("../Static/Icons/passing-showers.png");
      break;
    case "Heavy Rain":
      imgURL = require("../Static/Icons/heavy-rain.png");
      break;
    case "Showers":
      imgURL = require("../Static/Icons/moderate-rain.png");
      break;
    case "Windy":
      imgURL = require("../Static/Icons/windy.png");
      break;
    default:
      imgURL = require("../Static/Icons/cloudy.png");
  }
  return imgURL;
}

export function ChooseTopImageSingapore({ airQualityDescription }) {
  let imgURL_jpg;
  let imgURL_webp;

  const hour = new Date().getHours();

  // console.log('hour' + hour);
  if (hour > 7 && hour < 19) {
    if (airQualityDescription === "Good") {
      imgURL_jpg = require("../Static/Images/good-day.jpg");
      imgURL_webp = require("../Static/Images/good-day.webp");
    } else if (airQualityDescription === "Moderate") {
      imgURL_jpg = require("../Static/Images/moderate-day.jpg");
      imgURL_webp = require("../Static/Images/moderate-day.webp");
    } else if (airQualityDescription === "Unhealthy") {
      imgURL_jpg = require("../Static/Images/unhealthy-day.jpg");
      imgURL_webp = require("../Static/Images/unhealthy-day.webp");
    } else if (airQualityDescription === "Very Unhealthy") {
      imgURL_jpg = require("../Static/Images/very-unhealthy-day.jpg");
      imgURL_webp = require("../Static/Images/very-unhealthy-day.webp");
    } else {
      imgURL_jpg = require("../Static/Images/hazarduos.jpg");
      imgURL_webp = require("../Static/Images/hazarduos.webp");
    }
  } else {
    if (airQualityDescription === "Good") {
      imgURL_jpg = require("../Static/Images/good-night.jpg");
      imgURL_webp = require("../Static/Images/good-night.webp");
    } else if (airQualityDescription === "Moderate") {
      imgURL_jpg = require("../Static/Images/moderate-night.jpg");
      imgURL_webp = require("../Static/Images/moderate-night.webp");
    } else if (airQualityDescription === "Unhealthy") {
      imgURL_jpg = require("../Static/Images/unhealty-night.jpg");
      imgURL_webp = require("../Static/Images/unhealty-night.webp");
    } else if (airQualityDescription === "Very Unhealthy") {
      imgURL_jpg = require("../Static/Images/very-unhealthy-night.jpg");
      imgURL_webp = require("../Static/Images/very-unhealthy-night.webp");
    } else {
      imgURL_jpg = require("../Static/Images/hazarduos.jpg");
      imgURL_webp = require("../Static/Images/hazarduos.webp");
    }
  }
  return (
    <picture>
      <source type="image/webp" srcSet={imgURL_webp} />
      <source type="image/jpg" srcSet={imgURL_jpg} />
      <img
        // className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        className="h-48 w-full rounded object-cover shadow-lg"
        alt="Singapore"
        src={imgURL_jpg}
      />
    </picture>
  );
}
