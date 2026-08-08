import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting Fusion Fitness! We will get back to you soon."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">

      {/* =================================
          CONTACT HEADER
      ================================== */}

      <div className="contact-heading">

        <span className="contact-subtitle">
          CONTACT US
        </span>

        <h1>
          Let's Start Your
          <span> Wellness Journey</span>
        </h1>

        <p>
          Have questions about our programs or need personalized
          guidance? Get in touch with our wellness experts today.
        </p>

      </div>


      {/* =================================
          CONTACT CONTAINER
      ================================== */}

      <div className="contact-container">


        {/* =================================
            LEFT SIDE
        ================================== */}

        <div className="contact-info">

          <span className="info-label">
            GET IN TOUCH
          </span>

          <h2>
            We're Here to
            <br />
            <span>Help You</span>
          </h2>

          <p className="info-description">
            Whether you're looking to lose weight, improve your
            fitness, build healthier habits or simply feel better,
            our team is ready to support you.
          </p>


          {/* Contact Cards */}

          <div className="contact-details">


            {/* Phone */}

            <div className="contact-card">

              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span>Call Us</span>

                <a href="tel:+919999999999">
                  +91 99999 99999
                </a>
              </div>

            </div>


            {/* Email */}

            <div className="contact-card">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>Email Us</span>

                <a href="mailto:info@fusionfitness.com">
                  info@fusionfitness.com
                </a>
              </div>

            </div>


            {/* Location */}

            <div className="contact-card">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <span>Visit Us</span>

                <p>
                  Fusion Fitness Wellness Centre,
                  <br />
                  Kolkata, West Bengal, India
                </p>
              </div>

            </div>


            {/* Working Hours */}

            <div className="contact-card">

              <div className="contact-icon">
                🕐
              </div>

              <div>
                <span>Working Hours</span>

                <p>
                  Monday - Saturday
                  <br />
                  8:00 AM - 8:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =================================
            RIGHT FORM
        ================================== */}

        <div className="contact-form-wrapper">

          <div className="form-header">

            <span>
              FREE CONSULTATION
            </span>

            <h2>
              Book Your Consultation
            </h2>

            <p>
              Fill in the details below and our wellness expert
              will contact you shortly.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >


            {/* Name + Phone */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* Email + Service */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="service">
                  Interested In
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="weight-loss">
                    Weight Loss
                  </option>

                  <option value="weight-gain">
                    Weight Gain
                  </option>

                  <option value="nutrition">
                    Nutrition Planning
                  </option>

                  <option value="fitness">
                    Fitness Program
                  </option>

                  <option value="wellness">
                    Wellness Consultation
                  </option>

                </select>

              </div>

            </div>


            {/* Message */}

            <div className="form-group">

              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your health and wellness goals..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="contact-submit"
            >
              Book Free Consultation
              <span>→</span>
            </button>

            <small className="form-note">
              🔒 Your information is completely confidential.
            </small>

          </form>

        </div>

      </div>


      {/* =================================
          MAP / LOCATION
      ================================== */}

      <div className="contact-map">

        <div className="map-content">

          <div className="map-icon">
            📍
          </div>

          <h3>
            Visit Fusion Fitness
          </h3>

          <p>
            Kolkata, West Bengal, India
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;