import React from 'react'
import BasicLayout from '../Layouts/BasicLayout'
import '../Components/CSS/singlepage.css'
import one from '../photos/1photo.png'
import Sidebar from './Sidebar'


const SingleBlog = () => {
  return (

<>



    <div className="container">
  
    <div className='single_page'>
   

    <div className="blogpost">
  

    <h2>
    My Top 5 Movies of All Times
    </h2>
    <span className="short_dis">
    Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading
    </span>

    <div className="blogphoto">


     <img src={one} alt='photo'/>
    
    </div>


    
    </div>

    <Sidebar/>
    </div>
    
    </div>

    </>
  )
}

export default SingleBlog