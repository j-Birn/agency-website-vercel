import React from "react";
import hero from "../assets/heroImage.png";

const Starter = () => {
  return (
    <section className="main-container" id="home">
      <div className="container">
        <div className="hero-container">
          <h1>We'are fuckin' awesome digital agensy</h1>
          <button>Discover more</button>
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Starter;
