import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

import cv from "../Images/Mahmoud.pdf";

function Mahmoud() {
  const date = new Date().getFullYear();
  const myAge = parseInt(date) - 2002;

  return (
    <div className="container py-5" id="about" data-aos="fade-up">
    <div className="title my-3 ">
          <h1>Who I'm</h1>
        </div>
      <div className="row align-items-center">
        <div className="col-lg col-md-12 col-sm-12">
          <p className="fs-5 text-white-50 lh-base fw-normal text-capitalize mb-3 ">
            Hello, I'm <span className="text-primary">Mahmoud Mohamed</span>.
            <br /> Front-End Developer From Egypt. I Have Rich Experience In Web
            Site Development And Building, I Also Work With Frame Work React Js,
            and I Love To Talk With You About Our Unique.
          </p>
          <div className="row ">
            <div className="col-lg-6 col-md-12  ">
              <ul>
                <li className=" mx-auto my-3">
                  <span className="letter-space-2 text-primary fw-bold">
                    Age :
                  </span>
                  <span className=" letter-space-2 text-white-50  fw-normal ms-3">
                    {myAge}
                  </span>
                </li>
                <li className=" mx-auto my-3">
                  <span className="letter-space-2 text-primary fw-bold">
                    Freelance :
                  </span>
                  <span className=" letter-space-2 text-white-50  fw-normal ms-3">
                    Available
                  </span>
                </li>
                <li className=" mx-auto my-3">
                  <span className="letter-space-2 text-primary fw-bold">
                    Phone :
                  </span>
                  <span className=" letter-space-2 text-white-50  fw-normal ms-3">
                    +20 115 683 2934
                  </span>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <ul>
                <li className=" mx-auto my-3">
                  <span className="letter-space-2 text-primary fw-bold">
                    country :
                  </span>
                  <span className=" letter-space-2 text-white-50  fw-normal ms-3">
                    EGYPT
                  </span>
                </li>
                <li className=" mx-auto my-3">
                  <span className="letter-space-2 text-primary fw-bold">
                    Address :
                  </span>
                  <span className=" letter-space-2 text-white-50  fw-normal ms-3">
                    Sharika , Egypt
                  </span>
                </li>
                <li className=" mx-auto my-3">
                  <span className="letter-space-2 text-primary fw-bold">
                    E-mail :
                  </span>
                  <span className=" letter-space-2 text-white-50  fw-normal ms-3">
                    houdmohamed85@gmail.com
                  </span>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
          <div className="py-5 text-center">
            <a title="CV" className="downloadCv btn-custom" href={cv} download>
              Download CV{" "}
              <FontAwesomeIcon className="ms-2" icon={faCloudArrowDown} />
            </a>
          </div>
      </div>
    </div>
  );
}

export default Mahmoud;
