import React, { useState } from "react";
import "../Footer/ConForm.css";
import axios from "axios";
const ConForm = () => {
  /* const submitHandler = (event) => {
    event.preventDefault();
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    axios.post("https://onmyscreen.onrender.com/blogs/feedback" {
        firstname,
        lastname,
        email,
        message,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }; */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reviews: "",
  });

  // console.log(formData);

  // const [anchor, setAnchor] = useState(false);

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
        alert("Form is Submitted");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  // useEffect(() => {
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     reviews: "",
  //   });
  // }, [anchor]);

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
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="lastName">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="emailbar">
              <label for="email">Email</label>
              <input
                type="email"
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
                required
                value={formData.reviews}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="formsubmitbutton">
              <button type="submit"> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConForm;
