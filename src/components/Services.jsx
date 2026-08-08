import React from "react";
import "./Services.css";

import {
  FaAppleAlt,
  FaDumbbell,
  FaLeaf,
  FaBrain,
  FaShieldAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const services = [
  {
    icon: <FaAppleAlt />,
    title: "Nutrition Counseling",
    description:
      "Personalized nutrition plans designed to support your healthy lifestyle.",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness Programs",
    description:
      "Customized workout programs for strength, flexibility and endurance.",
  },
  {
    icon: <FaLeaf />,
    title: "Weight Management",
    description:
      "Healthy and sustainable strategies to reach your wellness goals.",
  },
  {
    icon: <FaBrain />,
    title: "Stress Management",
    description:
      "Mindfulness and relaxation techniques for a balanced lifestyle.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Immunity Boosting",
    description:
      "Improve your natural immunity with expert wellness guidance.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Lifestyle Coaching",
    description:
      "Build healthy daily habits that last a lifetime.",
  },
];

function Services() {
  return (
   <section id="services" className="services">

      <div className="services-container">

        <span className="section-subtitle">
          WHAT WE OFFER
        </span>

        <h2 className="section-title">
          Our Wellness Services
        </h2>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;