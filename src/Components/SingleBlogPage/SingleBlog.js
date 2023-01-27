import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "../SingleBlogPage/singlepage.css";
import { Link } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(id, "hiii");
  useEffect(() => {
    apiData();
    //    eslint-disable-next-line
  }, []);
  const apiData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://onmyscreen.onrender.com/blogs/getOne/${id}`
      );
      console.log(res, "res");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log(data, "hklllll");
  return (
    <>
      {loading ? (
        <div className="loader">
          <RiseLoader color="#ff0909" />
        </div>
      ) : data ? (
        <div className="single_blog_container">
          <div className="single_blog_mainblog">
            <div className="aboveimage" key={data.id}>
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
              <div className="shortdesc">{data.shortDescription}</div>{" "}
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
          </div>

          <div className="sidebar">
            <div className="aboutme">About Me</div>
            <hr />
            <div className="photo">
              <img src={" "} alt="" />
            </div>
            <div className="shortdescs">
              <p> Hi</p>
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
              <button>Movie</button> <button>Review</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SingleBlog;
