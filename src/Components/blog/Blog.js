import React from "react";
import "./Blog.css";
import scienceImage from "./science.jpeg";
import artsImage from "./arts.png";
import commerceImage from "./commerce.png";

const Academics = () => {
  return (
    <section id="academics" className="main-academics"  >
      <h2 className="academics-heading">Our Academic Programs</h2>
      <div className="academics-details">
        <div className="academics-program">
          <img src={scienceImage} alt="Science Program" />
          <h3>Science Program</h3>
          <p>
            Our Science Program offers a comprehensive curriculum covering
            physics, chemistry, biology, and mathematics, preparing students for
            careers in medicine, engineering, and research.
          </p>
        </div>
        <div className="academics-program">
          <img src={artsImage} alt="Arts Program" />
          <h3>Arts Program</h3>
          <p>
            Explore the rich world of humanities, literature, and social sciences
            in our Arts Program, designed to develop critical thinking and
            creative skills.
          </p>
        </div>
        <div className="academics-program">
          <img src={commerceImage} alt="Commerce Program" />
          <h3>Commerce Program</h3>
          <p>
            Our Commerce Program provides in-depth knowledge in business, economics,
            and accountancy, equipping students for careers in finance and entrepreneurship.
          </p>
        </div>
        {/* Add more academic programs as needed */}
      </div>
    </section>
  );
};

export default Academics;
