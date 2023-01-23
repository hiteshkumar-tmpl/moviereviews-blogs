import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { BsSearch } from "react-icons/bs";
import logo from "../Navbar/onmyscreen.png";

const Navbar = () => {
  /*
  const [value, setValue] = useState([""]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // API to fetch the search result
    console.log("search", searchTerm);
  };*/

  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="icon">
            <NavLink exact to="/" className=" inactive">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="searchcontainer">
            <div className="searchbox">
              <input
                type="search"
                name="search"
                id="searchbar"
                placeholder="Search..."
              />
              <button className="button">
                <BsSearch />
              </button>
            </div>

            <div className="dropdown"></div>
          </div>
          <div className="navlink">
            <ol>
              <li>
                {" "}
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  My Blog
                </NavLink>
              </li>

              <li>
                {" "}
                <NavLink
                  exact
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
