import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Recommendations from "./Recommendations";
import ScrollToTop from "./ScrollToTop";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router basename="/Chucklewood">
      <div className="app-container">
      <Navbar />
      <ScrollToTop />
      <div className="routes-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;