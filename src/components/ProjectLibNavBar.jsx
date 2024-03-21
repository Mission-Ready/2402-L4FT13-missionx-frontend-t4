/** @format */

import React from "react";
import styles from "./components/ProjectLibNavBar.module.css";
import logo from "../assets/NavBar/LevelUpWorks-blue.png";


export default function ProjectLibNavBar() {
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
};