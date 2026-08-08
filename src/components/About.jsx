import React from "react";
import "./About.css";

import aboutImage from "../assets/images/about.png";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* =================================
            LEFT SIDE
        ================================== */}

        <div className="about-left">

          {/* About Heading */}

          <div className="about-top-heading">

            <span className="about-subtitle">
              ABOUT US
            </span>

            <h2>
              Your Wellness,
              <br />
              <span>Our Priority</span>
            </h2>

          </div>


          {/* Image */}

          <div className="about-image-wrapper">

            <div className="about-image">

              <img
                src={aboutImage}
                alt="Fusion Fitness Wellness Centre"
              />

            </div>


            {/* Experience Badge */}

            <div className="about-badge">

              <strong>10+</strong>

              <span>
                Years of
                <br />
                Wellness
              </span>

            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE
        ================================== */}

        <div className="about-content">

          <span className="content-label">
            HEALTH • FITNESS • WELLNESS
          </span>


          <h3>
            Helping You Build
            <br />
            a <span>Healthier</span> Tomorrow
          </h3>


          <p>
            At Fusion Fitness, we believe true wellness comes from
            creating harmony between your body, mind and lifestyle.
            Our experienced wellness professionals provide
            personalized guidance to help you achieve your health
            goals naturally and sustainably.
          </p>


          {/* Benefits */}

          <div className="about-list">

            <div className="about-item">

              <div className="about-check">
                ✓
              </div>

              <span>
                Certified Wellness Coaches
              </span>

            </div>


            <div className="about-item">

              <div className="about-check">
                ✓
              </div>

              <span>
                Personalized Nutrition Plans
              </span>

            </div>


            <div className="about-item">

              <div className="about-check">
                ✓
              </div>

              <span>
                Natural Lifestyle Approach
              </span>

            </div>


            <div className="about-item">

              <div className="about-check">
                ✓
              </div>

              <span>
                Holistic Health Programs
              </span>

            </div>

          </div>


          {/* Button */}

          <a
            href="#contact"
            className="about-btn"
          >
            Read More About Us
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;