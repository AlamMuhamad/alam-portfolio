import React from "react";
import "./About.css";
import { Download, Mail, Code, Database, Globe, GraduationCap } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Muhammad_Alam_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="intro">
              I'm <span className="highlight">Muhammad Alam</span> — a passionate and enthusiastic 
              <strong> Fresh Graduate & Full-Stack Developer</strong> eager to kickstart my career 
              in web development.
            </p>

            <p className="details">
              Recently equipped with strong skills in <strong>Java, Spring Boot, MySQL, and React</strong>, 
              I've built a solid foundation through personal projects and continuous learning. 
              I'm excited to apply my knowledge and grow within a professional environment.
            </p>

            <div className="skills-grid">
              <div className="skill-item">
                <Code className="skill-icon" />
                <span>Frontend Development</span>
              </div>
              <div className="skill-item">
                <Database className="skill-icon" />
                <span>Backend Development</span>
              </div>
              <div className="skill-item">
                <Globe className="skill-icon" />
                <span>Full-Stack Projects</span>
              </div>
              <div className="skill-item">
                <GraduationCap className="skill-icon" />
                <span>Quick Learner</span>
              </div>
            </div>

            <p className="details motivation">
              As a fresh graduate, I bring fresh perspectives, strong problem-solving skills, 
              and a hunger to learn and contribute to meaningful projects.
            </p>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">
                <Mail size={18} />
                Let's Connect
              </a>
              <button onClick={handleDownloadCV} className="btn btn-secondary">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="floating-card">
              <GraduationCap className="visual-icon" />
              <h4>Fresh Graduate</h4>
              <p>Eager to start my professional journey</p>
            </div>
            <div className="floating-card">
              <Code className="visual-icon" />
              <h4>Project Experience</h4>
              <p>Hands-on with modern technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;