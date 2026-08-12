import React, { useEffect, useState } from "react";
import "./BeforeAfter.css";

// =====================================================
// IMAGES
// =====================================================

import Transformations1 from "../assets/images/Transformations1.jpeg";
import Transformations2 from "../assets/images/Transformations2.jpeg";

import Transformations4 from "../assets/images/Transformations4.jpeg";
import Transformations5 from "../assets/images/Transformations5.jpeg";

import Transformations6 from "../assets/images/Transformations6.jpeg";
import Transformations7 from "../assets/images/Transformations7.jpeg";

import Transformations8 from "../assets/images/Transformations8.jpeg";
import Transformations9 from "../assets/images/Transformations9.jpeg";

import Transformations10 from "../assets/images/Transformations10.jpeg";
import Transformations11 from "../assets/images/Transformations11.jpeg";

// =====================================================
// TRANSFORMATION DATA
// =====================================================

const transformations = [
  // ===================================================
  // 1. SUNITA + RAM LAKHAN
  // ===================================================

  {
    id: 1,

    before: Transformations1,
    after: Transformations2,

    client: "Sunita Sharma & Ram Lakhan Sharma",

    result: "Couple Transformation",

    members: [
      {
        name: "Sunita Sharma",
        weight: "-46 kg",
      },
      {
        name: "Ram Lakhan Sharma",
        weight: "-12 kg",
      },
    ],

    feedback:
      "Together, they achieved an incredible transformation through proper training, nutrition and consistent guidance.",

    rating: 5,
  },

  // ===================================================
  // 2. SAFINA SALMA
  // ===================================================

  {
    id: 2,

    before: Transformations4,
    after: Transformations5,

    client: "Safina Salma",

    result: "Individual Transformation",

    members: [
      {
        name: "Safina Salma",
        weight: "-20 kg",
      },
    ],

    feedback:
      "Safina Salma achieved an amazing 20 kg weight loss through consistent training, proper nutrition and dedicated guidance.",

    rating: 5,
  },

  // ===================================================
  // 3. MOUMITA DAS
  // ===================================================

  {
    id: 3,

    before: Transformations6,
    after: Transformations7,

    client: "Moumita Das",

    result: "Individual Transformation",

    members: [
      {
        name: "Moumita Das",
        weight: "-10 kg",
        duration: "5 Months",
      },
    ],

    feedback:
      "Moumita Das achieved an amazing 10 kg weight loss in just 5 months through consistent training, proper nutrition and dedicated guidance.",

    rating: 5,
  },

  // ===================================================
  // 4. KABERI MARICK
  // ===================================================

  {
    id: 4,

    before: Transformations8,
    after: Transformations9,

    client: "Kaberi Marick",

    result: "Individual Transformation",

    members: [
      {
        name: "Kaberi Marick",
        weight: "-18 kg",
      },
    ],

    feedback:
      "Kaberi Marick achieved an amazing 18 kg weight loss through consistent training, proper nutrition and dedicated guidance.",

    rating: 5,
  },

  // ===================================================
  // 5. ANUSHREE
  // ===================================================

  {
    id: 5,

    before: Transformations10,
    after: Transformations11,

    client: "Anushree",

    result: "Individual Transformation",

    members: [
      {
        name: "Anushree",
        weight: "-18 kg",
      },
    ],

    feedback:
      "Anushree achieved an amazing 18 kg weight loss through consistent training, proper nutrition and dedicated guidance.",

    rating: 5,
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ===================================================
  // NEXT TRANSFORMATION
  // ===================================================

  const nextTransformation = () => {
    setCurrentIndex((prev) => {
      return (prev + 1) % transformations.length;
    });
  };

  // ===================================================
  // PREVIOUS TRANSFORMATION
  // ===================================================

  const previousTransformation = () => {
    setCurrentIndex((prev) => {
      return (
        (prev - 1 + transformations.length) %
        transformations.length
      );
    });
  };

  // ===================================================
  // SELECT TRANSFORMATION
  // ===================================================

  const selectTransformation = (index) => {
    setCurrentIndex(index);
  };

  // ===================================================
  // AUTO SLIDER
  // ===================================================

  useEffect(() => {
    if (transformations.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % transformations.length;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // ===================================================
  // CURRENT TRANSFORMATION
  // ===================================================

  const current = transformations[currentIndex];

  // ===================================================
  // RETURN
  // ===================================================

  return (
    <section className="before-after-section">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="ba-heading">

        <span className="ba-eyebrow">
          REAL CLIENT RESULTS
        </span>

        <h2 className="ba-title">
          Real Transformations
        </h2>

        <p className="ba-subtitle">
          Real people. Real journeys. Real results.
        </p>

      </div>

      {/* =================================================
          MAIN CARD
      ================================================= */}

      <div className="ba-card">

        {/* =================================================
            BEFORE / AFTER IMAGES
        ================================================= */}

        <div className="ba-images">

          {/* BEFORE */}

          <div className="ba-image-box">

            <img
              src={current.before}
              alt={`${current.client} before transformation`}
              className="ba-photo"
              draggable="false"
            />

            <div className="ba-image-label ba-before-label">
              BEFORE
            </div>

          </div>

          {/* CENTER ARROW */}

          <div className="ba-center-arrow">
            →
          </div>

          {/* AFTER */}

          <div className="ba-image-box">

            <img
              src={current.after}
              alt={`${current.client} after transformation`}
              className="ba-photo"
              draggable="false"
            />

            <div className="ba-image-label ba-after-label">
              AFTER
            </div>

          </div>

        </div>

        {/* =================================================
            CLIENT INFORMATION
        ================================================= */}

        <div className="ba-content">

          {/* CLIENT NAME */}

          <h3 className="ba-client-name">
            {current.client}
          </h3>

          {/* TRANSFORMATION TYPE */}

          <div className="ba-result">
            {current.result}
          </div>

          {/* =================================================
              MEMBERS / WEIGHT LOSS
          ================================================= */}

          <div className="ba-members">

            {current.members.map(
              (member, index) => (

                <div
                  className="ba-member"
                  key={index}
                >

                  <span className="ba-member-name">
                    {member.name}
                  </span>

                  <span className="ba-member-weight">
                    {member.weight}
                  </span>

                  {/* Duration only when available */}

                  {member.duration && (
                    <span className="ba-member-duration">
                      {member.duration}
                    </span>
                  )}

                </div>

              )
            )}

          </div>

          {/* =================================================
              RATING
          ================================================= */}

          <div className="ba-stars">
            {"★".repeat(current.rating)}
          </div>

          {/* =================================================
              FEEDBACK
          ================================================= */}

          <p className="ba-feedback">
            "{current.feedback}"
          </p>

        </div>

      </div>

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <div className="ba-navigation">

        {/* PREVIOUS */}

        <button
          type="button"
          className="ba-nav-button"
          onClick={previousTransformation}
          aria-label="Previous transformation"
        >
          ←
        </button>

        {/* DOTS */}

        <div className="ba-dots">

          {transformations.map(
            (transformation, index) => (

              <button
                key={transformation.id}
                type="button"
                className={
                  currentIndex === index
                    ? "ba-dot active"
                    : "ba-dot"
                }
                onClick={() =>
                  selectTransformation(index)
                }
                aria-label={`Show transformation ${
                  index + 1
                }`}
              />

            )
          )}

        </div>

        {/* NEXT */}

        <button
          type="button"
          className="ba-nav-button"
          onClick={nextTransformation}
          aria-label="Next transformation"
        >
          →
        </button>

      </div>

      {/* =================================================
          COUNTER
      ================================================= */}

      <div className="ba-counter">

        <span>
          {String(currentIndex + 1).padStart(
            2,
            "0"
          )}
        </span>

        <span className="ba-counter-line"></span>

        <span>
          {String(transformations.length).padStart(
            2,
            "0"
          )}
        </span>

      </div>

    </section>
  );
}