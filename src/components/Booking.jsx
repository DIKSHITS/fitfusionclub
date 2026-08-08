import React, { useState } from "react";
import "./Booking.css";

function Booking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  /* =========================================
     AVAILABLE TIME SLOTS
  ========================================= */

  const timeSlots = [
    "11:00 AM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  /* =========================================
     HANDLE INPUT
  ========================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================
     DATE CHANGE
  ========================================= */

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);

    // Reset time when date changes
    setSelectedTime("");
  };

  /* =========================================
     SELECT TIME
  ========================================= */

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    const formattedDate = new Date(
      `${selectedDate}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    alert(
      `Consultation booked successfully!\n\n` +
      `Name: ${formData.name}\n` +
      `Service: ${formData.service}\n` +
      `Date: ${formattedDate}\n` +
      `Time: ${selectedTime}`
    );

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });

    setSelectedDate("");
    setSelectedTime("");
  };

  /* =========================================
     GET TODAY DATE
  ========================================= */

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="booking-page">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="booking-heading">

        <span className="booking-subtitle">
          BOOK CONSULTATION
        </span>

        <h1>
          Start Your
          <span> Wellness Journey</span>
        </h1>

        <p>
          Choose your preferred date and time and book a
          personalized consultation with our wellness experts.
        </p>

      </div>


      {/* =====================================
          MAIN CONTAINER
      ====================================== */}

      <div className="booking-container">


        {/* =================================
            LEFT INFORMATION
        ================================== */}

        <div className="booking-info">

          <div className="booking-info-icon">
            🌿
          </div>

          <h2>
            Your Health,
            <br />
            <span>Our Priority</span>
          </h2>

          <p>
            Take the first step towards a healthier and happier
            lifestyle. Our wellness experts will understand your
            goals and create a personalized plan for you.
          </p>


          {/* BENEFITS */}

          <div className="booking-benefits">

            <div className="booking-benefit">
              <span>✓</span>
              <p>Personalized Consultation</p>
            </div>

            <div className="booking-benefit">
              <span>✓</span>
              <p>Expert Wellness Guidance</p>
            </div>

            <div className="booking-benefit">
              <span>✓</span>
              <p>Flexible Appointment Slots</p>
            </div>

            <div className="booking-benefit">
              <span>✓</span>
              <p>100% Confidential</p>
            </div>

          </div>


          {/* FREE CONSULTATION */}

          <div className="booking-note">

            <strong>
              Free Consultation
            </strong>

            <span>
              No consultation fee for your first appointment.
            </span>

          </div>

        </div>


        {/* =================================
            BOOKING FORM
        ================================== */}

        <div className="booking-form-wrapper">

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            {/* FORM TITLE */}

            <div className="form-title">

              <h2>
                Book Your Appointment
              </h2>

              <p>
                Fill in your details and select your preferred slot.
              </p>

            </div>


            {/* =================================
                NAME + PHONE
            ================================== */}

            <div className="booking-row">

              <div className="booking-group">

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
                  autoComplete="name"
                  required
                />

              </div>


              <div className="booking-group">

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
                  autoComplete="tel"
                  required
                />

              </div>

            </div>


            {/* =================================
                EMAIL + SERVICE
            ================================== */}

            <div className="booking-row">

              <div className="booking-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

              </div>


              <div className="booking-group">

                <label htmlFor="service">
                  Consultation For
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select service
                  </option>

                  <option value="Weight Loss">
                    Weight Loss
                  </option>

                  <option value="Weight Gain">
                    Weight Gain
                  </option>

                  <option value="Nutrition Planning">
                    Nutrition Planning
                  </option>

                  <option value="Fitness Program">
                    Fitness Program
                  </option>

                  <option value="Wellness Consultation">
                    Wellness Consultation
                  </option>

                </select>

              </div>

            </div>


            {/* =================================
                DATE
            ================================== */}

            <div className="booking-group date-group">

              <label htmlFor="booking-date">
                Choose Date
              </label>

              <input
                id="booking-date"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                min={today}
                required
              />

            </div>


            {/* =================================
                TIME SLOTS
            ================================== */}

            <div className="slot-section">

              <div className="slot-heading">

                <label>
                  Choose Time Slot
                </label>

                {selectedTime && (
                  <span>
                    {selectedTime}
                  </span>
                )}

              </div>


              {!selectedDate ? (

                <div className="select-date-message">

                  <span>
                    📅
                  </span>

                  <p>
                    Please select a date first
                    to see available time slots.
                  </p>

                </div>

              ) : (

                <div className="time-slots">

                  {timeSlots.map((time) => (

                    <button
                      key={time}
                      type="button"
                      className={
                        selectedTime === time
                          ? "time-slot selected"
                          : "time-slot"
                      }
                      onClick={() =>
                        handleTimeSelect(time)
                      }
                      aria-pressed={
                        selectedTime === time
                      }
                    >
                      {time}
                    </button>

                  ))}

                </div>

              )}

            </div>


            {/* =================================
                MESSAGE
            ================================== */}

            <div className="booking-group">

              <label htmlFor="message">

                Message

                <span className="optional">
                  Optional
                </span>

              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your wellness goals..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>


            {/* =================================
                BOOKING SUMMARY
            ================================== */}

            {selectedDate && selectedTime && (

              <div className="booking-summary">

                <div>

                  <span>
                    Date
                  </span>

                  <strong>
                    {new Date(
                      `${selectedDate}T00:00:00`
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </strong>

                </div>


                <div>

                  <span>
                    Time
                  </span>

                  <strong>
                    {selectedTime}
                  </strong>

                </div>

              </div>

            )}


            {/* =================================
                SUBMIT BUTTON
            ================================== */}

            <button
              type="submit"
              className="booking-submit"
            >

              Confirm Consultation

              <span>
                →
              </span>

            </button>


            {/* SECURITY */}

            <small className="booking-security">
              🔒 Your information is safe and confidential.
            </small>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Booking;