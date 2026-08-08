import React from "react";
import "./Hero.css";

import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
 <section
  id="home"
  className="hero"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">🌿 Live Healthy. Live Happy.</span>
          <h1>
            Your Wellness,
            <br />
            Our <span>Priority</span>
          </h1>
          <p>
            Personalized health & wellness solutions to help you achieve
            a balanced and healthier lifestyle with expert guidance.
          </p>
          <button className="hero-btn">Book Free Consultation</button>
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">✔</div>
              <span>Expert Guidance</span>
            </div>
            <div className="feature">
              <div className="feature-icon">🍃</div>
              <span>Personalized Plan</span>
            </div>
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <span>100% Natural</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;