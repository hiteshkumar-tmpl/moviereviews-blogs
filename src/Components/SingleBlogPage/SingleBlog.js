import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "../SingleBlogPage/singlepage.css";
import { Link } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiData();
    // eslint - disable - next - line;
  }, [id]);

  const apiData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://onmyscreen-backend.onrender.com/blogs/getOne/${id}`
      );
      console.log(res, "res");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    console.log(data);
    const href = window.location.href;
    console.log(href);
  };
  return (
    <>
      {loading ? (
        <div className="loader">
          <RiseLoader color="#ff0909" />
        </div>
      ) : data ? (
        <div className="single_blog_container" key={data.id}>
          <div className="single_blog_mainblog">
            <div className="aboveimage">
              <div className="singledateandtime">
                <ul>
                  <li>Admin</li>
                  <li>{moment(data.uploadTime).format("MMM Do YY")}</li>
                  <li>{data.readTime}</li>
                </ul>
              </div>
              <div className="blogtitle">
                <h3>{data.title}</h3>
              </div>
              <div className="shortdesc">{data?.shortDescription}</div>{" "}
            </div>
            <div className="blogimage">
              <img src={data.bannerImgLink} alt="" />
            </div>
            <div className="blogcontent">
              {data.fullDescription}
              <span class="blank"></span>
              <div className="contentbox">
                <p>{data.fact}</p>
              </div>
              <span className="blank"></span>
              <p>
                You’ll be posting loads of engaging content, so be sure to keep
                your blog organized with Categories that also allow visitors to
                explore more of what interests them.
              </p>
              <span className="blank"> </span>
              <h6>{data.title1}</h6>
              <span className="blank"> </span>
              <p>{data.fullDescription1}</p>
              <span className="blank"> </span>
              <p>{data.fullDescription2}</p>
            </div>
            <div className="blogtags">
              {data.tags
                ?.slice(0, 21)
                ?.split(", ")
                ?.map((tag, index) => (
                  <button key={index}>{tag}</button>
                ))}{" "}
            </div>
            <hr className="blogending" />
            <div className="socialmedialinks">
              <span className="facebook">
                <Link to="/facebook">
                  <BsFacebook />
                </Link>
              </span>
              <span className="twitter">
                {" "}
                <Link to="https://twitter.com/intent/tweet?text=">
                  <FiTwitter />
                </Link>
              </span>
              <span className="linkedin">
                {" "}
                <Link to="/linkedin">
                  <BsLinkedin />
                </Link>
              </span>
            </div>
            <div className="postsuggestion">
              <div className="reacentpost_seeall">
                <div className="reacent_posts">
                  <Link to="/">Recent Posts</Link>
                </div>
                <div className="see_all">
                  <Link to="/">See All</Link>
                </div>
              </div>
              <div className="cards">
                <div className="card1">
                  <img
                    src="https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_733,h_733,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg"
                    alt="Blog"
                  />
                  <p className="card_title">
                    <Link to="/"> My Top 5 Movies of All Times</Link>
                  </p>
                </div>
                <div className="card2">
                  <img
                    src="https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_733,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg"
                    alt="Blog"
                  />
                  <p className="card_title">
                    <Link to="/">
                      {" "}
                      New Movies to Stream from Home This Week
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="aboutme">About Me</div>
            <hr />
            <div className="photo">
              <img src={data?.author?.profileImageLink} alt="" />
            </div>
            <div className="shortdescs">
              <p>{data?.author?.sideBarDescription}</p>
            </div>

            <div className="readmorebutton">
              <Link to="/about">
                {" "}
                <button>Read More</button>
              </Link>
            </div>
            <hr />
            <div className="postsarchive">
              <h3 class="pa">Post Archive</h3>
              <hr />
              <Link to="#">
                <button>November 2022 (9)</button>
              </Link>
              <hr />
            </div>
            <div className="tags">
              <b>Tags</b>
            </div>
            <hr />
            <div className="tagsbutton">
              {data.tags
                ?.slice(0, 21)
                ?.split(", ")
                ?.map((tag, index) => (
                  <button key={index}>{tag}</button>
                ))}{" "}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default SingleBlog;
