import React from 'react'
import '../Components/CSS/Body.css'
import { NavLink, Outlet } from 'react-router-dom'
import Homepageblog from './Homepageblog'
const Home = () => {
  return (
    <div className='main_body'>
    <h1>REVIEWS</h1>
 <section className='Blog'>
<Homepageblog/>
    </section>
    <br />
    <br />
    <br />

    <NavLink
    exact
    to="/singleblog"
    className= " inactive"
     style={{color: 'white',fontSize:'24px'}}>
     ONMYSCREEN
     </NavLink>
    <section>
    </section>
    
    <br />
    <br />
    <br />
    <section>
    </section>
    </div> 

  )
}

export default Home