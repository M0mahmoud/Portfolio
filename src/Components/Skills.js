import React from "react";
import Marquee from "react-fast-marquee";

import htmllogo from "../Images/html5.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import typescript from "../Images/typescript.png";
import git from "../Images/git.png";
import github from "../Images/github.png";
import next from "../Images/next.png";
import bootstrap from "../Images/bootstrap-logo-shadow.png";
import react from "../Images/react.svg";
import api from "../Images/api.png";
import sql from "../Images/sql.png";
import node from "../Images/node.svg";
import amazon from "../Images/Amazon.svg";
import reactBootstrap from "../Images/react-bootstrap.svg";

function Skills(props) {
  return (
    <>
      <div className=" text-center my-5  text-nowrap" data-aos="zoom-in">
        <div className="container pb-5">
          <div className="title mb-5">
            <h1>My Skills</h1>
          </div>
          <Marquee gradientColor="0" speed="60">
            <div className="skillsA">
              <img className="ms-3 mx-3" alt="Skills" src={react} />
              <img className=" mx-3" alt="Skills" src={git} />
              <img className=" mx-3" alt="Skills" src={css} />
              <img className=" mx-3" alt="Skills" src={htmllogo} />
              <img className=" mx-3" alt="Skills" src={api} />
              <img className=" mx-3" alt="Skills" src={amazon} />
              <img className=" mx-3" alt="Skills" src={bootstrap} />
              <img className=" mx-3" alt="Skills" src={reactBootstrap} />
              <img className=" mx-3" alt="Skills" src={sql} />
              <img className=" mx-3" alt="Skills" src={next} />
              <img className=" mx-3" alt="Skills" src={github} />
              <img className=" mx-3" alt="Skills" src={js} />
              <img className=" mx-3" alt="Skills" src={node} />
              <img className="me-3 mx-3" alt="Skills" src={typescript} />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Skills;
