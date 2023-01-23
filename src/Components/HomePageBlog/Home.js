import React from "react";
import "../HomePageBlog/Body.css";
import Homepageblog from "./Homepageblog";
const Home = () => {
  return (
    <div className="main_body">
      <h1>REVIEWS</h1>
      <section className="Blog">
        <Homepageblog />
      </section>
    </div>
  );
};

export default Home;
