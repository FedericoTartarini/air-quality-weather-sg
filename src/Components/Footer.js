import React from "react";
import {
  faGithub,
  faGooglePlay,
  faLinkedin,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const logo = require("../Static/Icons/logo192.png");

function Footer() {
  return (
    <footer className="text-gray-900 body-font absolute w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center">
          <picture className={"flex justify-center align-center"}>
            <source
              type="image/webp"
              srcSet={require("../Static/Icons/logo192.webp")}
            />
            <source
              type="image/png"
              srcSet={require("../Static/Icons/logo192.png")}
            />
            <img
              src={logo}
              className="w-3/6 rounded-full border-4 shadow-lg"
              alt="logo website"
            />
          </picture>
          <div>
            <p className="text-xl">Air Quality and Weather</p>
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
            className="mx-3"
            href="https://www.linkedin.com/in/federico-tartarini-3991995b/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
          </a>
          <a
            className="mx-3"
            href="https://github.com/FedericoTartarini"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size={"2x"} />
          </a>
          <a
            className="mx-3"
            href="https://play.google.com/store/apps/details?id=com.airqualityapp"
            aria-label="GooglePlay"
          >
            <FontAwesomeIcon icon={faGooglePlay} size={"2x"} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
