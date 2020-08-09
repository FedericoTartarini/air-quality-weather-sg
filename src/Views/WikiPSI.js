import React from "react";
import { Helmet } from "react-helmet";
import TableIndicesCategories from "../Components/TableIndicesCategories";

function WikiPSI() {
  return (
    <section className="text-gray-700 body-font">
      <Helmet>
        <title>PSI</title>
        <meta
          name="description"
          content="This page describes provides information about the Pollutant Standards Index (PSI)."
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <img
          className="mb-8 object-cover object-center rounded-sm shadow-lg"
          alt="Pollutant Standards Index"
          src={require("../Static/Images/gas.jpg")}
        />
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="text-3xl mb-4 font-medium text-gray-900">
            Pollutant Standards Index (PSI)
          </h1>
          <p className="mb-8 leading-relaxed">
            The Pollutant Standards Index (PSI) it is an index that the National
            Environment Agency in Singapore uses to provide information about
            daily levels of air quality in the country. The PSI is computed
            based on the concentration levels of particulate matter (PM10), fine
            particulate matter (PM2.5), sulphur dioxide (SO2), nitrogen dioxide
            (NO2), ozone (O3), and carbon monoxide (CO). These six pollutant
            parameters determine the PSI, hence, it provides an overall index
            about the outdoor air quality. The NEA monitors the outdoor air
            pollution using a network of air monitoring stations located in
            different parts of Singapore. It is important to remember that the
            PSI value is based on historical data. Consequently during haze
            episodes it is recommended to refer to 1-hour PM<sub>2.5</sub>{" "}
            concentration readings which are a better indicator of the outdoor
            air pollution.
          </p>
          <p className="leading-relaxed">
            The NEA calculates the 24-h PSI value firstly by linearly mapping
            each individual sub-pollutant (i.e., 24-h PM10, 24-h PM2.5, 8-h CO,
            24-h SO2, 1-h NO2, 8-h O3) to a sub-index ranging from 0 to 500.
            Then the overall 24-h PSI value is assumed to be equal to the
            maximum value of any of the pollutants sub-indices. The table below
            shows the air quality descriptor relative to the specific PSI range.
          </p>
          <TableIndicesCategories index={"PSI value"} />
          {/*  todo add link to NEA website */}
          {/*  todo write about activities */}
          <h1 className="text-xl mb-4 mt-8 font-medium text-gray-900">
            Difference between the PSI and the Air Quality Index (AQI)
          </h1>
          <p className="mb-8 leading-relaxed">
            The U.S. Environmental Protection Agency (EPA) and other air quality
            websites like aqicn.org use the Air Quality Index (AQI) to provide
            information about the outdoor air quality. The AQI is calculated
            based on four major air pollutants: particulate matter (PM), sulphur
            dioxide (SO2), ozone (O3), and carbon monoxide (CO). Hence,
            currently it does not includes nitrogen dioxide (NO2). As the PSI
            the AQI ranges on a scale from 0 to 500. Where higher values refer
            to higher concentrations of outdoor air pollutants. Values of AQI
            below 100 are considered by the EPA to be satisfactory, while values
            above 100 are considered to be unhealthy. You can find out more
            about the AQI{" "}
            <a href={"https://www3.epa.gov/airnow/aqi_brochure_02_14.pdf"}>
              in this brochure
            </a>{" "}
            published by EPA. The table below shows how the EPA divides the AQI
            in six levels of health concern.
            <div className="flex mx-auto justify-center py-3">
              <table className="table-auto text-center">
                <thead>
                  <tr>
                    <th className="px-4 py-1">AQI value</th>
                    <th className="px-4 py-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-medium" style={{ color: "#2ca02c" }}>
                    <td className="border px-4 py-1">0 - 50</td>
                    <td className="border px-4 py-1">Good</td>
                  </tr>
                  <tr className="font-medium" style={{ color: "#fcc105" }}>
                    {" "}
                    <td className="border px-4 py-1">51 - 100</td>
                    <td className="border px-4 py-1">Moderate</td>
                  </tr>
                  <tr className="font-medium" style={{ color: "#ff7f0e" }}>
                    <td className="border px-4 py-1">101 - 150</td>
                    <td className="border px-4 py-1">
                      Unhealthy for Sensitive Groups
                    </td>
                  </tr>
                  <tr className="font-medium" style={{ color: "#d62728" }}>
                    <td className="border px-4 py-1">151 - 200</td>
                    <td className="border px-4 py-1">Unhealthy</td>
                  </tr>
                  <tr className="font-medium" style={{ color: "#9467bd" }}>
                    <td className="border px-4 py-1">201 - 300</td>
                    <td className="border px-4 py-1">Very Unhealthy</td>
                  </tr>
                  <tr className="font-medium" style={{ color: "#800000" }}>
                    <td className="border px-4 py-1">301 - 500</td>
                    <td className="border px-4 py-1">Hazardous</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WikiPSI;
