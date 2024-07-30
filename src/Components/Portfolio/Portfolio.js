import React from 'react';
import './Portfolio.css';
import Logo from "./logo.jpg";
import art from "./art.webp";
import branding from "./branding.webp";
import productdesign from "./productdesign.webp";
import webdev from "./webdev.png";
import webdesign from "./webdesign.webp";

const Portfolio = () => {
  return (
    <section id="portfolio" className="main-portfolio">
      <h2 className="portfolio-heading">Our Portfolios</h2>
      <div className="portfolio-details">
        <div className="portfolio-item">
          <img src={Logo} alt="Portfolio Item 1" />
          <h3>Logo</h3>
        </div>
        <div className="portfolio-item">
          <img src={webdev} alt="Portfolio Item 2" />
          <h3>Website Development</h3>
        </div>
        <div className="portfolio-item">
          <img src={branding} alt="Portfolio Item 3" />
          <h3>Branding</h3>
        </div>
        <div className="portfolio-item">
          <img src={productdesign} alt="Portfolio Item 4" />
          <h3>Product Design</h3>
        </div>
        <div className="portfolio-item">
          <img src={art} alt="Portfolio Item 5" />
          <h3>Characters</h3>
        </div>
        <div className="portfolio-item">
          <img src={webdesign} alt="Portfolio Item 6" />
          <h3>UI & UX Design</h3>
        </div>
        {/* Add more portfolio items as needed */}
      </div>
    </section>
  );
}

export default Portfolio;
