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
        32.9,
        33.0,
        34.0,
        34.1,
        33.8,
        32.8,
        33.0,
        33.2,
        33.2,
        33.4,
        32.7,
        32.7,
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
        27.3,
        27.5,
        28.1,
        28.3,
        28.8,
        28.4,
        28.5,
        28.7,
        28.3,
        28.0,
        27.4,
        27.3,
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
        23.5,
        23.8,
        23.8,
        23.9,
        24.5,
        24.3,
        24.4,
        24.5,
        23.9,
        23.6,
        23.4,
        23.6,
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
                labelString: "Temperature, °C",
              },
            },
          ],
        },
      }}
    />
  );
}

export default LineChartTemperature;
