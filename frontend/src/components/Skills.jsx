import { skills } from "../data/portfolioData.js";

function Skills() {
  return (
    <section id="skills">
      <p className="section-tag">Skills</p>
      <h2 className="section-heading">What I Know</h2>
      <div className="section-underline"></div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-tag-list">
            {skills.frontend.map((skill) => (
              <div className="skill-tag" key={skill.name}>
                <span>{skill.name}</span>
                {skill.status && <span className="badge">{skill.status}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3>Other Skills</h3>
          <div className="skill-tag-list">
            {skills.other.map((skill) => (
              <div className="skill-tag" key={skill.name}>
                <span>{skill.name}</span>
                {skill.status && <span className="badge">{skill.status}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3>Currently Learning</h3>
          <div className="skill-tag-list">
            {skills.currentlyLearning.map((skill) => (
              <div className="skill-tag" key={skill.name}>
                <span>{skill.name}</span>
                {skill.status && <span className="badge">{skill.status}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="soft-skills">
        {skills.soft.map((skill) => (
          <span className="soft-skill-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
