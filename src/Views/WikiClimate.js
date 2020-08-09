import React from "react";
import { Helmet } from "react-helmet";

function WikiClimate() {
  return (
    <section className="text-gray-700 body-font">
      <Helmet>
        <title>Climate Singapore</title>
        <meta
          name="description"
          content="This page describes the tropical climate in Singapore."
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <picture>
            <source
              type="image/webp"
              srcSet={require("../Static/Images/tropical.webp")}
            />
            <source
              type="image/jpg"
              srcSet={require("../Static/Images/tropical.jpg")}
            />
            <img
              src={require("../Static/Images/tropical.jpg")}
              className="mb-8 object-cover object-center rounded-sm shadow-lg"
              alt="tropical weather"
            />
          </picture>
          <h1 className="text-3xl mb-4 font-medium text-gray-900">
            Singapore's climate
          </h1>
          <p className="mb-8 leading-relaxed">
            Singapore is located between the 1st and 2nd parallel and it is
            characterized by a tropical climate. It has abundant rainfall
            throughout the year, high temperatures and high relative humidity.
            While temperatures do not vary much between seasons, which are all
            characterised by mean daily max temperatures between 30 °C and 33 °C
            and mean daily temperatures between 24 °C and 26 °C. The highest
            temperature excursions are observed intra-day, where the
            temperatures at night are significantly lower than during the day.
            These fluctuations are mainly influenced by the solar heating.
          </p>
          <h1 className="text-2xl mb-4 font-medium text-gray-900">Seasons</h1>
          <p className="mb-8 leading-relaxed">
            Singapore climate is characterized by two distinct monsoon seasons
            separated by two inter-monsoonal periods. One monsoon season
            (Northeast Monsoon) periodically occurs between December and early
            March, while the second monsoon season is from June to September
            (Southwest Monsoon).
          </p>
          <h1 className="text-xl mb-4 font-medium text-gray-900">
            Northeast Monsoon (Dec - Mar)
          </h1>
          <p className="mb-8 leading-relaxed">
            Is generally characterized by northerly to northeasterly winds and
            it has two distinct phases. The wet phase (December to early
            January) features moderate to heavy rains with wind gusts that can
            reach up to 25-35 km/h, and rapid development of afternoon showers.
            Which are caused the sun radiation heating up the ground which in
            turns heats up the air. Hot air rises to produce convective clouds
            which can turn into intense thunderstorms if the monsoon-rain belt
            is in the vicinity of Singapore.
          </p>
          <h1 className="text-xl mb-4 font-medium text-gray-900">
            Inter-monsoon (Mar - May)
          </h1>
          <p className="mb-8 leading-relaxed">
            This phase is characterized by light and variable winds. Daily
            maximum temperatures which can exceed 32 °C and afternoon and late
            night thunderstorms.
          </p>
          {/*  todo complete */}
          {/* http://www.weather.gov.sg/climate-climate-of-singapore/ */}
          {/*  https://www.nea.gov.sg/docs/default-source/resource/guidebook-on-climate-of-singapore.pdf */}
        </div>
      </div>
    </section>
  );
}

export default WikiClimate;
