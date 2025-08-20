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
            I'm a passionate, self-proclaimed developer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
