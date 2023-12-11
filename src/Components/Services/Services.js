import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Services = () => {
  return (
    <>
      <div className="main-service">
        <div className="services-info">
          <h4>OUR SERVICES</h4>
          <h2>
            We Provide Awesome <span>Service</span>
          </h2>
          <p>
            We aim to deliver top-notch software solutions and support that meet
            each client's unique needs and foster long-term success in the
            digital world.
          </p>
        </div>
        </div>
        <div className="services-types">
        <div className="services-1">
        <div className="services-types-1" data-aos="flip-right">
            <i class="fa-solid fa-chart-line"></i>
            <h4>Marketing Strategy</h4>
            <p>
            We craft data-driven marketing strategies to drive growth and brand success in the digital landscape.
            </p>
          </div>
          <div className="services-types-2" data-aos="flip-right">
          <i class="fa-solid fa-code"></i>
            <h4>Web Development</h4>
            <p>
            Crafting responsive and dynamic
            websites tailored to your goals.
            </p>
          </div>
          <div className="services-types-3" data-aos="flip-right">
          <i class="fa-solid fa-layer-group"></i>
            <h4>UI & UX Design</h4>
            <p>
            We craft data-driven marketing strategies to drive growth and brand success in the digital landscape.
            </p>
          </div>
    
        </div>

        {/* Services -- 2 */}

        <div className="services-2">
          <div className="services-types2-1" data-aos="flip-right">
            <i class="fa-solid fa-chart-line"></i>
            <h4>Graphic Design</h4>
            <p>
              Transforming concepts into captivating
              visuals through expert graphic design.
            </p>
          </div>
          <div className="services-types2-2" data-aos="flip-right">
          <i class="fa-solid fa-code"></i>
            <h4>Bugs & Error Fixing</h4>
            <p>
            We swiftly identify and resolve software issues, optimizing your digital experience
            </p>
          </div>
          <div className="services-types2-3" data-aos="flip-right" >
          <i class="fa-solid fa-layer-group"></i>
            <h4>Content Writing </h4>
            <p>
            We create engaging, tailored content to boost your brand's visibility and credibility
            </p>
          </div>
    
        </div>
        </div>
    </>
  );
};

export default Services;
