import React from "react";
import DesktopBackground from "../../assets/Home/Glimpse/Desktop Background.png";
import MobileBackground from "../../assets/Home/Glimpse/Mobile Background.png";
import CocaCola from "../../assets/Home/Glimpse/CocaCola.jpg";
import ThumbsUp from "../../assets/Home/Glimpse/ThumbsUp.jpg";
import Pepsi from "../../assets/Home/Glimpse/Pepsi.jpg";
import NiveaMen from "../../assets/Home/Glimpse/NiveaMen.jpg";
import Fizz from "../../assets/Home/Glimpse/Fizz.jpg";
import Monster from "../../assets/Home/Glimpse/Monster.png";
import Casio from "../../assets/Home/Glimpse/Casio.png";
import India from "../../assets/Home/Glimpse/India.jpg";
import RedBull from "../../assets/Home/Glimpse/RedBull.jpg";

function Glimpse() {
  return (
    <div className="glimpse">
      <img
        className="glimpse-background desktop"
        src={DesktopBackground}
        alt="Background"
      />
      <img
        className="glimpse-background mobile"
        src={MobileBackground}
        alt="Background"
      />
      <div className="glimpse-heading">
        <h2>
          A Glimpse Through <br className="mobile" /> My Lens
        </h2>
        <p className="desktop">
          We create stunning, user-centric websites that inspire and engage.
        </p>
        <p className="mobile">Elevating Brands with Stunning Product Shots</p>
      </div>
      <div className="glimpse-container">
        <section>
          <div className="glimpse-set box-1">
            <img src={NiveaMen} />
          </div>
          <div className="glimpse-set box-4">
            <img src={ThumbsUp} />
          </div>
          <div className="glimpse-set box-7">
            <img src={Casio} />
          </div>
        </section>
        <section>
          <div className="glimpse-set box-2">
            <img src={CocaCola} />
          </div>
          <div className="glimpse-set box-5">
            <img src={Fizz} />
          </div>
          <div className="glimpse-set box-8">
            <img src={India} />
          </div>
        </section>
        <section>
          <div className="glimpse-set box-3">
            <img src={Pepsi} />
          </div>
          <div className="glimpse-set box-6">
            <img src={Monster} />
          </div>
          <div className="glimpse-set box-9">
            <img src={RedBull} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Glimpse;
