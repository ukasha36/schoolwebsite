import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route components
import './Components/Navbar/style.css';
import './Components/Banner/Banner.css';
import './Components/Services/Services.css';
import './Components/About/About.css';
import './Components/Clients/Client.css';
import './Components/Contact/Contact.css';
import './Components/Footer/Footer.css';
import Navbar from './Components/Navbar/Navbar.js';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Clients from './Components/Clients/Clients.js';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio.js';
import Blog from './Components/blog/Blog';
import Testimonials from './Components/Testimonials/Testimonials.js';

const App = () => {
  return (
    <Router> {/* Wrap the app with Router */}
     <div>  <Navbar/></div>
      <Banner/>
      <div id='about'>  <About/></div>
      <div id='service'>   <Services/></div>
      <div id='blogs'>  <Blog/></div>
      <div id='client'>   <Clients/></div>
      <div id='portfolio'>  <Portfolio/></div>
      <div id='testimonial'>  <Testimonials/></div>
      <div id='contact'>  <Contact/></div>

      <Routes>
    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
