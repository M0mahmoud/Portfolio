import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Portfolio from "./Container/Portfolio";
import AllProjects from "./Container/AllProjects";
import Kalbonyan from "./Components/Experience/Kalbonyan";

import "./App.css";

function App() {
  return (
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
        <Route  path="*">
          <Portfolio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
