import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import progressTrackerIcon from "../../assets/TeacherDashboard/progressTracker.png";
import studentProfileIcon from "../../assets/TeacherDashboard/studentProfiles.png";
import helpRequestsIcon from "../../assets/TeacherDashboard/helpRequests.png";
import projectSubmissionsIcon from "../../assets/TeacherDashboard/projectSubmissions.png";
import projectLibraryIcon from "../../assets/TeacherDashboard/projectLibrary.png";
import arrowLeft from "../../assets/arrowLeft.png";

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
            <img src={progressTrackerIcon} alt="icon" />
            PROGRESS TRACKER
          </NavLink>
          <NavLink to="/student-profiles" className={styles.sidebarLink}>
            <img src={studentProfileIcon} alt="icon" />
            STUDENT PROFILES
          </NavLink>
          <NavLink to="/help-requests" className={styles.sidebarLink}>
            <img src={helpRequestsIcon} alt="icon" />
            HELP REQUESTS
          </NavLink>
          <NavLink to="/project-submissions" className={styles.sidebarLink}>
            <img src={projectSubmissionsIcon} alt="icon" />
            PROJECT SUBMISSIONS
          </NavLink>
          <NavLink to="/project-library" className={styles.sidebarLink}>
            <img src={projectLibraryIcon} alt="icon" />
            PROJECT LIBRARY
          </NavLink>
          <br />
          <br />
        </div>
        <button onClick={toggleSideBar}>
          <img src={arrowLeft} alt="arrow" />
        </button>
      </div>
    </>
  );
}

export default SideBar;
