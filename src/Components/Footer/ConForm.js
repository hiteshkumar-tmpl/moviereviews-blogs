import React, { useState } from "react";
import "../Footer/ConForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConForm = () => {
  const showToastMessage = () => {
    toast.success("Form has Submitted ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reviews: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://onmyscreen.onrender.com/blogs/feedback", formData)
      .then((response) => {
        // setAnchor((prev) => !prev);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          reviews: "",
        });
        toast.success("Form Submitted :)", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          reviews: "",
        });
        // console.log(error);
        toast.error("Please Try Again :(", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  console.log(showToastMessage);
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
          <form onSubmit={handleSubmit} class="form">
            <div className="firstrow">
              <div className="firstName">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="lastName">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="emailbar">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="messagebox">
              <label for="reviews">Leave us a messaage...</label>
              <textarea
                name="reviews"
                id="reviews"
                value={formData.reviews}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="formsubmitbutton">
              <button type="submit"> Submit</button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConForm;
