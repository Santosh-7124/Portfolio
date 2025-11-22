import React from "react";
import Supermarket from "../assets/Projects/Supermarket.png";
import Weather from "../assets/Projects/Weather.png";

function Projects() {
  return (
    <section className="projects" id="Projects">
      <h2>
        My <strong>Projects</strong>
      </h2>
      <div className="projects-container">
        <div className="projects-set">
          <div className="projects-set-img">
            <img src={Supermarket} alt="Supermarket" />
          </div>
          <div className="projects-set-info">
            <span>01</span>
            <h3>Supermarket Admin Panel</h3>
            <p>
              A MERN-based supermarket management application that allows users
              to add, update, and delete product items, with all items displayed
              in an Inventory section. The application uses MongoDB for data
              storage and retrieval, making product management seamless and
              organized.
            </p>
            <a href="https://supermarket-indol.vercel.app/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8333 9.16658L17.6667 2.33325"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3333 5.66675V1.66675H14.3333"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="projects-set">
          <div className="projects-set-img">
            <img src={Weather} alt="Weather" />
          </div>
          <div className="projects-set-info">
            <span>02</span>
            <h3>Weather Report</h3>
            <p>
              A weather reporting application that fetches real-time weather
              data using the OpenWeather API. Users can search for any city and
              view details such as temperature, humidity, weather conditions,
              and wind speed. The app is built with a clean UI and provides
              accurate results for a smooth user experience.
            </p>
            <a href="https://santosh-7124.github.io/Weather/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8333 9.16658L17.6667 2.33325"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3333 5.66675V1.66675H14.3333"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
