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
          HERO BACKGROUND IMAGE
          - Desktop uses hero.WebP
          - Mobile uses hero-mobile.webp
          - LCP image loads immediately
          - No lazy loading
      ====================================================== */}

      <picture className="hero-picture">
        <source
          media="(max-width: 768px)"
          srcSet={heroMobileImage}
          type="image/webp"
        />

        <img
          className="hero-image"
          src={heroImage}
          alt=""
          width="1920"
          height="1080"
          sizes="100vw"
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
          DECORATIVE GLOW
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

          {/* TAG */}

          <span className="hero-tag">
            <span
              className="hero-tag-icon"
              aria-hidden="true"
            >
              🌿
            </span>

            <span>
              Live Healthy. Live Happy.
            </span>
          </span>

          {/* MAIN HEADING */}

          <h1 id="hero-title">
            Your Wellness,
            <br />
            Our <span>Priority</span>
          </h1>

          {/* DESCRIPTION */}

          <p className="hero-description">
            Personalized health &amp; wellness solutions to help
            you achieve a balanced and healthier lifestyle with
            expert guidance.
          </p>

          {/* CTA */}

          <a
            href="#contact"
            className="hero-btn"
          >
            <span>Book Free Consultation</span>

            <span
              className="hero-btn-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          {/* FEATURES */}

          <div className="hero-features">

            <div className="feature">
              <span
                className="feature-icon"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>
                Expert Guidance
              </span>
            </div>

            <div className="feature">
              <span
                className="feature-icon"
                aria-hidden="true"
              >
                🍃
              </span>

              <span>
                Personalized Plan
              </span>
            </div>

            <div className="feature">
              <span
                className="feature-icon"
                aria-hidden="true"
              >
                🌱
              </span>

              <span>
                100% Natural
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;