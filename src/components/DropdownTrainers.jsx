import React from "react";
import { useState } from "react";
import { trainerDropdown } from "../data";

import { Link } from "react-router-dom";
const DropdownTrainers = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "trainer__dropdown clicked" : "trainer__dropdown"}
        onClick={() => setDropdown(!dropdown)}
      >
        {trainerDropdown.map((item) => {
          return (
            <li key={item.index}>
              <Link
                className="dropdown__item"
                to={item.path}
                onClick={() => setDropdown(false)}
              ></Link>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownTrainers;
