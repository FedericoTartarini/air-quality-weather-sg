import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const logo = require("../logo.svg");

function NavigationBar() {
  return (
    // <header className="text-gray-700 body-font">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    //       <img src={logo} alt="logo" width={60} />
    //       <span className="ml-3 text-xl">
    //         Air Quality and Weather Singapore
    //       </span>
    //     </a>
    //     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    //       <a className="mr-5 hover:text-gray-900">Current Observation</a>
    //       <a className="mr-5 hover:text-gray-900">2-h Forecast</a>
    //     </nav>
    //     {/*<FontAwesomeIcon icon={faBars} />*/}
    //   </div>
    // </header>
    <div className="bg-gray-200">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img src={logo} alt="logo" width={60} />
          <span className="font-semibold text-xl tracking-tight ml-3 w-40">
            Air Quality and Weather - SG
          </span>
        </div>
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
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 mr-4"
            >
              Charts
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 over:text-gray-600 mr-4"
            >
              2-h Forecast
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600"
            >
              Map Pollutants
            </a>
          </div>
          {/*<div>*/}
          {/*  <a*/}
          {/*    href="#"*/}
          {/*    className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:border-transparent hover:text-gray-600 hover:bg-gray-100 mt-4 lg:mt-0"*/}
          {/*  >*/}
          {/*    Download*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
