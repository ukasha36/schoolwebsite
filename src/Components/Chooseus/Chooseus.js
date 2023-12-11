import React from 'react'
import logo from "./about-img-new.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Chooseus = () => {
  return (
   <>
    <div className="main-choose">
    <div className="choose-details">
    <div className="choose-pic" data-aos="fade-right">
    <img src={logo} alt="logo" />
          </div>
          <div className="choose-info" data-aos="fade-left">
            <h4>WHY CHOOSE US</h4>
            <h2>
              We Deal With Aspects <br />
              Professional  <span>IT Services </span>
            </h2>
            <p>
              Join us on a journey of innovation, efficiency, and growth as we
              transform your software aspirations into reality.
            </p>
            <div className='icon-1'>
            <i class="fa-brands fa-google-play"></i>
            <div className='digi'>
            <h4>Digital Experience</h4>
            <p>Our firm is expert to create an efficient user interface that makes user interaction is lively.</p>
            </div>
            </div>
            <div className='icon-2'>
            <i class="fa-solid fa-tags"></i>
            <div className='plan'>
            <h4>Business Planning</h4>
            <p>Develop a strategic business plan for sustained software company growth and profitability.</p>
            </div>
            </div>
            <div className='icon-3'>
            <i class="fa-solid fa-chart-line"></i>
            <div className='stra'>
            <h4>Branding Strategy</h4>
            <p>Develop a client-centric branding strategy to enhance brand recognition, and  strong customer relationships</p>
            </div>
            </div>
            </div>
    
            </div>
            </div>
   </>
  )
}
export  default Chooseus;