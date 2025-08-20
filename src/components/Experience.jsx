import React from "react";
import KoiosStudios from "../assets/Experience/Koios Studios.svg";
import KoiosEngineeringSoltuions from "../assets/Experience/Koios Engineering Soltuions.svg";

function Experience() {
  return (
    <section className="experience" id="Experience">
      <h2>
        My <strong>Experience</strong>
      </h2>
      <div className="experience-container">
        <a
          href="https://www.koiostudio.com/"
          target="_blank"
          className="experience-set"
        >
          <div className="experience-set-heading">
            <div className="experience-set-company">
              <img src={KoiosStudios} alt="Koios Studios" />
              <div className="experience-set-company-info">
                <h3>Frontend Developer</h3>
                <h4>Koios Studios</h4>
              </div>
            </div>
            <span>May 2024 - Present</span>
          </div>
          <p>
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </a>
        <a
          href="https://koiosengg.com/"
          target="_blank"
          className="experience-set"
        >
          <div className="experience-set-heading">
            <div className="experience-set-company">
              <img
                src={KoiosEngineeringSoltuions}
                alt="Koios Engineering Soltuions"
              />
              <div className="experience-set-company-info">
                <h3>Frontend Developer Intern</h3>
                <h4>Koios Engineering Solutions</h4>
              </div>
            </div>
            <span>May 2024 - Present</span>
          </div>
          <p>
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </a>
      </div>
    </section>
  );
}

export default Experience;
