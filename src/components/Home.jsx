import React from "react";
import DesktopBackground from "../assets/Hero/Desktop Background.svg";
import SocialMedia from "./SocialMedia";
function Home() {
  return (
    <section className="hero" id="Home">
      <div className="hero-container">
        <img
          src={DesktopBackground}
          alt="Hero Background Frame"
          className="hero-background"
        />
        <div className="hero-text-container">
          <h1>
            Hello I'am<strong> M Santosh.</strong>
            <strong> Frontend</strong> <span>Developer </span>
            Based <strong>in India.</strong>
          </h1>
          <p>
            I specialize in developing fast, responsive, and scalable web
            applications using modern frontend technologies. I’m committed to
            writing clean code, optimizing performance, and continuously
            improving my skills to build better products.
          </p>
        </div>
        <SocialMedia />
      </div>
    </section>
  );
}

export default Home;
