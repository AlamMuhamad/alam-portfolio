import React from 'react';
import './Hero.css';


export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src="/images/34.jpg" alt="Muhammad Alam" className="hero-img" />
        <h1>Hi, I'm <span>Muhammad Alam</span></h1>
        <h2>Java & React Developer</h2>
        <p>
          I build modern web applications with clean code and strong logic.
        </p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}
