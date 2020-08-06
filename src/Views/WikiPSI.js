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
          alt="author"
          src={require("../Static/Images/gas.jpg")}
        />
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
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
          <p className="mb-8 leading-relaxed">
            The NEA calculates the 24-h PSI value firstly by linearly mapping
            each individual sub-pollutant (i.e., 24-h PM10, 24-h PM2.5, 8-h CO,
            24-h SO2, 1-h NO2, 8-h O3) to a sub-index ranging from 0 to 500.
            Then the overall 24-h PSI value is assumed to be equal to the
            maximum value of any of the pollutants sub-indices. The table below
            shows the air quality descriptor relative to the specific PSI range.
          </p>
          <TableIndicesCategories />
          <p className="mb-8 leading-relaxed"></p>
          {/*  todo write about difference between PSI and API */}
          {/*  todo add link to NEA website */}
          {/*  todo write about activities */}
        </div>
      </div>
    </section>
  );
}

export default WikiPSI;
