import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate an API Call (e.g., EmailJS or Formspree)
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-text">
          I’d love to hear from you! Drop a message below and I'll get back to you soon.
        </p>

        {submitted ? (
          <div className="success-message">
            <div className="check-icon">✓</div>
            <p>Message sent successfully! I'll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <div className="contact-info">
          <p>📧 Email: <a href="mailto:alambrohi11@gmail.com">alambrohi11@gmail.com</a></p>
          <p>🌍 Location: Karachi, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;