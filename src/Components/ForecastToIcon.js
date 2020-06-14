import React from "react";

function ForecastToIcon({ description }) {
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
    case "Showers":
      imgURL = require("../Static/Icons/showers.png");
      break;
    case "Windy":
      imgURL = require("../Static/Icons/windy.png");
      break;
    default:
      imgURL = require("../Static/Icons/sunny.png");
  }
  return (
    <img
      className="h-12 w-full object-contain my-3"
      src={imgURL}
      alt="weather icon"
    />
  );
}

export default ForecastToIcon;
