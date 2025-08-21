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
            I'm M Santosh Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
        <SocialMedia />
      </div>
    </section>
  );
}

export default Home;
