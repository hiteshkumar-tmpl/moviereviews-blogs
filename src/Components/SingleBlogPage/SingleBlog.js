import React from "react";
import "../SingleBlogPage/singlepage.css";
import { Link, useParams } from "react-router-dom";
const SingleBlog = () => {
  const { id } = useParams();

  return (
    <>
      <div className="single_blog_container">
        <div className="single_blog_mainblog">
          <div className="aboveimage">
            <div className="singledateandtime">
              <ul>
                <li>Admin</li>
                <li>29 Jan 2023</li>
                <li>1 Min Read</li>
              </ul>
            </div>

            <div className="blogtitle">
              <h3>My Top 5 Movies of All Times</h3>
            </div>

            <div className="shortdesc">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading.
            </div>
          </div>

          <div className="blogimage">
            <img
              src="https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_733,h_733,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg"
              alt=""
            />
          </div>
          <div className="blogcontent">
            Welcome to your blog post. Use this space to connect with your
            readers and potential customers in a way that’s current and
            interesting. Think of it as an ongoing conversation where you can
            share updates about business, trends, news, and more.
            <span class="blank"></span>
            <div className="contentbox">
              <p>
                Do you have a design in mind for your blog? Whether you prefer a
                trendy postcard look or you’re going for a more editorial style
                blog - there’s a stunning layout for everyone.
              </p>
            </div>
            <span className="blank"></span>
            <p>
              You’ll be posting loads of engaging content, so be sure to keep
              your blog organized with Categories that also allow visitors to
              explore more of what interests them.
            </p>
            <span className="blank"> </span>
            <h6>Create Relevant Content</h6>
            <span className="blank"> </span>
            <p>
              Writing a blog is a great way to position yourself as an authority
              in your field and captivate your readers’ attention. Do you want
              to improve your site’s SEO ranking? Consider topics that focus on
              relevant keywords and relate back to your website or business. You
              can also add hashtags (#vacation #dream #summer) throughout your
              posts to reach more people, and help visitors search for relevant
              content.
            </p>
            <span className="blank"> </span>
            <p>
              Blogging gives your site a voice, so let your business’
              personality shine through. Choose a great image to feature in your
              post or add a video for extra engagement. Are you ready to get
              started? Simply create a new post now.
            </p>
          </div>
        </div>

        <div className="sidebar">
          <div className="aboutme">About Me</div>

          <hr />

          <div className="photo">
            <img
              src="https://static.wixstatic.com/media/e1bade_c9f7464c4b3f47328e7c4f26dbe60e77~mv2.jpg/v1/crop/x_599,y_1860,w_2402,h_3120/fill/w_250,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/About.jpg"
              alt=""
            />
          </div>

          <div className="shortdescs">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
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

            <Link href="#">
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
    </>
  );
};

export default SingleBlog;
