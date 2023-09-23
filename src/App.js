 import React from 'react'
 import './Components/Navbar/style.css'
 import './Components/Banner/Banner.css'
 import './Components/Services/Services.css'
 import './Components/About/About.css'
 import './Components/Clients/Client.css'
 import './Components/Team/Team.css'
 import './Components/Chooseus/Choose.css'
 import './Components/Contact/Contact.css'
 import './Components/Footer/Footer.css'
 import { Navbar } from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import About from './Components/About/About'
import Clients from './Components/Clients/Clients.js'
 import Team from './Components/Team/Team.js'
import Chooseus from './Components/Chooseus/Chooseus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Link } from "react-router-dom";

 
 const App = () => {
   return (
    <>
     <div>  <Navbar/></div>
     <div>  <Banner/></div>
     <div>  <Services/></div>
     <div>  <About/></div>
     <div>  <Clients/></div>
     <div>  <Team/></div>
    <div><Chooseus/></div>
    <div><Contact/></div>
    <div> <Footer/></div>

     
</>
   );
 }
 
 export default App;