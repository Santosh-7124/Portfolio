import React from "react";
import HTML from "../assets/Skills/HTML.svg";
import CSS from "../assets/Skills/CSS.svg";
import JavaScript from "../assets/Skills/JavaScript.svg";
import ReactIcon from "../assets/Skills/React.svg";
import Node from "../assets/Skills/Node.svg";
import MongoDB from "../assets/Skills/MongoDB.svg";
import Firebase from "../assets/Skills/Firebase.svg";
import Figma from "../assets/Skills/Figma.svg";

function Skills() {
  return (
    <section className="skills" id="Skills">
      <h2>
        My <strong>Skills</strong>
      </h2>
      <div className="skills-container">
        <div className="skills-set">
          <img src={HTML} alt="HTML Icon" />
          <p>HTML</p>
        </div>
        <div className="skills-set">
          <img src={CSS} alt="CSS Icon" />
          <p>CSS</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <img src={JavaScript} alt="JavaScript icon" />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <img src={ReactIcon} alt="React Icon" />
          </div>
          <p>React</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <img src={Node} alt="Node Icon" />
          </div>
          <p>Node.js</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1333.33 773.55"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <p>Express.js</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <img src={MongoDB} alt="MongoDB Icon" />
          </div>
          <p>MongoDB</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 640 640"
            >
              <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
            </svg>
          </div>
          <p>GitHub</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <img src={Firebase} alt="Firebase Icon" />
          </div>
          <p>Firebase</p>
        </div>
        <div className="skills-set">
          <div className="skills-set-img">
            <img src={Figma} alt="Figma Icon" />
          </div>
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
