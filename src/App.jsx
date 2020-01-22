import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/Contact/Contact";

import Work from "./components/Work/Work";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
