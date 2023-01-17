import React from 'react'
import Contact from './Contact'
import '../Components/CSS/Footer.css'
 import ConForm from './ConForm'
const Footer = () => {
  return (
    <div className="footer">
    <ConForm/>
    <div className='footer_line'>
    <span>© 2023 by On My Screen. Powered and secured by <a href="https://tunicalabsmedia.com/ " target="blank">Tunica Labs</a>
    </span>
   
    </div>
    </div>
   
    
  )
}

export default Footer