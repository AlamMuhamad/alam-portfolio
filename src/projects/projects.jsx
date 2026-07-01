import React, { useState } from "react";
import "./projects.css";

const projectsData = [
  // --- SHOPIFY STORES ---
  {
    id: 1,
    category: "Shopify",
    title: "ZarDoch",
    description: "Premium Balochi Fashion store with custom Liquid architecture and mobile-first UI.",
    tech: ["Shopify 2.0", "Liquid", "JS"],
    link: "https://zardoch.myshopify.com",
    btnText: "Visit Store"
  },
  {
    id: 2,
    category: "Shopify",
    title: "NordHaven",
    description: "Modern furniture e-commerce store with advanced product filtering and speed optimization.",
    tech: ["Shopify", "Custom Sections", "CSS"],
    link: "https://nordhaven-15.myshopify.com",
    btnText: "Visit Store"
  },
  {
    id: 3,
    category: "Shopify",
    title: "Aalam Sports",
    description: "Full-scale sports equipment store featuring mega-menus and high-conversion layout.",
    tech: ["Shopify", "Liquid", "API Sync"],
    link: "https://alambravi-2.myshopify.com",
    btnText: "Visit Store"
  },
  // --- REACT & FRONTEND PROJECTS ---
  {
    id: 4,
    category: "React/Web",
    title: "Dev Portfolio",
    description: "A high-performance modern portfolio built with React.js, featuring dark mode and glassmorphism.",
    tech: ["React.js", "Vite", "CSS3"],
    link: "https://github.com/AlamMuhamad", // Add your github/live link here
    btnText: "View Code"
  },
  {
    id: 5,
    category: "React/Web",
    title: "E-com Dashboard",
    description: "Custom admin dashboard for managing inventory and orders with real-time data visualization.",
    tech: ["React", "Firebase", "Chart.js"],
    link: "https://github.com/AlamMuhamad",
    btnText: "Live Demo"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Portfolio</span>
          <h2 className="section-title">Featured Work</h2>
          <div className="title-underline"></div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-tabs">
          {["All", "Shopify", "React/Web"].map((tab) => (
            <button 
              key={tab}
              className={`filter-btn ${filter === tab ? "active" : ""}`}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-badge">{project.category}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link-btn ${project.category === 'Shopify' ? 'shopify-btn' : 'react-btn'}`}
                >
                  {project.btnText}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;