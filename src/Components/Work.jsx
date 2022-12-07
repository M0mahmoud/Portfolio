//Router
import { Link } from "react-router-dom";

//Images
// import {
//   Omnifood,
//   gpt,
//   chat,
//   delivery,
//   orderfood,
//   dasboard_1,
//   dasboard_2,
// } from "../Images/projects";

import Omnifood from '../Images/projects/Omnifood.jpg'
import gpt from '../Images/projects/gtp.png'
import chat from '../Images/projects/chat.jpg'
import delivery from '../Images/projects/Delivery.jpg'
import orderfood from '../Images/projects/orderfood.jpg'
import dasboard_1 from '../Images/projects/dasboard-1.png'
import dasboard_2 from '../Images/projects/dasboard-2.png'

function Work() {
  return (
    <>
      <div className="container my-5">
        <div className="title text-center my-5">
          <h1>Featured Projects</h1>
          <p className="text-white-50 text-uppercase"></p>
        </div>
        <div className="row ">
          <div className="col-lg">
            <div className="slides rounded">
              <div className="slide">
                <img src={Omnifood} alt="img" className="slide-img" />
              </div>
              <div className=" slide slide-2">
                <img src={dasboard_1} alt="img" className="slide-img" />
              </div>
              <div className="slide  slide-3">
                <img src={gpt} alt="img" className="slide-img" />
              </div>
              <div className="slide  slide-4">
                <img src={chat} alt="img" className="slide-img" />
              </div>
              <div className="slide  slide-5">
                <img src={delivery} alt="img" className="slide-img" />
              </div>
              <div className="slide  slide-6">
                <img src={dasboard_2} alt="img" className="slide-img" />
              </div>
              <div className="slide  slide-7">
                <img src={orderfood} alt="img" className="slide-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="all_projects text-center mt-5" data-aos="fade-up">
          <Link to="/projects" className="btn-custom">
            All Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Work;

/*
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
*/
