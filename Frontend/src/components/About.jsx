import React from "react";
import Frame from "../assets/About/Frame.svg";

function About() {
  return (
    <section className="about" id="About">
      <div className="about-img">
        <img src={Frame} />
      </div>
      <div className="about-text">
        <h2>
          About <strong>Me</strong>
        </h2>
        <div className="about-text-para">
          <p>
            I was studying engineering when I found a strong interest in coding.
            What began as curiosity soon became passion, and I started learning
            coding online, exploring how websites and applications are built. As
            I progressed, I discovered my interest in frontend development and
            began improving my skills step by step. This led me to my first role
            as a Frontend Developer, where I learned how to build professional,
            responsive, and production-ready websites.
          </p>
          <p>
            Today, I continue to strengthen my frontend skills and stay
            consistent with learning. I believe growth comes through curiosity,
            consistency, and building something better each day.
          </p>
        </div>

        <a
          href="/Santosh Frontend Developer Resume.pdf"
          target="_blank"
          className="resume-download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;
