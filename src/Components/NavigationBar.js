import React from "react";
import { Link } from "react-router-dom";

const logo = require("../logo.svg");

function NavigationBar() {
  return (
    <div className="bg-gray-200">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 mr-6">
            <img src={logo} alt="logo" width={60} />
            <span className="font-semibold text-xl tracking-tight ml-3 w-40">
              Air Quality and Weather - SG
            </span>
          </div>
        </Link>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded hover:text-gray-600 hover:border-white">
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
        <div className="w-full block flex-end lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/charts">
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 mr-4">
                Charts
              </a>
            </Link>
            <Link>
              <a className="block mt-4 lg:inline-block lg:mt-0 over:text-gray-600 mr-4">
                2-h Forecast
              </a>
            </Link>
            <Link>
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600">
                Map Pollutants
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
