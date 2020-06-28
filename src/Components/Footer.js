import React from "react";
import {
  faGithub,
  faGooglePlay,
  faLinkedin,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const logo = require("../logo.svg");

function Footer() {
  return (
    <footer className="text-gray-900 body-font absolute w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center">
          <img src={logo} alt="logo" width={40} />
          <div>
            <p className="ml-3 text-xl">Air Quality and Weather</p>
            <p className="text-xs ml-3">v 0.0.1</p>
          </div>
        </span>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020
          <a
            href="https://federicotartarini.github.io"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Federico Tartarini
          </a>
        </p>
        <span className="inline-flex text-gray-700 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="mx-1"
            href="https://www.linkedin.com/in/federico-tartarini-3991995b/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"lg"} />
          </a>
          <a
            className="mx-1"
            href="https://github.com/FedericoTartarini"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size={"lg"} />
          </a>
          <a
            className="mx-1"
            href="https://www.researchgate.net/profile/Federico_Tartarini"
            aria-label="Researchgate"
          >
            <FontAwesomeIcon icon={faResearchgate} size={"lg"} />
          </a>
          <a
            className="mx-1"
            href="https://play.google.com/store/apps/details?id=com.airqualityapp"
            aria-label="GooglePlay"
          >
            <FontAwesomeIcon icon={faGooglePlay} size={"lg"} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
