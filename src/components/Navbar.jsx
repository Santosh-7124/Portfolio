import React from "react";
import ClickSound from "/mouse_click_sound.mp3";

function Navbar({ activeSection }) {
  function handleButtonClick() {
    const clickSound = new Audio(ClickSound);
    clickSound.play();
  }

  return (
    <header>
      <button
        className="navbar-home"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
          );
        }}
      >
        Portfolio
      </button>

      <nav>
        <a
          href="#About"
          className={activeSection === "About" ? "active-nav-link" : ""}
        >
          About Me
        </a>
        <a
          href="#Experience"
          className={activeSection === "Experience" ? "active-nav-link" : ""}
        >
          Experience
        </a>
        <a
          href="#Skills"
          className={activeSection === "Skills" ? "active-nav-link" : ""}
        >
          Skills
        </a>
        <a
          href="#Projects"
          className={activeSection === "Projects" ? "active-nav-link" : ""}
        >
          Projects
        </a>
      </nav>

      <a href="#Contact" className="navbar-contact" onClick={handleButtonClick}>
        Contact Me
      </a>
    </header>
  );
}

export default Navbar;
