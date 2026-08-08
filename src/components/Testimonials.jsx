import React from "react";
import "./Testimonials.css";

import { FaQuoteLeft } from "react-icons/fa";

import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";

const testimonials = [
  {
    image: client1,
    name: "Priya Sharma",
    role: "Happy Client",
    review:
      "The personalized wellness plan completely transformed my daily routine. I feel healthier, more energetic, and much more confident.",
  },
  {
    image: client2,
    name: "Rohan Mehta",
    role: "Fitness Client",
    review:
      "The coaching was practical and motivating. Every session helped me stay focused on my health goals with real results.",
  },
  {
    image: client3,
    name: "Anjali Verma",
    role: "PCOS Program",
    review:
      "The wellness guidance and nutrition support helped me improve my lifestyle naturally. I highly recommend the program.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonial-container">

        <span className="testimonial-subtitle">
          TESTIMONIALS
        </span>

        <h2 className="testimonial-title">
          What Our Clients Say
        </h2>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <p className="testimonial-text">
                "{item.review}"
              </p>

              <div className="client-info">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.role}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="testimonial-dots">

          <span className="active"></span>
          <span></span>
          <span></span>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;