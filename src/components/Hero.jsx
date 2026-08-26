import React from "react";
import "./Hero.css";

import heroImage from "../assets/images/hero.WebP";
import heroMobileImage from "../assets/images/hero-mobile.webp";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >

      {/* =====================================================
          CRITICAL HERO IMAGE
          - Responsive image for mobile/desktop
          - High priority for LCP
          - Not lazy loaded
          - Explicit dimensions prevent CLS
      ====================================================== */}
      <picture className="hero-picture">

        {/* Mobile image */}
        <source
          media="(max-width: 768px)"
          srcSet={heroMobileImage}
          type="image/webp"
        />

        {/* Desktop image */}
        <img
          className="hero-image"
          src={heroImage}
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />

      </picture>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}
      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      {/* =====================================================
          DECORATIVE GREEN GLOW
      ====================================================== */}
      <div
        className="hero-glow"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="hero-container">
        <div className="hero-content">

          {/* =================================================
              TAG
          ================================================== */}
          <span className="hero-tag">
            <span aria-hidden="true">🌿</span>
            <span>Live Healthy. Live Happy.</span>
          </span>

          {/* =================================================
              MAIN HEADING
          ================================================== */}
          <h1 id="hero-title">
            Your Wellness,
            <br />
            Our <span>Priority</span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <p>
            Personalized health &amp; wellness solutions to help
            you achieve a balanced and healthier lifestyle with
            expert guidance.
          </p>

          {/* =================================================
              PRIMARY CTA
          ================================================== */}
          <a
            href="#contact"
            className="hero-btn"
          >
            Book Free Consultation
          </a>

          {/* =================================================
              FEATURES
          ================================================== */}
          <div className="hero-features">

            <div className="feature">
              <span
                className="feature-icon"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>Expert Guidance</span>
            </div>

            <div className="feature">
              <span
                className="feature-icon"
                aria-hidden="true"
              >
                🍃
              </span>

              <span>Personalized Plan</span>
            </div>

            <div className="feature">
              <span
                className="feature-icon"
                aria-hidden="true"
              >
                🌱
              </span>

              <span>100% Natural</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;