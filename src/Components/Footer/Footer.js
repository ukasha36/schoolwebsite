import React from 'react'

 const Footer = () => {
  return (
    <>
        <div className='main-footer'>
        <footer className='footer-div'>
        <div class="footer-about">
        <h2>About </h2>
        <p>
          Join us on a journey of innovation, efficiency, and growth as we transform your software aspirations into
          reality.</p>
          <h4> Follow Us </h4>
        <div className='social'>
         
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
          
        </div>
      </div>
      <div class="footer-pages">

      
          <h2>Quick Links</h2>
          <ul className='pages-ul'>
          <li><a href="">Services</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Clients</a></li>
          <li><a href="">Features</a></li>
        </ul>
      </div>
      <div class="footer-resources">
      <h2>Resources</h2>
        <ul class="resources-ul">
          <li> 24/7 Support</li>
          <li>Maintenance</li>
          <li>Fix Bugs &amp; Errors</li>
          <li>Free Consultation</li>
        </ul>
      </div>
      <div class="footer-contact">
        <div className='heading'>
          <h2>Contact Info</h2>
        </div>
        <div className='info'>

          <div className='location'>
            <div className='footer-icon'><i class="fa-solid fa-map-location-dot"></i></div>
            
          <div className='title'>
        <h2>Location</h2>
        <p>55 Main Street, New York.</p>
      </div>
      </div>

          <div className='email-2'>
            <div className='footer-icon'><i class="fa-solid fa-envelope-circle-check"></i></div>
          <div className='title'>
        <h2>
Email Us</h2>
        <p>example@gmail.com</p>
      </div>
      </div>

          <div className='phone'>
            <div className='footer-icon'><i class="fa-solid fa-phone"></i></div>
          <div className='title'>
        <h2>
Phone Us</h2>
        <p>+012 (345) 678 99</p>
      </div>
      </div>
        </div>
    
   
      </div>
        </footer>
        </div>
    </>
  )
}
export default Footer;