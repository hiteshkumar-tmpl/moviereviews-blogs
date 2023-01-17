import React from 'react'
import aphoto from '../photos/authorphoto.png'
const Sidebar = () => {
  return (
 <div className="sidebar_container">
    <div className="sidebar">
    <span className='sidebar_title '><h3>About Me</h3></span>
    <br />
    <img className='sidephoto' src={aphoto} alt='Author Photo'/>
    
    <div className="shortdis">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum odio id minima veritatis voluptas. Error libero laborum fugiat fugit tempore doloremque necessitatibus eligendi aperiam, cum magni eum quisquam repellendus temporibus?
    </div>


    </div>
 
 
 
 </div>
  )
}

export default Sidebar