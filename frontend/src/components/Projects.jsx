import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData.js";

function Projects() {
  return (
    <section id="projects">
      <p className="section-tag">Projects</p>
      <h2 className="section-heading">Things I've Built</h2>
      <div className="section-underline"></div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target={project.github ? "_blank" : "_self"}
                rel="noreferrer"
                className="btn btn-outline"
              >
                <FaGithub /> GitHub Link
              </a>
              <a
                href={project.liveDemo}
                target={project.liveDemo ? "_blank" : "_self"}
                rel="noreferrer"
                className="btn btn-outline"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
