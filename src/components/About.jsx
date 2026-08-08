import React from "react";
import "./About.css";

import aboutImage from "../assets/images/about.png";

function About() {
  return (
 <section id="about" className="about">

      <div className="about-container">

        {/* Left Side */}

        <div className="about-image">

          <img
            src={aboutImage}
            alt="Wellness Expert"
          />

        </div>

        {/* Right Side */}

        <div className="about-content">

          <span className="about-subtitle">
            ABOUT US
          </span>

          <h2>
            Helping You Build
            <br />
            a <span>Healthier</span> Tomorrow
          </h2>

          <p>
            We believe true wellness is a balance of mind,
            body and lifestyle. Our certified wellness experts
            provide personalized guidance to help you achieve
            your health goals naturally and sustainably.
          </p>

          <div className="about-list">

            <div className="about-item">
              ✔ Certified Wellness Coaches
            </div>

            <div className="about-item">
              ✔ Personalized Nutrition Plans
            </div>

            <div className="about-item">
              ✔ 100% Natural Lifestyle Approach
            </div>

            <div className="about-item">
              ✔ Holistic Health & Fitness Programs
            </div>

          </div>

          <button className="about-btn">
            Read More About Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;