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
<<<<<<< Updated upstream
          <NavLink to="/student-profiles" className={styles.sidebarLink}>
=======
          <NavLink
            to="/student-profile-viewer"
            className={`${styles.sidebarLink} ${
              location.pathname === "/student-profile-viewer" ? styles.active : ""
            }`}
          >
            <img src={studentProfileIcon} alt="icon" />
>>>>>>> Stashed changes
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
