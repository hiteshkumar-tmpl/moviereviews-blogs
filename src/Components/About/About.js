import React from "react";
import "../About/About.css";
import photo from "../About/authorabtpg.png";

const About = () => {
  return (
    <div>
      <div className="about_main_container">
        <span className="aboutme_heading">ABOUT ME</span>
        <hr />

        <div className="aboutme_data">
          <div className="photoside">
            <div className="authorphoto">
              <img src={photo} alt="Author"></img>
            </div>
          </div>
          <div className="authordiscrption">
            <div className="authordiscrption_title">
              <h2>Hi! I’m Jane</h2>
            </div>

            <div className="authortagline">
              <p>I am a movie blogger</p>
            </div>
            <div className="maindiscrption">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
              <p>
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
