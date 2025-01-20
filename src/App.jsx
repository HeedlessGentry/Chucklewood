import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="app-container">
      <Navbar />
      <ScrollToTop />
      <div className="routes-container">
      <Routes>
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