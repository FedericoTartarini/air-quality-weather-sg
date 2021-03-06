import React from "react";

import { Line } from "react-chartjs-2";
import Loader from "./Loader";
import { MapNamePollutants } from "../Functions/Utils";

function LineChartPollutants({ data, pollutants, stationName, footNote }) {
  const { innerWidth: width } = window;

  let chartHeight;
  if (width > 500) {
    chartHeight = 150;
  } else {
    chartHeight = 250;
  }

  let dataChart = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "PSI",
        fill: false,
        lineTension: 0.1,
        borderColor: "rgb(116, 111, 117)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(116, 111, 117)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(116, 111, 117)",
        pointHoverBorderColor: "#ddd",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "PSI",
        fill: false,
        lineTension: 0.1,
        borderColor: "#9467bd",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#9467bd",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#9467bd",
        pointHoverBorderColor: "#ddd",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "PSI",
        fill: false,
        lineTension: 0.1,
        borderColor: "#8c564b",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#8c564b",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#8c564b",
        pointHoverBorderColor: "#ddd",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  let content = null;

  if (data.error) {
    content = <div>Could not fetch API</div>;
  }

  if (data.loading) {
    content = <Loader />;
  }

  if (data.data) {
    dataChart.labels = data.data.items.map(
      (label) => label.timestamp.split("T")[1].split(":")[0]
    );

    pollutants.map((pollutant, ix) => {
      dataChart.datasets[ix].data = data.data.items.map(
        (value) => value.readings[pollutant][stationName]
      );
      dataChart.datasets[ix].label = MapNamePollutants(pollutant, false);
    });

    // dataChart.datasets[3].data = data.data.items.map((value) => 50);

    content = (
      <div className="container mx-auto my-3 p-4 shadow-lg border rounded">
        <Line
          data={dataChart}
          options={{
            responsive: true,
            scales: {
              xAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Hour",
                  },
                  ticks: {
                    major: {
                      fontStyle: "bold",
                      fontColor: "#FF0000",
                    },
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Sub-index value",
                  },
                },
              ],
            },
          }}
          height={chartHeight}
        />
        {footNote.map((prop) => (
          <p key={prop} className="text-xs text-center text-gray-800">
            {prop}
          </p>
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default LineChartPollutants;
