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
