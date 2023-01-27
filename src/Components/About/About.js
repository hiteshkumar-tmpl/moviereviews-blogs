import React, { useState, useEffect } from "react";
import "../About/About.css";
const About = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://onmyscreen.onrender.com/blogs/about")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data.about);
      });
  }, []);
  console.log(about, "Hello");
  return (
    <div>
      <div className="about_main_container">
        {loading ? (
          <div>...Loading</div>
        ) : (
          about.map((aboutdata) => (
            <div className="post" key={aboutdata.id}>
              <span className="aboutme_heading">ABOUT ME</span>
              <hr />
              <div className="aboutme_data">
                <div className="photoside">
                  <div className="authorphoto">
                    <img src={aboutdata.profileImageLink} alt="Author"></img>
                  </div>
                </div>
                <div className="authordiscrption">
                  <div className="authordiscrption_title">
                    <h2>{aboutdata.name}</h2>
                  </div>

                  <div className="authortagline">
                    <p>{aboutdata.shortDescription}</p>
                  </div>
                  <div className="maindiscrption">
                    <p>{aboutdata.detailedDescription}</p>

                    <p>{aboutdata.detailedDescription1}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
