import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route components
 
import './Components/Banner/Banner.css';
import './Components/Services/Services.css';
import './Components/About/About.css';
import './Components/Clients/Client.css';
import './Components/Contact/Contact.css';
import './Components/Footer/Footer.css';
 
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
 
import Clients from './Components/Clients/Clients.js';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
 
import Blog from './Components/blog/Blog';
 

const App = () => {
  return (
    <Router> 
 
      <Banner/>
      
      <div >   <Services/></div>
      <div id='blogs'>  <Blog/></div>
      <div id='client'>   <Clients/></div>
      <div id='contact'>  <Contact/></div>

      <Routes>
    
      </Routes>
     
    </Router>
  );
}

export default App;
