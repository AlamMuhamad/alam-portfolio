import React from "react";
import "./footer.css";
import { Github, Linkedin, Mail, Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Muhammad Alam</h3>
        <p className="footer-tagline">
          Java | Spring Boot | React | MySQL Developer
        </p>

        <div className="social-links">
          <a
            href="https://github.com/AlamMuhamad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-alam-68063b196"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:alambrohi11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://wa.me/923013214803" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Phone size={22} />
          </a>

          <a
            href="https://www.facebook.com/share/1DTyX74skK/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={22} />
          </a>

          <a
            href="https://www.instagram.com/alaam_baloch?igsh=cXJteHpkdzBpaXo1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Muhammad Alam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;