import React from "react";
import {
  faGithub,
  faGooglePlay,
  faLinkedin,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const logo = require("../logo.svg");

function Footer(props) {
  return (
    <footer className="text-gray-700 body-font absolute w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} alt="logo" width={40} />
          <span className="ml-3 text-xl">Air Quality and Weather</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020
          <a
            href="https://federicotartarini.github.io"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Federico Tartarini
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-gray-500 mx-1"
            href="https://www.linkedin.com/in/federico-tartarini-3991995b/"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"lg"} />
          </a>
          <a
            className="text-gray-500 mx-1"
            href="https://github.com/FedericoTartarini"
          >
            <FontAwesomeIcon icon={faGithub} size={"lg"} />
          </a>
          <a
            className="text-gray-500 mx-1"
            href="https://www.researchgate.net/profile/Federico_Tartarini"
          >
            <FontAwesomeIcon icon={faResearchgate} size={"lg"} />
          </a>
          <a
            className="text-gray-500 mx-1"
            href="https://play.google.com/store/apps/details?id=com.airqualityapp"
          >
            <FontAwesomeIcon icon={faGooglePlay} size={"lg"} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;