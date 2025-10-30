import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="contact-text">
        I’d love to hear from you! Whether you have a question or just want to
        say hi, feel free to drop a message below.
      </p>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! I’ll get back to you soon 😊");
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📧 Email: <a href="mailto:alambrohi11@gmail.com">alambrohi11@gmail.com</a></p>
        <p>🌍 Location: Karachi, Pakistan</p>
      </div>
    </section>
  );
};

export default Contact;
