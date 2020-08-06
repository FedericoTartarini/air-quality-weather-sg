import React from "react";
import { Helmet } from "react-helmet";

function WikiPM25() {
  return (
    <section className="text-gray-700 body-font">
      <Helmet>
        <title>PM25</title>
        <meta
          name="description"
          content="This page provides information about the Particular Matter (PM) 2.5 1-hour readings."
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <img
          className="mb-8 object-cover object-center rounded-sm shadow-lg"
          alt="Particular Matter (PM) 2.5"
          src={require("../Static/Images/unhealthy-day.jpg")}
        />
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="text-3xl mb-4 font-medium text-gray-900">
            1-hour Particular Matter 2.5 µm (PM<sub>2.5</sub>)
          </h1>
          <p className="mb-8 leading-relaxed">
            The 1-hr PM<sub>2.5</sub> concentration is the average concentration
            of PM<sub>2.5</sub>, in micrograms per cubic metre (µg/m3), measured
            in the air over the past hour. The National Environment Agency in
            Singapore reports PM<sub>2.5</sub> concentrations for five locations
            across the country. During the haze episodes, the NEA recommends to
            refer to 1-hour PM<sub>2.5</sub> concentration readings which are a
            better indicator of the current outdoor air pollution for immediate
            activities. For example going out for a run or a walk. On the other
            hand, the Pollutant Standards Index (PSI) values are based on the
            last 24-h data consequently PSI readings are more useful when
            planning for activities in the coming days or events during which
            participants will be outdoors for an extended period of time.
          </p>
          <p className="mb-8 leading-relaxed">
            The NEA calculates classifies the concentrations of 1-hr PM
            <sub>2.5</sub> in four categories as follows: "normal", "elevated",
            "high" and "very high" and for each category provides health
            recommendations.
          </p>
          {/* todo add table for PM2.5 https://www.nea.gov.sg/media/news/news/index/new-personal-guide-based-on-1-hr-pm2.5-concentration-readings-to-guide-the-public-during-haze-season*/}
          {/*  todo add link to NEA website */}
          {/*  todo write about activities */}
        </div>
      </div>
    </section>
  );
}

export default WikiPM25;
