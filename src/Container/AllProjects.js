import React from "react";
import Project from "../Components/UI/Project";

//
import reduxcart from "../Images/reduxcart.jpg";

function AllProjects() {

  return (
    <>
      <div className="container py-3">
        <div className="title text-center mt-3 mb-5">
          <h1>My Projects</h1>
          <p className="text-white-50 text-uppercase">all projects</p>
        </div>
        <div>
          <ul className="list-link d-flex justify-content-center align-items-center">
            <li data-show='all' className="mx-3 p-3  ">All</li>
            <li data-show='css' className="mx-3 p-3  active ">HTML & CSS</li>
            <li data-show='react' className="mx-3 p-3">React JS</li>
            <li data-show='javascript' className="mx-3 p-3">JavaScript</li>
            <li data-show='node' className="mx-3 p-3">Node JS</li>
          </ul>
        </div>
        <div className="row all_projects">
          <Project
            active="css"
            url_demo="https://m0mahmoud.github.io/Template-Four/"
            url_code="https://github.com/M0mahmoud/Template-Four"
            title=" Portfolio"
            desc="I`m gonna share everything about my life Books I'm reading,
                  Games I'm Playing"
            img={reduxcart}
          />
          <Project
            active="react"
            url_demo="https://m0mahmoud.github.io/Template-Four/"
            url_code="https://github.com/M0mahmoud/Template-Four"
            title=" Portfolio"
            desc="I`m gonna share everything about my life Books I'm reading,
                  Games I'm Playing"
            img={reduxcart}
          />
          <Project
            active="node"
            url_demo="https://m0mahmoud.github.io/Template-Four/"
            url_code="https://github.com/M0mahmoud/Template-Four"
            title=" Portfolio"
            desc="I`m gonna share everything about my life Books I'm reading,
                  Games I'm Playing"
            img={reduxcart}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Template-Four/"
            url_code="https://github.com/M0mahmoud/Template-Four"
            title=" Portfolio"
            desc="I`m gonna share everything about my life Books I'm reading,
                  Games I'm Playing"
            img={reduxcart}
          />
        </div>
      </div>
    </>
  );
}

export default AllProjects;
