/** @format */

import styles from "./ProjectNavBar.module.css";
import { Link } from "react-router-dom";
import nzFlag from "../assets/NavBar/NZFlag.png";
import maoriFlag from "../assets/NavBar/MaoriFlag.png";
import Logo from "../assets/NavBar/LevelUpWorks-white.png";
import User from "../assets/NavBar/Avatar-white.png";

export default function ProjectNavBar() {
  return (
    <>
      <div className={styles.mainContainer}>
        <img className={styles.logo} src={Logo} alt="logo-image" />
        <Link to="/"></Link>
        <nav className={styles.nav}>
          <Link to="/">
            <button className={styles.navBtn}>Home</button>
          </Link>
          <Link to="/features">
            <button className={styles.navBtn}>Features</button>
          </Link>
          <Link to="/teachers">
            <button className={styles.navBtn}>Teachers</button>
          </Link>
        </nav>
        <div className={styles.rightSide}>
          <div className={styles.flagContainer}>
            <p>LANG</p>
            <img className={styles.flag} src={nzFlag} alt="nz-flag" />
            <img className={styles.flag} src={maoriFlag} alt="maori-flag" />
          </div>
          <div className={styles.userContainer}>
            <img className={styles.userImage} src={User} alt="user-mage" />
            <div>
              <button className={styles.loginBtn}>REGISTER</button>
              <span className={styles.login}>|</span>
              <button className={styles.loginBtn}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
