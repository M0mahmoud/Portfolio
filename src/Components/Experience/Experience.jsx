import React from "react";
import { Link } from "react-router-dom";

function Experiences() {
  return (
    <>
      <div className="experiences py-5">
        <div className="container " data-aos="fade-right">
          <div className="title my-3 text-center">
            <h1>Education &amp; Experience</h1>
          </div>
          <div className="ms-5 my-5 text">
            <div className="icon my-5">
              <h3 className="ms-3">2020 : 2024</h3>
              <h4 className="ms-3 text-white-50 ">
                Faculty of Science Zagazig University
              </h4>
              <p className="ms-3 fs-6 text-white-50 lh-base fw-normal  mb-3">
                Computer Science Department
              </p>
            </div>
            <div className="internship">
              <h4 className="ms-3">Summer 2022</h4>
              <h4 className="ms-3 fs-6 text-white-50 lh-base fw-normal  mb-3">
                Kalbonyan Elmarsos Internship
              </h4>
              <Link
                to="/experiences/kalbonyan"
                className=" lh-base fw-normal text-white-50 ms-3  mb-5 btn-custom"
              >
                Show Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
