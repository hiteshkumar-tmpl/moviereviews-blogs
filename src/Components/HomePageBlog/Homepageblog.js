import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../HomePageBlog/Homepageblog.css";
const Homepageblog = () => {
  useEffect(() => {
    /* API*/
    try {
      /*inside try*/
    } catch (error) {}

    setposts(data);
  }, []);
  const [posts, setposts] = useState([]);
  const data = [
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

    {
      id: 14,
      title: "5 Top True Crime Shows Ever 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
    },

    {
      id: 15,
      title: "This Thriller Is Not for Everyone 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg/v1/fill/w_838,h_1098,fp_0.50_0.50,q_90,enc_auto/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg",
    },
    {
      id: 16,
      title: "My Top 5 Movies of All Times 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!",
      img: "https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_838,h_838,fp_0.50_0.50,q_90,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg",
    },
  ];

  return (
    <div className="mainbody">
      <div class="containerblog">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="home_page_blog_image">
              <img src={post.img} alt="" />
            </div>
            <div className="hpdateandtime">
              <ul>
                <p>Nov 29, 2022</p>
                <li>1 Min</li>
              </ul>
            </div>
            <div className="Titlebox">
              <h2>
                <Link to={`/blog/${post.id}`}> {post.title} </Link>
              </h2>
              <p>
                <Link to={`/blog/${post.id}`}> {post.desc}</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepageblog;
