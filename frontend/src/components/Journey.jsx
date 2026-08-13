import { journeyPoints } from "../data/portfolioData.js";

function Journey() {
  return (
    <section id="journey">
      <p className="section-tag">Journey</p>
      <h2 className="section-heading">My Learning Journey</h2>
      <div className="section-underline"></div>

      <div className="journey-list">
        {journeyPoints.map((point, index) => (
          <div className="journey-item" key={index}>
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
