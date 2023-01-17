import React from 'react'
import '../Components/CSS/Feedbackform.css'
const Feedbackform = () => {
  return (
    <div className='container'>
    <div className="form">
    <div className="banner">
    <h2>
     HAVE I MISSED <br /> GOOD LATELY <br />LET ME KNOW
                </h2>
         
    
    </div>
    <div className="mainform">
    <form action="" class="form">



                    <label for="fname">First Name</label>

                    <input type="text" id="fname" name="firstname"/>


                    <label for="lname">Last Name</label>

                    <input type="text" id="lname" name="lastname"/>



                    <br/>
                    <label for="email">Email</label>
                    <input type="email" id="email" required/>
                    <br/>
                    <br/>
                    <label for="message">Leave us a messaage...</label><br/>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <button >  Submit</button>
                </form>
    
    </div>
    </div>
    
    </div>
  )
}

export default Feedbackform