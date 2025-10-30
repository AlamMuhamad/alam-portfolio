import React from "react";
import { projectsData } from "../data/ProjectsData";

import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
