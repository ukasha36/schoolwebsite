import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Services = () => {
  return (
    <>
      <div className="main-service" id='service'>
        <div className="services-info">
          <h2>OUR VISION & MISSION</h2>
          <p>
          Empowering students with quality education, fostering innovation, and nurturing lifelong learning.
          
          </p>
         
        </div>
        </div>
        <div className="services-types">
        <div className="services-1">
        <div className="services-types-1" data-aos="flip-right">
            <i class="fa-solid fa-chart-line"></i>
            <h4>Our Vision</h4>
            <p>
            envisions quality education as the key resource for national development, delivered to a cross section of our society through sustainable projects.
            </p>
          </div>
          <div className="services-types-2" data-aos="flip-right">
          <i class="fa-solid fa-code"></i>
            <h4>Academic Excellence</h4>
            <p>
            We provide a rigorous curriculum designed to challenge students and foster a deep understanding of essential concepts.
            </p>
          </div>
          <div className="services-types-3" data-aos="flip-right">
          <i class="fa-solid fa-layer-group"></i>
            <h4>Innovative Learning</h4>
            <p>
            Our teaching methods integrate the latest technology to enhance the learning experience and prepare students for the future.
            </p>
          </div>
    
        </div>

        {/* Services -- 2 */}

        <div className="services-2">
          <div className="services-types2-1" data-aos="flip-right">
            <i class="fa-solid fa-chart-line"></i>
            <h4>Holistic Development</h4>
            <p>
            We focus on the all-around development of students, including emotional, social, and physical well-being.
            </p>
          </div>
          <div className="services-types2-2" data-aos="flip-right">
          <i class="fa-solid fa-code"></i>
            <h4>Global Citizenship</h4>
            <p>
            We prepare students to be responsible global citizens, fostering an understanding of and respect for diverse cultures and perspectives.
            </p>
          </div>
          <div className="services-types2-3" data-aos="flip-right" >
          <i class="fa-solid fa-layer-group"></i>
            <h4>Innovation and Creativity</h4>
            <p>
            We encourage innovation and creativity, providing an environment where students can explore new ideas and develop critical thinking skills.
            </p>
          </div>
    
        </div>
        </div>
    </>
  );
};

export default Services;
