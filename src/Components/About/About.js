import React, { useState, useEffect } from "react";
import "../About/About.css";
import { RiseLoader } from "react-spinners";
import { Link } from "react-router-dom";

const About = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://onmyscreen.onrender.com/blogs/about")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data);
        setLoading(false);
      });
  }, []);
  console.log(about);
  return (
    <div>
      <div className="about_main_container">
        {loading ? (
          <div className="loader">
            <RiseLoader color="#ff0909" />
          </div>
        ) : (
          <div className="post" key={about.id}>
            <span className="aboutme_heading">ABOUT ME</span>
            <hr />
            <div className="aboutme_data">
              <div className="photoside">
                <div className="authorphoto">
                  <img src={about.profileImageLink} alt="Author"></img>
                </div>
              </div>
              <div className="authordiscrption">
                <div className="authordiscrption_title">
                  <h2>{about.name}</h2>
                </div>

                <div className="authortagline">
                  <p>Relationship Status - Its Complicated</p>
                </div>
                <div className="maindiscrption">
                  <p>{about.detailedDescription}</p>

                  <p>{about.detailedDescription1}</p>

                  <div className="myblog_button">
                    <Link to="/">
                      <button>My Blog</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
