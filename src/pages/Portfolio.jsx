import React from "react";

// Components
import Home from "../Components/Home";
import Mahmoud from "../Components/Mahmoud";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Contact from "../Components/Contact";
import Experiences from '../Components/Experience/Experience'
import Footer from "../Components/Footer";
import Wave from "../Components/UI/Wave";

function Portfolio() {
  return (
    <>
      <Home />
      <Mahmoud />
      <Experiences />
      <Skills />
      <Work />
      <Contact />
      <Wave />
      <Footer />
    </>
  );
}

export default Portfolio;
