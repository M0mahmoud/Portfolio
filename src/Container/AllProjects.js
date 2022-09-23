import React from "react";
import Project from "../Components/UI/Project";
import ToTopArrow from "../Components/UI/ToTop";
import Header from "../Components/Header";

//Images
import notes from "../Images/notes.jpg";
import Omnifood from "../Images/Omnifood.jpg";
import bondi from "../Images/bondi.jpg";
import todo from "../Images/todo.jpg";
import Portfolio from "../Images/portfolio.jpg";
import Delivery from "../Images/Delivery.jpg";
import reduxcart from "../Images/reduxcart.jpg";

function AllProjects() {
  return (
    <>
      <ToTopArrow />
      <Header />
      <div className="container py-3">
        <div className="title text-center mt-3 mb-5">
          <h1>My Projects</h1>
          <p className="text-white-50 text-uppercase">all projects Which I Made With Courses And Myself</p>
        </div>
        <div className="row">
          <h3 className="text-center   border-custom p-3">React JS</h3>
          <Project
            url_demo="https://m0mahmoud.github.io/Bootstrap/"
            url_code="https://github.com/M0mahmoud/Bootstrap"
            title=" bondi"
            img={reduxcart}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Bootstrap/"
            url_code="https://github.com/M0mahmoud/Bootstrap"
            title=" bondi"
            img={reduxcart}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Bootstrap/"
            url_code="https://github.com/M0mahmoud/Bootstrap"
            title=" bondi"
            img={reduxcart}
          />
          <h3 className="text-center   border-custom p-3">HTML & CSS</h3>
          <Project
            url_demo="https://m0mahmoud.github.io/Omnifood-project/"
            url_code="https://github.com/M0mahmoud/Omnifood-project"
            title="Omnifood"
            img={Omnifood}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Bootstrap/"
            url_code="https://github.com/M0mahmoud/Bootstrap"
            title=" bondi"
            img={bondi}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Templat-Five/"
            url_code="https://github.com/M0mahmoud/Templat-Five"
            title=" Delivery"
            img={Delivery}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Template-Four/"
            url_code="https://github.com/M0mahmoud/Template-Four"
            title=" Portfolio"
            img={Portfolio}
          />
          <h3 className="text-center   border-custom p-3">JavaScritp</h3>
          <Project
            url_demo="https://todo05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Andrew/Code/todo-app"
            title=" To-Do"
            img={todo}
          />
          <h3 className="text-center   border-custom p-3">Node JS</h3>
          <Project
            url_demo="https://chat-app05.herokuapp.com/"
            url_code=""
            title=" Chat App"
            img={reduxcart}
          />
          <Project
            url_demo="https://web-server-05.herokuapp.com/"
            url_code=" "
            title="Weather App"
            img={reduxcart}
          />
          <Project
            url_demo=""
            url_code=" "
            title="Notes App"
            img={reduxcart}
            no_demo="btn-custom-none"
          />
          <h3 className="text-center   border-custom p-3">Full Stack</h3>
          <Project
            url_demo="https://d2td98ji0bqgmp.cloudfront.net/"
            url_code="https://github.com/M0mahmoud/SST-Notes"
            title="Notes"
            img={notes}
            active="text-center"
          />
        </div>
      </div>
    </>
  );
}

export default AllProjects;
