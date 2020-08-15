import React from "react";
import { Helmet } from "react-helmet";
import BarChartRainFall from "../Components/BarChartRainFall";
import LineChartTemperature from "../Components/LineChartTemperature";

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
            The outdoor temperature do not vary much between seasons. All months
            have mean daily max temperature in the low thirties and mean daily
            minimum temperatures in the mid twenties. The highest temperature
            excursions are observed intra-day, at night outdoor temperatures are
            significantly lower than during the day.
          </p>
          <h1 className="text-2xl mb-4 font-medium text-gray-900">Rainfall</h1>
          <p className="mb-8 leading-relaxed">
            In Singapore rains approximately every second day on average (167
            days of rain). Rain if often heavy and afternoon thunderstorms are
            frequent. The NEA reports that the long term total mean annual
            rainfall is 2166 mm.
          </p>
          <p className="mb-8 leading-relaxed">
            While in Singapore often rains and there is not an official dry
            season, it generally rains more between November and January. This
            is caused bu the fact that the tropical rain-belt moves towards
            Singapore. While the driest month on average is February since the
            same rain-belt moves south towards Java. Rainfall frequently occurs
            in the afternoon, consequently most of the rin falls during the day
            and not at night. In addition, despite the fact that Singapore is a
            small country (approximately 50 km in width), most of the rain falls
            on the western side of the island.
          </p>
          {/*<div className="mb-8 container">*/}
          {/*  <BarChartRainFall />*/}
          {/*</div>*/}
          <h1 className="text-2xl mb-4 font-medium text-gray-900">
            Temperature
          </h1>
          <p className="mb-8 leading-relaxed">
            High temperatures are recorded in Singapore throughout the year. The
            outdoor temperature rarely falls below 23 - 25 °C at night and does
            not exceed 31 - 33 °C during the hottest hours of the day. May and
            June are characterized by the highest mean monthly temperatures
            (daily mean temperature 27.8 °C), while December and January are the
            coolest months (daily mean temperature 26.0 °C). The tropical heat
            is mitigated by the sea, which surrounds the whole country and
            dampens temperature fluctuations between day and night and between
            seasons. Bukit Timah is the highest point (163 meters) in Singapore
            the temperature on this hill is not much lower than the other
            surrounding areas. The figure below shows the temperature variation
            across different months of the year in Singapore from collected
            between 2016 and 2020 across all weather stations in Singapore.
          </p>
          <div className="mb-8 container">
            <LineChartTemperature />
          </div>
          {/* todo add chart title */}
          <img
            className="mb-8 object-cover object-center"
            alt="Particular Matter (PM) 2.5"
            src={require("../Static/Images/heatmap_tmp.png")}
          />
          <h1 className="text-2xl mb-4 font-medium text-gray-900">
            Relative Humidity
          </h1>
          <p className="mb-8 leading-relaxed">
            Singapore is very humid throughout the year. The biggest
            fluctuations in relative humidity are observed between dawn and
            mid-day due to the marked change in temperature between these two
            periods. With relative higher than 90 % before sunrise and around 60
            % in the early afternoon, when it does not rain. Despite the hot
            temperatures recorded in Singapore, relative humidity frequently
            reaches 100 %.
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
          <h1 className="text-xl mb-4 font-medium text-gray-900">
            Southwest Monsoon (Jun - Sep)
          </h1>
          <p className="mb-8 leading-relaxed">
            During this monsoon season Sumatra Squalls occasionally occurs
            between dawn and noon. With wnd gusts that can reach up to 40-80
            km/h. Afternoon showers are also common. Southeasterly to southerly
            winds are frequent in this period.
          </p>
          <h1 className="text-xl mb-4 font-medium text-gray-900">
            Inter-monsoon (Oct - Nov)
          </h1>
          <p className="mb-8 leading-relaxed">
            This phase is characterized by light and variable winds. Afternoon
            thunderstorms are frequent. Higher rainfalls are registered in this
            during these months than in the previous inter-monsoon period.
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
