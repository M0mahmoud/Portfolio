import React from "react";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faCodepen,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";

import gmail from "../Images/gmail.svg";

function Footer() {
  return (
    <div className="footer py-3">
      <div className="container">
        <ul className="nav justify-content-center align-items-center">
          <li className="nav-item mx-3">
            <a
              className="d-flex align-items-center"
              href="mailto:houdmohamed85@gmail.com"
            >
              <span className="me-1">E-Mail</span>
              <img
                className="img-gmail d-inline-block"
                src={gmail}
                alt="Gmail IMG"
              />
            </a>
          </li>
          <li className="divider me-3"></li>
          <li className="nav-item  me-3">
            <a
              href="https://www.linkedin.com/in/mahmoud05/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="me-1">LinkedIn</span>
              <FontAwesomeIcon
                className="icon-link  linkedin"
                icon={faLinkedin}
              />
            </a>
          </li>
          <li className="divider  me-3"></li>
          <li className="nav-item  me-3">
            <a
              href="https://github.com/M0mahmoud"
              target="_blank"
              rel="noreferrer"
            >
              <span className="me-1">Github</span>
              <FontAwesomeIcon className="icon-link text-primary" icon={faGithub} />
            </a>
          </li>
          <li className="divider  me-3"></li>
          <li className="nav-item  me-3">
            <a
              href="https://codepen.io/m0mahmoud"
              target="_blank"
              rel="noreferrer"
            >
              <span className="me-1">Codepen</span>
              <FontAwesomeIcon className="icon-link text-light" icon={faCodepen} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
