import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSideBar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`${styles.teacherSideBar} ${
          isActive ? styles.isActive : ""
        }`}
      >
        <div className={styles.teacherSideBarList}>
          <NavLink to="/progress-tracker" className={styles.sidebarLink}>
            PROGRESS TRACKER
          </NavLink>
          <NavLink to="/student-profiles" className={styles.sidebarLink}>
            STUDENT PROFILES
          </NavLink>
          <NavLink to="/help-requests" className={styles.sidebarLink}>
            HELP REQUESTS
          </NavLink>
          <NavLink to="/project-submissions" className={styles.sidebarLink}>
            PROJECT SUBMISSIONS
          </NavLink>
          <NavLink to="/project-library" className={styles.sidebarLink}>
            PROJECT LIBRARY
          </NavLink>
        </div>
        <button onClick={toggleSideBar}>toggle</button>
      </div>
    </>
  );
}

export default SideBar;
