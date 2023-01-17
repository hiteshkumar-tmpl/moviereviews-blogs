import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/CSS/Navbar.css'
import {BsSearch} from 'react-icons/bs'

// const ref = useRef(null);

// const handleClick = () => {
//   ref.current?.scrollIntoView({behavior: 'smooth'});
// };

const Navbar = () => {
  return (
    <div>
    
  <nav>
  
    <div className="icon">
    <NavLink
      exact
      to="/"
      className= " inactive"
       style={{color: 'white',fontSize:'24px'}}>
       ONMYSCREEN
       </NavLink>
    
    
    </div>
   
      <div className="searchbox">
      <input type="search" name="search" id="searchbar" placeholder='Search...'     />
      <button className='button'><BsSearch/></button>
      </div>

      <div className="navlink">
      
     
      <ol>

      <li> <NavLink
      exact
      to="/"
      className={({ isActive }) => (isActive ? "active" : "inactive")}
       >
      My Blog
       </NavLink></li>

      <li>  <NavLink
      exact
      to="/about"
      className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
      About
       </NavLink></li>


      <li>   
      
      <NavLink
      exact
      to="/contact"
      className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
      Contact
       </NavLink>
       
       </li>
   
      </ol>
      </div>
   

  </nav>
    </div>
   
  )
}

export default Navbar;