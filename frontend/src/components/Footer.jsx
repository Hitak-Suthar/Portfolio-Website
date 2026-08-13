import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <p>
          © {year} {personalInfo.name} — {personalInfo.title}
        </p>
        {/* <p>Built with React.js</p> */}
      </div>

      <div className="footer-socials">
        <a href={personalInfo.github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
