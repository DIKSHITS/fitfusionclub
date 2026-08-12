import React, { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaLeaf } from "react-icons/fa";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const blogs = [
  {
    image: blog1,
    title: "Weight-Loss Breakfasts That Keep You Full",
    date: "June 10, 2026",
    category: "Weight Loss",
    tips: [
      "Start the day with protein-rich breakfast options.",
      "Add fiber and vegetables to every meal for fullness.",
      "Avoid sugary drinks and refined snacks.",
      "Keep portions balanced and realistic.",
      "Drink water before meals to reduce overeating.",
    ],
  },
  {
    image: blog2,
    title: "Simple Daily Habits to Burn Fat Faster",
    date: "June 8, 2026",
    category: "Fat Loss",
    tips: [
      "Take a brisk walk after meals for better digestion.",
      "Sleep 7 to 8 hours to manage cravings and energy.",
      "Add strength training 3 times a week.",
      "Choose home-cooked meals over processed foods.",
      "Track your meals to stay consistent and aware.",
    ],
  },
  {
    image: blog3,
    title: "Healthy Weight-Loss Tips for Busy People",
    date: "June 5, 2026",
    category: "Lifestyle",
    tips: [
      "Use smaller plates to control portions naturally.",
      "Carry a healthy snack to avoid impulse eating.",
      "Plan meals in advance to stay on track.",
      "Move more during the day with short walks.",
      "Stay consistent instead of chasing quick fixes.",
    ],
  },
];

function Blog() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
     <section id="blog" className="blog">

        <div className="blog-container">

          <span className="blog-subtitle">
            OUR BLOG
          </span>

          <h2 className="blog-title">
            Weight Loss Tips for Real Results
          </h2>

          <div className="blog-grid">

            {blogs.map((blog, index) => (

              <div className="blog-card" key={index}>

                <div className="blog-image">

                  <img
                    src={blog.image}
                    alt={blog.title}
                  />

                </div>

                <div className="blog-content">

                  <h3>{blog.title}</h3>

                  <div className="blog-meta">

                    <span>
                      <FaCalendarAlt />
                      {blog.date}
                    </span>

                    <span>
                      <FaLeaf />
                      {blog.category}
                    </span>

                  </div>

                  <button
                    type="button"
                    className="read-more-btn"
                    onClick={() =>
                      setExpandedIndex(
                        expandedIndex === index ? null : index
                      )
                    }
                  >
                    {expandedIndex === index ? "Hide Tips" : "Read More"}
                    <FaArrowRight />
                  </button>

                  {expandedIndex === index && (
                    <ul className="tip-list">
                      {blog.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="cta">

        <div className="cta-container">

          <div className="cta-left">

            <div className="cta-icon">
              📅
            </div>

            <div>

              <h2>
                Ready to Transform Your Life?
              </h2>

              <p>
                Book your free wellness consultation and start
                your healthier journey today.
              </p>

            </div>

          </div>

      <Link to="/booking" className="cta-btn">
  Book Free Consultation
</Link>

        </div>

      </section>

    </>
  );
}

export default Blog;