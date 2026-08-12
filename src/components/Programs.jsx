import React, { useState } from "react";
import "./Programs.css";

import { FaArrowRight } from "react-icons/fa";

import program1 from "../assets/images/program1.jpg";
import program2 from "../assets/images/program2.jpg";
import program3 from "../assets/images/program3.jpg";
import program4 from "../assets/images/program4.jpg";

const programs = [
  {
    image: program1,
    title: "Weight Loss Program",
    description:
      "Healthy nutrition and customized fitness plans to help you achieve sustainable weight loss.",
    points: [
      "Personalized nutrition guidance",
      "Calorie-smart meal planning",
      "Workout routine for fat burn",
      "Weekly progress tracking",
    ],
  },
  {
    image: program2,
    title: "Weight Gain Program",
    description:
      "Build healthy muscle mass through personalized nutrition and strength training guidance.",
    points: [
      "High-protein meal plan",
      "Strength-focused training",
      "Muscle recovery support",
      "Body composition improvement",
    ],
  },
  {
    image: program3,
    title: "Women's Wellness",
    description:
      "Lifestyle and nutrition programs designed to support hormonal balance and overall wellbeing.",
    points: [
      "Hormone-friendly nutrition",
      "Stress and energy support",
      "Fitness for women’s health",
      "Lifestyle habit coaching",
    ],
  },
  {
    image: program4,
    title: "Detox & Lifestyle",
    description:
      "Natural detox plans and healthy habits to refresh your body and improve your daily energy.",
    points: [
      "Detoxifying food habits",
      "Improved hydration routine",
      "Daily wellness tracking",
      "Better energy and digestion",
    ],
  },
];

function Programs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="programs" className="programs">

      <div className="programs-container">

        <span className="program-subtitle">
          OUR PROGRAMS
        </span>

        <h2 className="program-title">
          Specialized Wellness Programs
        </h2>

        <p className="program-description">
          Explore expert-designed wellness programs tailored
          to your health goals and lifestyle.
        </p>

        <div className="program-grid">

          {programs.map((program, index) => (

            <div
              className={
                program.title === "Weight Loss Program"
                  ? "program-card featured"
                  : "program-card"
              }
              key={index}
            >

              <div className="program-image">

                <img
                  src={program.image}
                  alt={program.title}
                />

              </div>

              <div className="program-content">

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <button
                  type="button"
                  className="learn-more-btn"
                  onClick={() =>
                    setExpandedIndex(
                      expandedIndex === index ? null : index
                    )
                  }
                >
                  {expandedIndex === index ? "Hide Details" : "Learn More"}
                  <FaArrowRight />
                </button>

                {expandedIndex === index && (
                  <ul className="program-points">
                    {program.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Programs;