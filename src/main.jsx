import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

import App from "./App";
import Portfolio from "./pages/Portfolio";
import AllProjects from "./pages/AllProjects";
import Kalbonyan from "./pages/Kalbonyan"; //Try using React.lazy()

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: "projects",
        element: <AllProjects />,
      },
      {
        path: "experiences/kalbonyan",
        element: <Kalbonyan />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routers}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
