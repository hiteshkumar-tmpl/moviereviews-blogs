import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { BsSearch } from "react-icons/bs";
import logo from "../Navbar/onmyscreen.png";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const handleClick = () => {
    setShowIcon(!showIcon);
  };
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const response = await axios.get(
          `https://onmyscreen.onrender.com/blogs`
        );
        const data = response.data;
        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (search) {
      getSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
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
                value={search}
                onChange={handleChange}
                placeholder="Search..."
              />
              <button className="button">
                <BsSearch onClick={() => console.log("search")} />
              </button>
            </div>
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((suggestion) => (
                  <li key={suggestion}>{suggestion}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={showIcon ? "navlink nav-active" : "navlink"}>
            <ol>
              <li>
                {" "}
                <NavLink
                  exact
                  to="/"
                  onClick={handleClick}
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
                  onClick={handleClick}
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
                  onClick={handleClick}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ol>
          </div>
          <div className="hamburger">
            <button
              style={{
                border: "none",
                background: "none",
                outline: "none",
                cursor: "pointer",
              }}
              onClick={() => setShowIcon(!showIcon)}
            >
              {showIcon ? (
                <RxCross2 className="cross" />
              ) : (
                <FiAlignJustify className="bar" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div className="searchcontainer2">
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
      </div>
    </div>
  );
};

export default Navbar;
