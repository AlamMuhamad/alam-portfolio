import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img
          src="/images/34.jpg"  // Use this path directly for public folder
          alt="Muhammad Alam"
          className="hero-img"
        />
        <h1>Muhammad Alam</h1>
        <p className="tagline">
          Full Stack Developer | Java, Spring Boot, React JS | Building modern web apps
        </p>
        <a href="#contact" className="cta-btn">
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
