import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie";
import Typed from "typed.js";

import * as intro from "../cooding.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";
import { faEnvelope, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const TypedReactHooksDemo = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Front End Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </div>
    </div>
  );
};

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: intro,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //
  return (
    <>
      <div className="home" id="home" data-aos="fade-up">
        <div className="d-flex align-items-center p-3">
          <div className="">
            <div className="icons_home">
              <a
                className=" my-3 fs-5 popup"
                href="https://github.com/M0mahmoud"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="main-color" icon={faGithub} />
              </a>
              <a
                className=" my-3 fs-5 popup"
                href="https://www.linkedin.com/in/mahmoud05/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className=" main-color" icon={faLinkedin} />
              </a>
              <a
                href="mailto:houdmohamed85@gmail.com"
                className=" my-3 fs-5 popup"
              >
                <FontAwesomeIcon className="main-color" icon={faEnvelope} />
              </a>
              <a
                href="https://instagram.com/mahma0d05?igshid=YmMyMTA2M2Y="
                className=" my-3 fs-5 popup"
              >
                <FontAwesomeIcon className="main-color" icon={faInstagram} />
              </a>
              <a href="#about" className=" my-3 fs-5 popup">
                <FontAwesomeIcon className="main-color" icon={faUserAlt} />
              </a>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-5 m-3 text-center">
              <p className="text-white-50">Hello, I am </p>
              <span className="d-block fs-2 my-5 my_name main-color">
                Mahmoud Mohamed
              </span>
              <span className="typing d-block fs-2 my-5 my_name main-color">
                <TypedReactHooksDemo />
              </span>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <Lottie options={defaultOptions} animationPosition={"center"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
