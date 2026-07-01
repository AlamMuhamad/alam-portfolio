import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="dot"></span> Expert Shopify & Liquid Developer
          </span>

          <h1>
            Building High-Converting <span>Shopify Experiences</span>
          </h1>

          <p className="tagline">
            Hi, I’m <strong>Muhammad Alam</strong>. I specialize in advanced 
            Shopify development, creating custom Liquid themes, and scaling 
            e-commerce brands with 50+ successful store launches.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span>50+</span>
              <p>Stores Built</p>
            </div>
            <div className="stat-item">
              <span>99%</span>
              <p>Site Speed</p>
            </div>
            <div className="stat-item">
              <span>Expert</span>
              <p>Liquid/API</p>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="cta-btn primary">
              View Shopify Portfolio
            </a>
            <a href="#contact" className="cta-btn secondary">
              Start Your Project
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="image-bg-blob"></div>
          <img
            src="/images/34.jpg" // Make sure this path is correct
            alt="Muhammad Alam - Shopify Expert"
            className="hero-img"
          />
          {/* Floating badge for extra effect */}
          <div className="floating-badge">
            <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" />
            <span>Certified Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;