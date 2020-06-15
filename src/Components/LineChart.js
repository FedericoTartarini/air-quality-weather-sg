import React from "react";

import { Line } from "react-chartjs-2";
import Loader from "./Loader";
import { MapNamePollutants } from "../Functions/Utils";

function LineChart({ data, pollutants, stationName, footNote }) {
  const { innerWidth: width, innerHeight: height } = window;

  console.log(width);

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
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgb(30,145,214)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(30,145,214)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(30,145,214)",
        pointHoverBorderColor: "rgb(73,73,73)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "PSI",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgb(116, 111, 117)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(116, 111, 117)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(116, 111, 117)",
        pointHoverBorderColor: "rgb(73,73,73)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "PSI",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#525252",
        borderColor: "#6a197d",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#6a197d",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#6a197d",
        pointHoverBorderColor: "rgb(73,73,73)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      // {
      //   label: "",
      //   fill: true,
      //   lineTension: 0.1,
      //   backgroundColor: "rgba(17,167,7,0.18)",
      //   borderCapStyle: "butt",
      //   borderDash: [],
      //   borderDashOffset: 0.0,
      //   borderJoinStyle: "miter",
      //   pointBorderWidth: 0,
      //   pointHoverRadius: 0,
      //   pointHoverBorderWidth: 0,
      //   pointRadius: 0,
      //   pointHitRadius: 0,
      //   data: [50, 50],
      // },
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
          <p className="text-xs text-center text-gray-800">{prop}</p>
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default LineChart;
