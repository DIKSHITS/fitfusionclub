import React from "react";
import "./Hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* =====================================================
          HERO IMAGE
          Critical above-the-fold image
      ====================================================== */}
      <img
        className="hero-image"
        src={heroImage}
        alt=""
        width="1920"
        height="1080"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* =====================================================
          GREEN GLOW
      ====================================================== */}
      <div className="hero-glow" aria-hidden="true" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="hero-container">

        <div className="hero-content">

          {/* Tag */}
          <span className="hero-tag">
            <span aria-hidden="true">🌿</span>
            Live Healthy. Live Happy.
          </span>

          {/* Heading */}
          <h1>
            Your Wellness,
            <br />
            Our <span>Priority</span>
          </h1>

          {/* Description */}
          <p>
            Personalized health &amp; wellness solutions to help you achieve
            a balanced and healthier lifestyle with expert guidance.
          </p>

          {/* CTA */}
          <a href="#contact" className="hero-btn">
            Book Free Consultation
          </a>

          {/* =================================================
              FEATURES
          ================================================== */}
          <div className="hero-features">

            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                ✓
              </div>

              <span>Expert Guidance</span>
            </div>

            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                🍃
              </div>

              <span>Personalized Plan</span>
            </div>

            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                🌱
              </div>

              <span>100% Natural</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;