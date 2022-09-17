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
                <span className="span-name d-1">M</span>
                <span className="span-name d-2">a</span>
                <span className="span-name d-3">h</span>
                <span className="span-name d-4">m</span>
                <span className="span-name d-5">o</span>
                <span className="span-name d-6">u</span>
                <span className="span-name d-7">d</span>{" "}
                <span className="span-name d-8">M</span>
                <span className="span-name d-9">o</span>
                <span className="span-name d-10">h</span>
                <span className="span-name d-11">a</span>
                <span className="span-name d-12">m</span>
                <span className="span-name d-13">e</span>
                <span className="span-name d-14">d</span>
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
