import Project from "./UI/Project";

//Images
import Omnifood from "../Images/Omnifood.jpg";
import notes from "../Images/notes.jpg";
import bondi from "../Images/bondi.jpg";
import todo from "../Images/todo.jpg";
import Portfolio from "../Images/portfolio.jpg";
import Delivery from "../Images/Delivery.jpg";

//Router
import { Link } from "react-router-dom";

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
            url_demo="https://m0mahmoud.github.io/Templat-Five/"
            url_code="https://github.com/M0mahmoud/Templat-Five"
            title=" Delivery"
            desc="Order your favorite foods at any time and we will deliver them
                  right to where you are."
            img={Delivery}
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
          <Link to="/Portfolio" className="btn-custom">
            All Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Work;
