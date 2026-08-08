import React from "react";
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
  },
  {
    image: program2,
    title: "Weight Gain Program",
    description:
      "Build healthy muscle mass through personalized nutrition and strength training guidance.",
  },
  {
    image: program3,
    title: "Women's Wellness",
    description:
      "Lifestyle and nutrition programs designed to support hormonal balance and overall wellbeing.",
  },
  {
    image: program4,
    title: "Detox & Lifestyle",
    description:
      "Natural detox plans and healthy habits to refresh your body and improve your daily energy.",
  },
];

function Programs() {
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

            <div className="program-card" key={index}>

              <div className="program-image">

                <img
                  src={program.image}
                  alt={program.title}
                />

              </div>

              <div className="program-content">

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <a href="/">
                  Learn More
                  <FaArrowRight />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Programs;