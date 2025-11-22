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
              <img src={KoiosStudios} alt="Koiostudio" />
              <div className="experience-set-company-info">
                <h3>Frontend Developer</h3>
                <h4>Koiostudio</h4>
              </div>
            </div>
            <span>May 2024 - Present</span>
          </div>
          <p>
            As a Frontend Developer at Koios Studio, I have worked on developing
            and deploying responsive websites for clients such as Akaerswift,
            Ameya, Balaji Proto Tools, Estate IQ, Fourstor, Happy Gummies, ISK,
            NE Structures, Talankey, and Urban Sphere. My responsibilities
            included building user-friendly interfaces, optimizing performance,
            ensuring cross-device compatibility, and handling complete
            deployment.
          </p>
        </a>
        <a
          href="https://www.koiosengg.com/"
          target="_blank"
          className="experience-set"
        >
          <div className="experience-set-heading">
            <div className="experience-set-company">
              <img
                src={KoiosEngineeringSoltuions}
                alt="Koios Engineering Soltuion"
              />
              <div className="experience-set-company-info">
                <h3>Frontend Developer Intern</h3>
                <h4>Koios Engineering Solution</h4>
              </div>
            </div>
            <span>Jan 2024 - Apr 2024</span>
          </div>
          <p>
            During my internship at Koios Engineering Solutions, I developed
            responsive websites for ISK Auto Industries and MR Industries,
            improving usability and ensuring seamless performance across
            devices. I also developed and deployed a “Coming Soon” landing page
            for Greenway Mobility with an engaging UI and SEO-friendly
            structure.
          </p>
        </a>
      </div>
    </section>
  );
}

export default Experience;
