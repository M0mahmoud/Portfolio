import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Lottie from "react-lottie-player";

import "./App.css";
import Header from "./Components/Header";
import ToTopArrow from "./Components/UI/ToTop";
import * as intro from "./intro.json";

function App() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  }, []);

  return (
    <>
      {!completed && (
        <Lottie
          loop
          animationData={intro}
          play
          style={{ width: 250, height: 250 }}
          direction={1}
          className="m-auto"
        />
      )}
      {completed && (
        <>
          <Header />
          <ToTopArrow />
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
