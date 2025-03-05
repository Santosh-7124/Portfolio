import React from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Experiences from "./Home/Experiences";
import Projects from "./Home/Projects";
import Glimpse from "./Home/Glimpse";

function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <Experiences />
      <Projects />
      <Glimpse />
    </>
  );
}

export default Home;
