import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import DropdownGallery from "./DropdownGallery";
import { links } from "../data";
import Logo from "../images/logo.gym.png";
import DropdownTrainers from "./DropdownTrainers";
const Navbar = () => {
  // Set State for Navbar in Medium and Small Screen
  const [isNavShowing, setIsNavShowing] = useState(false);
  //
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav>
        <div className="container nav__container">
          <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="Nav Logo" />
          </Link>
          <ul
            className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
          >
            {links.map(({ name, path, icon }, index) => {
              if (name === "Câu Lạc Bộ") {
                return (
                  <li
                    key={index}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "active-nav" : ""
                      }
                      onClick={() => setIsNavShowing((prev) => !prev)}
                    >
                      {name}
                    </NavLink>
                    {dropdown && <DropdownGallery />}
                    {icon}
                  </li>
                );
              }
              {
                /* if (name === "Huấn Luyện Viên") {
                return (
                  <li
                    key={index}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "active-nav" : ""
                      }
                      onClick={() => setIsNavShowing((prev) => !prev)}
                    >
                      {name}
                    </NavLink>
                    {dropdown && <DropdownTrainers />}
                    {icon}
                  </li>
                );
              } */
              }
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active-nav" : "")}
                    onClick={() => setIsNavShowing((prev) => !prev)}
                  >
                    {name}
                  </NavLink>
                  {icon}
                </li>
              );
            })}
          </ul>
          <button
            className="nav__toggle-btn"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
