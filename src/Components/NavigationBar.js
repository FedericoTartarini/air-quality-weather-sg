import React from "react";
import { Link } from "react-router-dom";

const logo = require("../logo.svg");

function NavigationBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="bg-gray-100">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
        <Link to="/air-quality-weather-sg">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" width={50} />
            <span className="font-semibold text-xl tracking-tight ml-3 w-40">
              Air Quality and Weather - SG
            </span>
          </div>
        </Link>
        <div className="block xl:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded hover:text-gray-600 hover:border-white"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            "w-full block flex-end xl:flex xl:items-center xl:w-auto" +
            (navbarOpen ? "" : " hidden")
          }
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="text-sm xl:flex-grow">
            <Link to="/air-quality-weather-sg">
              <span className="block mt-4 xl:inline-block xl:mt-0 hover:text-gray-600 ml-4">
                Home
              </span>
            </Link>
            <Link to="/charts">
              <span className="block mt-4 xl:inline-block xl:mt-0 hover:text-gray-600 ml-4">
                Charts
              </span>
            </Link>
            <Link to="/forecast">
              <span className="block mt-4 xl:inline-block xl:mt-0 over:text-gray-600 ml-4">
                Forecast
              </span>
            </Link>
            <Link to="/mapPollution">
              <span className="block mt-4 xl:inline-block xl:mt-0 over:text-gray-600 ml-4">
                Map Pollution
              </span>
            </Link>
            <Link to="/about">
              <span className="block mt-4 xl:inline-block xl:mt-0 over:text-gray-600 ml-4">
                About
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;