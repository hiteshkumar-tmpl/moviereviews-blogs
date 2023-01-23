import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { BsSearch } from "react-icons/bs";
import logo from "../Navbar/onmyscreen.png";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const handleClick = () => {
    setShowIcon(!showIcon);
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
                id="searchbar"
                placeholder="Search..."
              />
              <button className="button">
                <BsSearch />
              </button>
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
