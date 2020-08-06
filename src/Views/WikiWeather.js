import React from "react";
import { Helmet } from "react-helmet";

function WikiWeather() {
  return (
    <section className="text-gray-700 body-font">
      <Helmet>
        <title>Weather</title>
        <meta
          name="description"
          content="This page provides information about where the API that was used to download
          the temperature and relative humidity data"
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <img
          className="mb-8 object-cover object-center rounded-sm shadow-lg"
          alt="cloud, moon and sky"
          src={require("../Static/Images/weather.jpg")}
        />
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="text-3xl mb-4 font-medium text-gray-900">
            Weather data
          </h1>
          <p className="mb-8 leading-relaxed">
            The National Environment Agency (NEA) in Singapore provides
            Application Programming Interfaces (API)s that can be used to
            download weather data at 1-minute intervals. The following data ara
            available temperature, relative humidity, precipitations and wind
            conditions for a total of 64 weather stations across Singapore.
          </p>
          <p className="leading-relaxed">
            To find out more visit the{" "}
            <a href={"https://data.gov.sg/dataset/realtime-weather-readings"}>
              Data.gov.sg
            </a>{" "}
            official website
          </p>
        </div>
      </div>
    </section>
  );
}

export default WikiWeather;
