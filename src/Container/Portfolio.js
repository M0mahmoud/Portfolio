import React from "react";

// Components
import Header from "../Components/Header";
import Home from "../Components/Home";
import Mahmoud from "../Components/Mahmoud";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Contact from "../Components/Contact";
import Experiences from "../Components/Experience";
import Footer from "../Components/Footer";
import Wave from "../Components/UI/Wave";
import ToTopArrow from "../Components/UI/ToTop";

function Portfolio() {
  return (
    <>
      <ToTopArrow />
      <Header />
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
