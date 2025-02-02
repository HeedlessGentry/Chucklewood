import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar () {
    return (
        <nav className="navbar">
            <h1 className="site-name">
                <Link to = "/">.Com?!</Link>
            </h1>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/recommendations">Recommendations</Link>
            </div>
        </nav>
    );
}

export default Navbar;