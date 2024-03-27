import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import progressTrackerIcon from "../../assets/TeacherDashboard/progressTracker.png";
import studentProfileIcon from "../../assets/TeacherDashboard/studentProfiles.png";
import helpRequestsIcon from "../../assets/TeacherDashboard/helpRequests.png";
import projectSubmissionsIcon from "../../assets/TeacherDashboard/projectSubmissions.png";
import projectLibraryIcon from "../../assets/TeacherDashboard/projectLibrary.png";
import arrowLeft from "../../assets/arrowLeft.png";
import teacherPic from "../../../public/images/teachers/JasminaSalvador.png";
import profileIcon from "../../assets/profile.png";
import settingsIcon from "../../assets/settings.png";
import logoutIcon from "../../assets/logout.png";

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
          <img className={styles.teacherPhoto} src={teacherPic} alt="Teacher" />
          <NavLink
            to="/progress-tracker"
            className={`${styles.sidebarLink} ${
              location.pathname === "/progress-tracker" ? styles.active : ""
            }`}
          >
            <img src={progressTrackerIcon} alt="icon" />
            {isActive ? (
              <span style={{ display: "none" }}>PROGRESS TRACKER</span>
            ) : (
              <span>PROGRESS TRACKER</span>
            )}
          </NavLink>

          <NavLink
            to="/student-profile-viewer"
            className={`${styles.sidebarLink} ${
              location.pathname === "/student-profile-viewer" ? styles.active : ""
            }`}
          >
            <img src={studentProfileIcon} alt="icon" />

            {isActive ? (
              <span style={{ display: "none" }}>STUDENT PROFILES</span>
            ) : (
              <span>STUDENT PROFILES</span>
            )}
          </NavLink>
          <NavLink
            to="/help-requests"
            className={`${styles.sidebarLink} ${
              location.pathname === "/help-requests" ? styles.active : ""
            }`}
          >
            <img src={helpRequestsIcon} alt="icon" />
            {isActive ? (
              <span style={{ display: "none" }}>HELP REQUESTS</span>
            ) : (
              <span>HELP REQUESTS</span>
            )}
          </NavLink>
          <NavLink
            to="/project-submissions"
            className={`${styles.sidebarLink} ${
              location.pathname === "/project-submissions" ? styles.active : ""
            }`}
          >
            <img src={projectSubmissionsIcon} alt="icon" />
            {isActive ? (
              <span style={{ display: "none" }}>PROJECT SUBMISSIONS</span>
            ) : (
              <span>PROJECT SUBMISSIONS</span>
            )}
          </NavLink>
          <NavLink
            to="/project-library"
            className={`${styles.sidebarLink} ${
              location.pathname === "/project-library" ? styles.active : ""
            }`}
          >
            <img src={projectLibraryIcon} alt="icon" />
            {isActive ? (
              <span style={{ display: "none" }}>PROJECT LIBRARY</span>
            ) : (
              <span>PROJECT LIBRARY</span>
            )}
          </NavLink>
        </div>
        <button className={styles.arrowButton} onClick={toggleSideBar}>
          <img src={arrowLeft} alt="arrow" />
        </button>
        <div className={styles.bottomIcons}>
          <NavLink className={styles.bottomIconNavLink}>
            <div>
              <img
                className={styles.profileIcon}
                src={profileIcon}
                alt="Profile"
              />
            </div>
            {isActive ? (
              <div style={{ display: "none" }}>Profile</div>
            ) : (
              <div>Profile</div>
            )}
          </NavLink>
          <NavLink className={styles.bottomIconNavLink}>
            <div>
              <img
                className={styles.settingsIcon}
                src={settingsIcon}
                alt="Settings"
              />
            </div>
            {isActive ? (
              <div style={{ display: "none" }}>Settings</div>
            ) : (
              <div>Settings</div>
            )}
          </NavLink>
          <NavLink className={styles.bottomIconNavLink}>
            <div>
              <img
                className={styles.logoutIcon}
                src={logoutIcon}
                alt="Logout"
              />
            </div>
            {isActive ? (
              <div style={{ display: "none" }}>Logout</div>
            ) : (
              <div>Logout</div>
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
