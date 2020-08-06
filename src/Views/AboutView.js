import React from "react";
import { Helmet } from "react-helmet";

function AboutView() {
  return (
    <section className="text-gray-700 body-font">
      <Helmet>
        <title>About Page</title>
        <meta
          name="description"
          content="This page is about the author, Federico Tartarini."
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-2/6 w-3/6 mb-8 object-cover object-center rounded-full border-4 shadow-lg"
          alt="author"
          src={require("../Static/Images/me.jpg")}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Air Quality and Weather Singapore
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello! My name is Federico Tartarini, the developer of the Air
            Quality and Weather - Singapore website and applications for
            Android. My aim is to develop an easy to use website that allows you
            to check the weather forecast and the air quality in Singapore.
          </p>
          <p className="mb-8 leading-relaxed">
            This website lets you to monitor and track in real-time the standard
            indices of the major outdoor pollutants: Particulate matter (PM10
            and PM2.5), Ozone (O3), Nitrogen Oxide (NOx), Sulphur Oxide (SOx)
            and Carbon Monoxide in Singapore. The websites also displays how
            these indices varied over the course of the last 24 hours. So you
            can easily check and track outdoor air pollutants in Singapore on a
            day-to-day basis or during the haze season. The application can also
            be used to monitor the current weather conditions in your location
            as well as the 24-h and 2-h weather forecasts for Singapore. It also
            features a rain radar.
          </p>
          <div className="flex w-full justify-center">
            <a href="https://www.buymeacoffee.com/FedericoT">
              <img
                src="https://cdn.buymeacoffee.com/buttons/arial-orange.png"
                alt="Buy Me A Coffee"
                className="rounded shadow-lg"
                style={{ height: 51, width: 217 }}
              />
            </a>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            To support my work please consider buying me a coffee.
          </p>
          <p className="mb-8 leading-relaxed">
            You can download the Air Quality and Weather Singapore app for
            Android by clicking the link below.
          </p>
          <div
            className="flex mb-8"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.airqualityapp&hl=en"
              )
            }
          >
            <button className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
          </div>
          <p className="leading-relaxed">
            I would like to thank the Singaporean government who provides API
            that can be used to download air quality, weather and forecasts data
            in real-time. <br /> In addition, I would like to thank the
            developers at OpenStreetMap, Leaflet, React, FontAwesome, Inkscape,
            Google and Oleksii Schastlyvyi who created{" "}
            <a href="https://www.rainviewer.com/api.html">RainViewer</a>. <br />
            I could now have created this website without their amazing work.
          </p>
          <p>
            I have released the website code open-source and you can download it{" "}
            <a href="https://github.com/FedericoTartarini/air-quality-weather-sg">
              here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutView;
