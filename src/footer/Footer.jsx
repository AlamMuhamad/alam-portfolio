import React from "react";
import "./footer.css";
import { Github, Linkedin, Mail, Facebook, Instagram, MessageCircle, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={22} />, url: "https://github.com/AlamMuhamad", label: "GitHub", className: "github" },
    { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/muhammad-alam-68063b196", label: "LinkedIn", className: "linkedin" },
    { icon: <Mail size={22} />, url: "mailto:alambrohi11@gmail.com", label: "Email", className: "mail" },
    { icon: <MessageCircle size={22} />, url: "https://wa.me/923013214803", label: "WhatsApp", className: "whatsapp" },
    { icon: <Facebook size={22} />, url: "https://www.facebook.com/share/1DTyX74skK/", label: "Facebook", className: "facebook" },
    { icon: <Instagram size={22} />, url: "https://www.instagram.com/alaam_baloch?igsh=cXJteHpkdzBpaXo1", label: "Instagram", className: "instagram" },
  ];

  return (
    <footer className="footer">
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <ChevronUp size={24} />
      </button>

      <div className="footer-content">
        <h3 className="footer-logo">Muhammad Alam</h3>
        <p className="footer-tagline">
          Full Stack Developer | Java | Spring Boot | React
        </p>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={link.className}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Muhammad Alam. Built with ❤️ in Karachi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;