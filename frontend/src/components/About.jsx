import { FaCode, FaGraduationCap, FaLaptopCode, FaBrain } from "react-icons/fa";
import { aboutText } from "../data/portfolioData.js";

const points = [
  { icon: <FaGraduationCap />, text: "BCA Student at Silver Oak University" },
  { icon: <FaCode />, text: "Hands-on projects using HTML, CSS & JavaScript" },
  { icon: <FaLaptopCode />, text: "Currently learning React.js and MERN stack" },
  { icon: <FaBrain />, text: "Strong problem-solving and continuous learning" },
];

function About() {
  return (
    <section id="about">
      <p className="section-tag">About</p>
      <h2 className="section-heading">About Me</h2>
      <div className="section-underline"></div>

      <div className="about-content">
        <p className="about-text">{aboutText}</p>

        <div className="about-points">
          {points.map((point, index) => (
            <div className="about-point" key={index}>
              {point.icon}
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
