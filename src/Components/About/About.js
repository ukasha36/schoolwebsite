import React from "react";
import logo from "./p5.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  return (
    <>
      <div className="main-about">
        <div className="about-details">
       <div className="about-pic" >
            <img src={logo} alt="logo" />
          </div>
          <div className="about-info">
            <h4>ABOUT US</h4>
            <h2>
              We Deal With Aspects <br />
              Creative <span>IT Services </span>
            </h2>
            <p>
              Join us on a journey of innovation, efficiency, and growth as we
              transform your software aspirations into reality.
            </p>
            <div className="about-progress">
            <div className="web-dev" data-aos="fade-right">
              <h3>Web Development</h3>
              <div className="about-per">
                <div className="wb"></div>
              </div>
              </div>
              <div className="graphic" data-aos="fade-right">
              <h3>Graphic Design</h3>
              <div className="about-per">
                <div className="gd"></div>
              </div>
              </div>
              <div className="marketing" data-aos="fade-right">
              <h3>Digital Marketing</h3>
              <div className="about-per">
                <div className="mk"></div>
              </div>
              </div>
              <div className="content" data-aos="fade-right">
              <h3>Content Writing</h3>
              <div className="about-per">
                <div className="cw"></div>
              </div>
              </div>
              <div className="web-design" data-aos="fade-right">
              <h3>Web Design</h3>
              <div className="about-per">
                <div className="wd"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
