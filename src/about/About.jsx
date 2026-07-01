import React from "react";
import "./About.css";
import { Download, Mail, ShoppingBag, Code, Server, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="sub-heading">Technical Profile</span>
          <h2 className="about-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="intro">
              I am <span className="highlight">Muhammad Alam</span>, a multi-stack developer 
              specializing in <strong>Advanced Shopify Ecosystems</strong> and 
              Modern Web Technologies.
            </p>

            <p className="details">
              My core strength lies in building high-performance e-commerce stores using 
              <strong> Shopify Liquid & OS 2.0</strong>. Beyond Shopify, I have a solid 
              foundation in <strong>React.js</strong> for frontend brilliance and 
              <strong> Java Spring Boot</strong> for backend logic.
            </p>

            <div className="skills-grid">
              <div className="skill-item">
                <ShoppingBag className="skill-icon shopify-color" />
                <div>
                  <h4>Shopify Mastery</h4>
                  <span>Liquid, Custom Themes, Apps</span>
                </div>
              </div>
              <div className="skill-item">
                <Code className="skill-icon react-color" />
                <div>
                  <h4>React Frontend</h4>
                  <span>Hooks, Redux, Modern UI</span>
                </div>
              </div>
              <div className="skill-item">
                <Server className="skill-icon java-color" />
                <div>
                  <h4>Backend Core</h4>
                  <span>Java, Spring Boot, MySQL</span>
                </div>
              </div>
              <div className="skill-item">
                <Zap className="skill-icon optimization-color" />
                <div>
                  <h4>Performance</h4>
                  <span>SEO & Speed Optimization</span>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">
                <Mail size={18} />
                Let's Build Something
              </a>

              {/* DOWNLOAD CV BUTTON START */}
             <a 
  href="/cv.pdf" 
  download="Muhammad_Alam_CV.pdf" 
  className="btn btn-secondary"
>
  <Download size={18} />
  Download CV
</a>
              {/* DOWNLOAD CV BUTTON END */}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stats-card">
              <div className="stat-circle">50+</div>
              <h4>Stores Delivered</h4>
              <p>Custom Shopify builds & successful migrations.</p>
            </div>
            
            <div className="tech-pills">
              <span className="pill">Shopify OS 2.0</span>
              <span className="pill">Liquid Logic</span>
              <span className="pill">REST APIs</span>
              <span className="pill">React JS</span>
              <span className="pill">Spring Boot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;