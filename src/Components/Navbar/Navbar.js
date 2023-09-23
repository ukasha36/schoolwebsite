import React from 'react'
import { useState } from 'react'
 

export  const Navbar = () => {
          const [shownavbar, setshownavbar] = useState(false)
  return (
   <>
    <div className='main-nav'>
    <div className='logo'>
     <h4>Innovative Tech</h4>
    </div>
    <div  className={shownavbar ? " mobile-menu-link" : "menu-links " }>
    <ul>
     <li><a href=' '>Home</a></li> 
      <li><a href=' '>About</a></li>
      <li><a href=''>Services</a></li>
      <li><a href=''>Team</a></li>
      <li><a href=''>Contact</a></li>
    </ul>
    </div>
    <div>
    <i class="fa-solid fa-bars icon"  onClick={() => setshownavbar(!shownavbar)}  > </i>
    </div>
    </div>
 
   </>
  )
}
 