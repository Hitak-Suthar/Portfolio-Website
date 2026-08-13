import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData.js";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-title">{personalInfo.name}</h1>
        <h2 className="hero-role">{personalInfo.title}</h2>

        <p className="hero-desc">
          I'm an aspiring frontend developer who enjoys building responsive,
          user-friendly interfaces with HTML, CSS and JavaScript. I'm
          currently learning React.js and the MERN stack, and I'm looking
          for an internship or fresher opportunity to grow as a developer.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a
            href={personalInfo.resumeFile}
            download
            className="btn btn-outline"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="side-indicator">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
