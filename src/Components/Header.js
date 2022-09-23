import React from "react";

import logo from "../Images/myLogo.png";
import menu from "../Images/menu.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-md sticky-top ">
      <div className="container">
        {/* <a href="/">
        </a> */}
        <Link to="/Portfolio/">
          <img src={logo} alt="MY_LOGO" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <img src={menu} className="navbar-toggler-icon" alt="Header_Menu" />
        </button>
        <div className="collapse  navbar-collapse rounded " id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className=" nav-link p-lg-3"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link to="/Portfolio/projects" className=" nav-link p-lg-3 ">
                All Projects
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
