import React from "react";
import { useState } from "react";
import { galleryDropdown } from "../data";
import "./dropdowngallery.css";
import { Link } from "react-router-dom";

const DropdownGallery = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "gallery__dropdown clicked" : "gallery__dropdown"}
        onClick={() => setDropdown(!dropdown)}
      >
        {galleryDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="dropdown__item"
                to={item.path}
                onClick={() => setDropdown(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownGallery;
