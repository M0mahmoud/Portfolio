//Router
import { Link } from "react-router-dom";

import Project from "./UI/Project";

//Images
import Omnifood from "../Images/projects/Omnifood.jpg";
import notes from "../Images/projects/notes.jpg";
import bondi from "../Images/projects/bondi.jpg";
import todo from "../Images/projects/todo.jpg";
import Portfolio from "../Images/projects/portfolio.jpg";
import chat from "../Images/projects/chat.jpg";

function Work() {
  return (
    <>
      <div className="container my-5">
        <div className="title text-center my-3">
          <h1>Featured Projects</h1>
          <p className="text-white-50 text-uppercase">
            Projects Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="row ">
          <Project
            url_demo="https://m0mahmoud.github.io/Omnifood-project/"
            url_code="https://github.com/M0mahmoud/Omnifood-project"
            title="Omnifood"
            desc="Omnifood is subscription that will make you eat healthy again."
            img={Omnifood}
          />
          <Project
            url_demo="https://d2td98ji0bqgmp.cloudfront.net/"
            url_code="https://github.com/M0mahmoud/SST-Notes"
            title="Notes"
            desc=" A simple note taking app, Add notes, lists and photos to your
                  account."
            img={notes}
          />
          <Project
            url_demo="https://todo05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Andrew/Code/todo-app"
            title=" To-Do"
            desc="Task management through to-do app for the day . see notes Any
                  Time Easily"
            img={todo}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Bootstrap/"
            url_code="https://github.com/M0mahmoud/Bootstrap"
            title=" bondi"
            desc="Taste The Creativity We Make Awesome Graphic And Web Design"
            img={bondi}
          />
          <Project
            url_demo="https://chat-app05.herokuapp.com/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Chat-App"
            title=" Chat App"
            img={chat}
          />
          <Project
            url_demo="https://m0mahmoud.github.io/Template-Four/"
            url_code="https://github.com/M0mahmoud/Template-Four"
            title=" Portfolio"
            desc="I`m gonna share everything about my life Books I'm reading,
                  Games I'm Playing"
            img={Portfolio}
          />
        </div>
        <div className="all_projects text-center" data-aos="fade-up">
          <Link to="/Portfolio/projects" className="btn-custom">
            All Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Work;
