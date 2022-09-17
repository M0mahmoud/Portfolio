import React from "react";
import Lottie from "react-lottie";
import * as intro from "../cooding.json";
import cv from "../Images/Mahmoud.pdf";
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
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-start mt-5">
            <div className="my-5">
              <p className="mt-5">Hello, I am</p>
              <h1 className=" letter-space-4 " data-aos="fade-right">
                Mahmoud Mohamed
              </h1>
              <div className="mt-5">
                <span className=" fs-1 fw-bold main-color ">Front End</span>
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
        <div className="col-12 mb-3 text-start">
          <a href="#contact" className="btn-custom mx-3">
            Contact
          </a>
          <a href={cv} download className="btn-custom mx-3">
            My CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
