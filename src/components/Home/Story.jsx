import React from "react";
import Trailer from "../../assets/Home/Story/Teaser.mp4";
import Img1 from "../../assets/Home/Story/Img1.png";
import Img2 from "../../assets/Home/Story/Img2.png";
import Img3 from "../../assets/Home/Story/Img3.png";
import Img4 from "../../assets/Home/Story/Img4.png";
import Img1Mobile from "../../assets/Home/Story/Img1 Mobile.png";
import Img2Mobile from "../../assets/Home/Story/Img2 Mobile.png";
import Img3Mobile from "../../assets/Home/Story/Img3 Mobile.png";
import Img4Mobile from "../../assets/Home/Story/Img4 Mobile.png";

function Story() {
  return (
    <div className="home-story">
      <div className="heading">
        <h2>
          Sacred Rituals,
          <br /> Enduring Stories
        </h2>
        <p>
          The Heartbeat of Culture, Passed Down <br className="mobile" />{" "}
          Through Generations
        </p>
      </div>
      <div className="home-story-container">
        <div className="home-story-video">
          <video src={Trailer} muted autoPlay loop playsInline />
          <section>
            <h3>Aarbhata</h3>
            <p>A Film by Abhay Nayak</p>
          </section>
        </div>
        <p className="home-story-para">
          ‘Aarbhata' is a short documentary about a native tiger dance,
          capturing deep faith and belief behind the sacred ritual where
          participants symbolically embody tigers through body painting for a
          dedicated two-day worship honoring Lord Shri Krishna in Udupi
          (Karnataka, India)
        </p>
        <div className="home-story-img">
          <section>
            <img src={Img1} className="desktop" />
            <img src={Img2} className="desktop" />
            <img src={Img1Mobile} className="mobile" />
            <img src={Img2Mobile} className="mobile" />
          </section>
          <section>
            <img src={Img3} className="desktop" />
            <img src={Img4} className="desktop" />
            <img src={Img3Mobile} className="mobile" />
            <img src={Img4Mobile} className="mobile" />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Story;
