import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lottie from "react-lottie";

import Portfolio from "./Container/Portfolio";
import AllProjects from "./Container/AllProjects";
import Kalbonyan from "./Components/Experience/Kalbonyan"; //Try using React.lazy()

import "./App.css";
import * as intro from "./intro.json";

function App() {
  const [completed, setCompleted] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: intro,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  }, []);
  return (
    <>
      {!completed && (
        <Lottie
          options={defaultOptions}
          animationPosition={"center"}
          height={500}
          width={250}
        />
      )}
      {completed && (
        <Router>
          <Switch>
            <Route exact path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Portfolio/projects">
              <AllProjects />
            </Route>
            <Route path="/Portfolio/Experiences/Kalbonyan">
              <Kalbonyan />
            </Route>
            <Route path="*">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
