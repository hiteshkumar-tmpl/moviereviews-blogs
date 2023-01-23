import React from "react";
import "../Footer/ConForm.css";

const ConForm = () => {
  return (
    <div className="main">
      <div className="footer_container">
        <div className="banner">
          <h2>
            HAVE I MISSED <br /> ANYTHING GOOD <br />
            LATELY <br />
            LET ME KNOW
          </h2>
        </div>
        <div className="mainform">
          <form action="" class="form">
            <div className="firstrow">
              <div className="firstname">
                <label for="fname">First Name</label>

                <input type="text" id="fname" name="firstname" />
              </div>
              <div className="lastname">
                <label for="lname">Last Name</label>

                <input type="text" id="lname" name="lastname" />
              </div>
            </div>

          

            <div className="emailbar">
              <label for="email">Email</label>
              <input type="email" id="email" required />
            </div>

            <div className="messagebox">
              <label for="message">Leave us a messaage...</label>
              
              <textarea name="message" id="message"></textarea>
            </div>

            <div className="formsubmitbutton">
              <button> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConForm;
