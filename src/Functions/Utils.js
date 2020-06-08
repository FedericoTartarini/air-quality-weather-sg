export function GetLatestReading(stationName, _data) {
  const lastReading = _data.items[_data.items.length - 1].readings;
  // console.log(lastReading);
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
        healthy: "Normal activities outdoors.",
        old: "Normal activities outdoors.",
        sick: "Normal activities outdoors.",
      };
    case "Moderate":
      return {
        healthy: "Normal activities outdoors.",
        old: "Normal activities outdoors.",
        sick: "Normal activities outdoors.",
      };
    case "Unhealthy":
      return {
        healthy: "Reduce prolonged or strenuous outdoor physical activities.",
        old: "Minimise prolonged or strenuous outdoor physical activities.",
        sick: "Avoid prolonged or strenuous outdoor physical activities.",
      };
    case "Very Unhealthy":
      return {
        healthy: "Avoid prolonged or strenuous outdoor physical activities.",
        old: "Minimise outdoor activity.",
        sick: "Avoid outdoor activity.",
      };
    case "Hazardous":
      return {
        healthy: "Minimise outdoor activity.",
        old: "Avoid outdoor activity.",
        sick: "Avoid outdoor activity.",
      };
    default:
      return {
        healthy: "Minimise outdoor activity.",
        old: "Avoid outdoor activity.",
        sick: "Avoid outdoor activity.",
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
    case "co_sub_index":
      return abbreviated ? "CO" : "CO sub-index**";
    case "so2_sub_index":
      return abbreviated ? "SO2" : "SO2 sub-index***";
    case "no2_one_hour_max":
      return abbreviated ? "NO2" : "NO2 1-h max (µg/m3)";
    case "pm25_one_hourly":
      return abbreviated ? "1-h PM2.5" : "NO2 1-h max (µg/m3)";
    default:
      return "Not mapped";
  }
}
