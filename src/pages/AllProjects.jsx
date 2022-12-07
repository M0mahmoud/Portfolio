import React from "react";
import { useState } from "react";

import Project from "../Components/UI/Project";
import projectsData from "../data";

function AllProjects() {
  const [projects, setProjects] = useState(projectsData);

  const selectedData = projects.map((value, index) => (
    <Project
      key={index}
      url_demo={value.url_demo}
      url_code={value.url_code}
      title={value.title}
      img={value.img}
    />
  ));

  const filterHandler = (e) => {
    const selectedType = e.target.dataset.type;
    let selectedProjects;

    if (selectedType === "all") {
      selectedProjects = projectsData.filter(
        (project) => project.type !== selectedType
      );
    } else {
      selectedProjects = projectsData.filter(
        (project) => project.type === selectedType
      );
    }
    setProjects(selectedProjects);
  };

  return (
    <>
      <div className="container py-3">
        <div className="title text-center mt-3 mb-5">
          <h1>My Projects</h1>
          <p className="text-white-50 text-uppercase">
            all projects Which I Made With Courses And Myself
          </p>
        </div>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={filterHandler}
            data-type="all"
            className="btn btn-outline-primary"
          >
            All
          </button>
          <button
            type="button"
            onClick={filterHandler}
            data-type="react"
            className="btn btn-outline-primary"
          >
            React
          </button>
          <button
            type="button"
            onClick={filterHandler}
            data-type="css"
            className="btn btn-outline-primary"
          >
            CSS
          </button>
          <button
            type="button"
            onClick={filterHandler}
            data-type="js"
            className="btn btn-outline-primary"
          >
            JavaScritp
          </button>
          <button
            type="button"
            onClick={filterHandler}
            data-type="fullStack"
            className="btn btn-outline-primary"
          >
            Full Stack
          </button>
        </div>
        <div className="row">{selectedData}</div>
      </div>
    </>
  );
}

export default AllProjects;
