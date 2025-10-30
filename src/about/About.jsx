import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="intro">
          I’m <span>Muhammad Alam</span> — a passionate and dedicated Java and React Developer,
          focused on building dynamic, user-friendly, and high-performing web applications.
        </p>

        <p className="details">
          Over the last few years, I’ve faced challenges, learned through persistence, and built
          my skills from the ground up. Today, I specialize in developing full-stack projects
          using <strong>Java, Spring Boot, MySQL, and React</strong>. My goal is to contribute to
          innovative solutions that make a real impact while continuing to learn and grow every day.
        </p>

        <p className="details">
          Every line of code I write is a reflection of my journey — one built on patience,
          struggle, and an unbreakable desire to succeed for my family and my little son, Umar.
        </p>

        <div className="about-buttons">
          <a href="#contact" className="btn">Let's Connect</a>

          <a href="/cv.pdf" className="btn secondary" download>Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
