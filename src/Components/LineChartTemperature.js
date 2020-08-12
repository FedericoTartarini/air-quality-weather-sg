import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Max",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#d62728",
      borderColor: "#d62728",
      borderCapStyle: "butt",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [37, 36, 36.1, 36, 36.6, 35.7, 36, 36, 36.2, 36, 36, 36.9],
    },
    {
      label: "Mean Daily Max",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#ff7f0e",
      borderColor: "#ff7f0e",
      borderCapStyle: "butt",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        32.95322581,
        33.09099099,
        34.05887097,
        34.11623932,
        33.85367647,
        32.86833333,
        33.02916667,
        33.2,
        33.29166667,
        33.45564516,
        32.75304348,
        32.725,
      ],
    },
    {
      label: "Mean",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#2ca02c",
      borderColor: "#2ca02c",
      borderCapStyle: "butt",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        27.35555022,
        27.59824224,
        28.13369238,
        28.37875302,
        28.81499024,
        28.4526116,
        28.55327267,
        28.70750286,
        28.32889852,
        28.07152723,
        27.48906416,
        27.35376721,
      ],
    },
    {
      label: "Mean Daily Min",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#1f77b4",
      borderColor: "#1f77b4",
      borderCapStyle: "butt",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        23.57741935,
        23.84954955,
        23.83467742,
        23.93504274,
        24.51029412,
        24.34416667,
        24.4025,
        24.51612903,
        23.96416667,
        23.65,
        23.48608696,
        23.66935484,
      ],
    },
    {
      label: "Min",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#054877",
      borderColor: "#054877",
      borderCapStyle: "butt",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [19, 21.4, 21.5, 21, 21, 21.6, 21, 21, 21.1, 21.3, 19, 21],
    },
  ],
};

function LineChartTemperature() {
  const { innerWidth: width } = window;

  let chartHeight;
  if (width > 500) {
    chartHeight = 125;
  } else {
    chartHeight = 250;
  }
  return (
    <Line
      data={data}
      height={chartHeight}
      options={{
        title: { display: true, text: "Monthly temperatures" },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Temperature °C",
              },
            },
          ],
        },
      }}
    />
  );
}

export default LineChartTemperature;
