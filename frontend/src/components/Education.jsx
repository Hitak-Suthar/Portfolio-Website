import { education } from "../data/portfolioData.js";

function Education() {
  return (
    <section id="education">
      <p className="section-tag">Education</p>
      <h2 className="section-heading">My Education</h2>
      <div className="section-underline"></div>

      <div className="education-card">
        <div className="education-header">
          <div>
            <h3>{education.degree}</h3>
            <p>
              {education.university}, {education.location}
            </p>
          </div>
          <span className="education-duration">{education.duration}</span>
        </div>

        <div className="sem-grid">
          {education.semesters.map((sem) => (
            <div className="sem-box" key={sem.sem}>
              <p className="spi">{sem.spi}</p>
              <p>{sem.sem} SPI</p>
            </div>
          ))}
        </div>

        <span className="cgpa-highlight">CGPA: {education.cgpa}</span>
      </div>
    </section>
  );
}

export default Education;
