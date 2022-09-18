import React from "react";
import Lottie from "react-lottie";
import * as intro from "../cooding.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: intro,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="home mx-3" id="home" data-aos="fade-up">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 text-start mt-5 intro-text">
            <div className="my-5">
              <p className="mt-5 mb-0">Hello, I am</p>
              <h2 className="letter-space-4 " data-aos="fade-right">
                Mahmoud Mohamed
              </h2>
              <div className="mt-5">
                <span className=" fs-3 fw-bold main-color ">Front End</span>
                <span className=" d-inline-block text-white-50 fs-6 ms-2">
                  Developer
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <Lottie options={defaultOptions} animationPosition={"center"} />
          </div>
        </div>
        <div className="icons text-start">
          <a
            className=" mx-3 fs-5 popup"
            href="https://github.com/M0mahmoud"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="main-color" icon={faGithub} />
          </a>
          <a
            className=" mx-3 fs-5 popup"
            href="https://www.linkedin.com/in/mahmoud05/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className=" main-color" icon={faLinkedin} />
          </a>
          <a href="mailto:houdmohamed85@gmail.com" className=" mx-3 fs-5 popup">
            <FontAwesomeIcon className="main-color" icon={faEnvelope} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
