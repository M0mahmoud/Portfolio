import React from "react";
import { Route, Routes } from "react-router-dom";

//Pages
import Contact from "./Components/Contact";
function Links() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default Links;
