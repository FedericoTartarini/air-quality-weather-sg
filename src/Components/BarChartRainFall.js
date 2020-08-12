import React from "react";

import { Bar } from "react-chartjs-2";

function BarChartRainFall() {
  const { innerWidth: width } = window;

  let chartHeight;
  if (width > 500) {
    chartHeight = 250;
  } else {
    chartHeight = 350;
  }

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
        label: "Monthly cumulative rainfall",
        backgroundColor: "rgba(31,119,180,0.6)",
        borderColor: "rgba(31,119,180,0.8)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(31,119,180,0.8)",
        hoverBorderColor: "rgba(31,119,180,1)",
        data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
        yAxisID: "y1",
      },
      {
        label: "Number of rain days",
        backgroundColor: "rgba(44,160,44,0.6)",
        borderColor: "rgba(44,160,44,0.8)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(44,160,44,0.8)",
        hoverBorderColor: "#2ca02c",
        data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
        yAxisID: "y2",
      },
    ],
  };

  return (
    <Bar
      data={data}
      height={chartHeight}
      options={{
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: true,
              },
              ticks: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              id: "y1",
              type: "linear",
              position: "left",
              gridLines: { color: "rgba(0, 0, 0, 0.05)" },
            },
            {
              id: "y2",
              type: "linear",
              position: "right",
              ticks: {
                // max: 1,
                // min: 0
                beginAtZero: true,
              },
              gridLines: { color: "rgba(0, 0, 0, 0.05)" },
            },
          ],
        },
      }}
    />
  );
}

export default BarChartRainFall;
