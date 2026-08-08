import React from "react";
import "./Blog.css";

import { FaArrowRight, FaCalendarAlt, FaLeaf } from "react-icons/fa";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const blogs = [
  {
    image: blog1,
    title: "Healthy Foods That Support Everyday Wellness",
    date: "June 10, 2026",
    category: "Nutrition",
  },
  {
    image: blog2,
    title: "Simple Daily Yoga Habits for a Balanced Lifestyle",
    date: "June 8, 2026",
    category: "Fitness",
  },
  {
    image: blog3,
    title: "Easy Ways to Stay Hydrated Throughout the Day",
    date: "June 5, 2026",
    category: "Lifestyle",
  },
];

function Blog() {
  return (
    <>
     <section id="blog" className="blog">

        <div className="blog-container">

          <span className="blog-subtitle">
            OUR BLOG
          </span>

          <h2 className="blog-title">
            Latest Health & Wellness Tips
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

                  <a href="/">
                    Read More
                    <FaArrowRight />
                  </a>

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

          <button className="cta-btn">
            Book Free Consultation
          </button>

        </div>

      </section>

    </>
  );
}

export default Blog;