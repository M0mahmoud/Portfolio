import React from "react";
import Project from "../Components/UI/Project";
import ToTopArrow from "../Components/UI/ToTop";
import Header from "../Components/Header";

//Images
import notes from "../Images/projects/notes.jpg";
import Omnifood from "../Images/projects/Omnifood.jpg";
import bondi from "../Images/projects/bondi.jpg";
import todo from "../Images/projects/todo.jpg";
import Portfolio from "../Images/projects/portfolio.jpg";
import Delivery from "../Images/projects/Delivery.jpg";
import reduxcart from "../Images/projects/reduxcart.jpg";
import chat from "../Images/projects/chat.jpg";
import weather from "../Images/projects/weather.jpg";
import note_js from "../Images/projects/notes-js.jpg";
import hungman from "../Images/projects/hungman.jpg";
import kasper from "../Images/projects/kasper.jpg";
import expenses from "../Images/projects/expenses.jpg";
import movies from "../Images/projects/movies.jpg";
import tasksFirebase from "../Images/projects/tasksFirebase.jpg";
import orderfood from "../Images/projects/orderfood.jpg";
import products from "../Images/projects/products.jpg";
import quotes from "../Images/projects/quotes.jpg";

function AllProjects() {
  return (
    <>
      <ToTopArrow />
      <Header />
      <div className="container py-3">
        <div className="title text-center mt-3 mb-5">
          <h1>My Projects</h1>
          <p className="text-white-50 text-uppercase">
            all projects Which I Made With Courses And Myself
          </p>
        </div>
        <div className="row">
          <h3 className="text-center   border-custom p-3">React JS</h3>
          <Project
            url_demo="https://expense05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/Expenses-app"
            title="Expenses App"
            img={expenses}
          />
          <Project
            url_demo="https://movieso5.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/movies-app"
            title="Movies App"
            img={movies}
          />
          <Project
            url_demo="https://tasks05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/task-app-firbase"
            title="Tasks App - Firebase"
            img={tasksFirebase}
          />
          <Project
            url_demo="https://food-order05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/order-food-app"
            title="Order Food App"
            img={orderfood}
          />
          <Project
            url_demo="https://products05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/Products-app"
            title="Products App"
            img={products}
          />
          <Project
            url_demo="https://quotes05.netlify.app/quotes"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/quotes-app"
            title="Quotes App"
            img={quotes}
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
          <Project
            url_demo="https://m0mahmoud.github.io/project-two/"
            url_code="https://github.com/M0mahmoud/project-two"
            title="Kasper"
            img={kasper}
          />
          <h3 className="text-center   border-custom p-3">JavaScritp</h3>
          <Project
            url_demo="https://todo05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Andrew/Code/todo-app"
            title="To-Do"
            img={todo}
          />
          <Project
            url_demo="https://notes-app-05.surge.sh/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Andrew/Code/notes-app"
            title="Notes App"
            img={note_js}
          />
          <Project
            url_demo="https://hungman05.netlify.app/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Andrew/Code/Hangman"
            title="Hungman"
            img={hungman}
          />
          <h3 className="text-center   border-custom p-3">Node JS</h3>
          <Project
            url_demo="https://chat-app05.herokuapp.com/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Chat-App"
            title=" Chat App"
            img={chat}
          />
          <Project
            url_demo="https://web-server-05.herokuapp.com/"
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Weather-App"
            title="Weather App"
            img={weather}
          />
          <Project
            url_code="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Notes-App"
            title="Notes App"
            img={reduxcart}
            no_demo="btn-custom-none"
          />
          <Project
            url_code="https://github.com/M0mahmoud/task-manager"
            title="Task Manager"
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
