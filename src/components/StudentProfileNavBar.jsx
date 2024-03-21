/** @format */

import React from "react";
import styles from "./NavBar.module.css";
import logo from "../assets/NavBar/LevelUpWorks-blue.png";


function NavBar() {
  return (
    <>
      <div className={styles.NavBar}>
        <img src={logo} alt="logo" />
        <div>
          <div>
            <p>{props.projectTitle}</p>
            <p>{props.subTitle}</p>
          </div>
          <div>{props.dotMap}</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
