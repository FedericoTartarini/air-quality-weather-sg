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
