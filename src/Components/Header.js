import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const logo = require("../logo.svg");

function Header() {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" width={60} />
          <span className="ml-3 text-xl">
            Air Quality and Weather Singapore
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Current Observation</a>
          <a className="mr-5 hover:text-gray-900">2-h Forecast</a>
        </nav>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
