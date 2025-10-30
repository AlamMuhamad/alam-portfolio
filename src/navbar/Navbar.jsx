import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo">
    <img 
      src="/images/kanoo.png"   // put your small logo in public/images/
      alt="Logo" 
      className="logo-img"
    />
    Muhammad Alam
  </div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}