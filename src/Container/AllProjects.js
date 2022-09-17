import React from "react";
// import reduxcart from "../Images/reduxcart.jpg";
// const DATA = [
//   {
//     id: "1",
//     active: "css",
//     url_demo: "https://m0mahmoud.github.io/Template-Four/",
//     url_code: "https://github.com/M0mahmoud/Template-Four",
//     title: " Portfolio",
//     desc: "I`m gonna share everything about my life Books I'm reading Games I'm Playing",
//     img: { reduxcart },
//   },
//   {
//     id: "11",
//     active: "css",
//     url_demo: "https://m0mahmoud.github.io/Template-Four/",
//     url_code: "https://github.com/M0mahmoud/Template-Four",
//     title: " Portfolio",
//     desc: "I`m gonna share everything about my life Books I'm reading Games I'm Playing",
//     img: { reduxcart },
//   },
//   {
//     id: "2",
//     active: "html",
//     url_demo: "https://m0mahmoud.github.io/Template-Four/",
//     url_code: "https://github.com/M0mahmoud/Template-Four",
//     title: " Portfolio",
//     desc: "I`m gonna share everything about my life Books I'm reading Games I'm Playing",
//     img: { reduxcart },
//   },
//   {
//     id: "3",
//     active: "react",
//     url_demo: "https://m0mahmoud.github.io/Template-Four/",
//     url_code: "https://github.com/M0mahmoud/Template-Four",
//     title: " Portfolio",
//     desc: "I`m gonna share everything about my life Books I'm reading Games I'm Playing",
//     img: { reduxcart },
//   },
//   {
//     id: "4",
//     active: "node",
//     url_demo: "https://m0mahmoud.github.io/Template-Four/",
//     url_code: "https://github.com/M0mahmoud/Template-Four",
//     title: " Portfolio",
//     desc: "I`m gonna share everything about my life Books I'm reading Games I'm Playing",
//     img: { reduxcart },
//   },
// ];

function AllProjects() {

  return (
    <>
      <div className="container py-3">
        <div className="title text-center mt-3 mb-5">
          <h1>My Projects</h1>
          <p className="text-white-50 text-uppercase">all projects</p>
        </div>
        <div className="text-center">
          <button
            data-filter="all"
            className="btn-custom mx-3 btn-filter active"
          >
            All
          </button>
          <button
            data-filter="css"
            className="btn-custom mx-3 btn-filter"
          >
            HTML & CSS
          </button>
          <button data-filter="react" className="btn-custom mx-3 btn-filter">
            React JS
          </button>
          <button data-filter="js" className="btn-custom mx-3 btn-filter">
            JavaScript
          </button>
          <button data-filter="node" className="btn-custom mx-3 btn-filter">
            Node JS
          </button>
        </div>
        <div className="row"></div>
      </div>
    </>
  );
}

export default AllProjects;
