/** @format */

import styles from "./ProjectNavBar.module.css";
import { Link } from "react-router-dom";

export default function ProjectNavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftNavBar}></div>
        <div className={styles.centerNavbar}>
          <p className={styles.homeBtn}>
            <Link to="./pages/Home/Home">HOME</Link>
          </p>
          <p className={styles.projectsBtn}>PROJECTS</p>
          <p className={styles.teachersBtn}>TEACHERS</p>
        </div>
        <div className={styles.rightNavbar}>
          <p className={styles.user}></p>
          <p className={styles.logInFeatures}>
            <Link to="./pages/Login/Login">LOGIN</Link>
          </p>
          <p className={styles.langBtn}>LANG</p>
          <p className={styles.kiwiFlag}></p>
          <p className={styles.maoriFlag}></p>
        </div>
      </div>
    </>
  );
}
