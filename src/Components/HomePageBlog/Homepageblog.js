import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "../HomePageBlog/Homepageblog.css";
import moment from "moment/moment";
import { RiseLoader } from "react-spinners";
const Homepageblog = () => {
  /* useEffect(() => {
    /* API
    try {
      /*inside try
    } catch (error) {}

    setposts(data);
  }, []);
  const [posts, setposts] = useState([]);*/
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://onmyscreen.onrender.com/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs);
        setLoading(false);
      });
  }, []);
  console.log(blogs, "hiiii-b");
  /*const posts = [
    {
      id: 1,
      title: "My Top 5 Movies of All Times 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_838,h_838,fp_0.50_0.50,q_90,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg",
    },

    {
      id: 2,
      title: "5 Top True Crime Shows Ever 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
    },

    {
      id: 3,
      title: "This Thriller Is Not for Everyone 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg/v1/fill/w_838,h_838,fp_0.50_0.50,q_90,enc_auto/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg",
    },

    {
      id: 4,
      title: "This Is the Best Doco You’ll See This Year 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg/v1/fill/w_838,h_1098,fp_0.50_0.50,q_90,enc_auto/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg",
    },
    {
      id: 5,
      title: "My Top 5 Movies of All Times 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
    },

    {
      id: 6,
      title: "5 Top True Crime Shows Ever 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
    },

    {
      id: 7,
      title: "This Thriller Is Not for Everyone 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg/v1/fill/w_838,h_1098,fp_0.50_0.50,q_90,enc_auto/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg",
    },
    {
      id: 8,
      title: "My Top 5 Movies of All Times 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_838,h_838,fp_0.50_0.50,q_90,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg",
    },
    {
      id: 9,
      title: "5 Top True Crime Shows Ever 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
    },

    {
      id: 10,
      title: "5 Top True Crime Shows Ever 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
    },

    {
      id: 11,
      title: "This Thriller Is Not for Everyone 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg/v1/fill/w_838,h_838,fp_0.50_0.50,q_90,enc_auto/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg",
    },

    {
      id: 12,
      title: "This Is the Best Doco You’ll See This Year 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg/v1/fill/w_838,h_1098,fp_0.50_0.50,q_90,enc_auto/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg",
    },
    {
      id: 13,
      title: "My Top 5 Movies of All Times 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
    },
  ];*/
  return (
    <div className="mainbody">
      <div class="containerblog">
        {loading ? (
          <div>
            <RiseLoader color="#ff0909" />
          </div>
        ) : blogs && blogs.length > 0 ? (
          blogs.map((posts) => (
            <div className="post" key={posts.id}>
              <div className="home_page_blog_image">
                <img src={posts.bannerImgLink} alt="" />
              </div>
              <div className="hpdateandtime">
                <ul>
                  <p>{moment(posts.uploadTime).format("MMM Do YY")}</p>
                  <li>{posts.readTime}</li>
                </ul>
              </div>
              <div className="Titlebox">
                <h2>
                  <Link to={`/blog/${posts.id}`}> {posts.title} </Link>
                </h2>
                <p>
                  <Link to={`/blog/${posts.id}`}>
                    {" "}
                    {posts.shortDescription}
                  </Link>
                </p>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Homepageblog;
