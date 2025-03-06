import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <section>
        <Link to="/" className="navbar-logo">
          <p>Abhay Nayak</p>
          <sub>UX Designer</sub>
        </Link>
        <nav>
          <Link to="/projects" className="primary-button">Projects</Link>
          <a href="#" className="primary-button">
            Resume
          </a>
          <Link className="secondary-button">Contact</Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
