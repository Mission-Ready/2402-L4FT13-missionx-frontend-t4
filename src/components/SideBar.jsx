/** @format */
import React, { useState } from "react";
import styles from "../components/SideBar.module.css"


function SideBar() {
  const [isActive, setIsActive] = useState(false);
  const toggleSideBar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <ul>
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </div>
      <button onClick={toggleSideBar}>toggle</button>
    </>
  );
}

export default SideBar;
