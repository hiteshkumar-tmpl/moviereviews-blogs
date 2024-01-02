import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
  const [userData, setUserdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch(
        `https://onmyscreen-backend.onrender.com/blogs/search?q=${query}`
      );
      const resData = await reqData.json();
      console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);
    };
    getUserdata();
  }, [query]);

  useEffect(() => {
    if (query) {
      const filtered = userData.filter((data) =>
        data.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilterdata(filtered);
      setSuggestions(filtered.slice(0, 4));
    } else {
      setFilterdata(userData);
      setSuggestions([]);
    }
  }, [query, userData]);

  // const handlesearch = (event) => {
  //   const getSearch = event.target.value;

  //   console.log(getSearch);

  //   if (getSearch.length > 0) {
  //     const searchdata = userData.filter((item) =>
  //       item.title.toUpperCase.includes(getSearch)
  //     );
  //     setUserdata(searchdata);
  //   } else {
  //     setUserdata(filterdata);
  //   }
  //   setQuery(getSearch);
  // };
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
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="button">
                <BsSearch />
              </button>

              {suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.title}
                      // onClick={() => setQuery(" ")}
                      className="suggestion"
                    >
                      <img src={suggestion.bannerImgLink} alt={" "} />
                      <div className="suggestion-title">
                        <Link
                          to={`/blog/${suggestion.id}`}
                          onClick={() => setQuery("")}
                        >
                          {" "}
                          {suggestion.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="button">
            <BsSearch />
          </button>
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.title}
                  //   onClick={() => setQuery(suggestion.title)}
                  className="suggestion"
                >
                  <img src={suggestion.bannerImgLink} alt={suggestion.title} />
                  <div className="suggestion-title">
                    <Link
                      to={`/blog/${suggestion.id}`}
                      onClick={() => setQuery("")}
                    >
                      {" "}
                      {suggestion.title}{" "}
                    </Link>
                  </div>{" "}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
