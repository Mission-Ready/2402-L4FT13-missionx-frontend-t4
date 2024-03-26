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
            <img
              src={progressTrackerIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              PROGRESS TRACKER
            </span>
          </NavLink>

          <NavLink
            to="/student-profile-viewer"
            className={`${styles.sidebarLink} ${
              location.pathname === "/student-profile-viewer"
                ? styles.active
                : ""
            }`}
          >
            <img
              src={studentProfileIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />

            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              STUDENT PROFILES
            </span>
          </NavLink>
          <NavLink
            to="/help-requests"
            className={`${styles.sidebarLink} ${
              location.pathname === "/help-requests" ? styles.active : ""
            }`}
          >
            <img
              src={helpRequestsIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              HELP REQUESTS
            </span>
          </NavLink>
          <NavLink
            to="/project-submissions"
            className={`${styles.sidebarLink} ${
              location.pathname === "/project-submissions" ? styles.active : ""
            }`}
          >
            <img
              src={projectSubmissionsIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              PROJECT SUBMISSIONS
            </span>
          </NavLink>
          <NavLink
            to="/project-library"
            className={`${styles.sidebarLink} ${
              location.pathname === "/project-library" ? styles.active : ""
            }`}
          >
            <img
              src={projectLibraryIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />

            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              PROJECT LIBRARY
            </span>
          </NavLink>
        </div>
        <button className={styles.arrowButton} onClick={toggleSideBar}>
          <img src={arrowLeft} alt="arrow" />
        </button>
        <div
          className={`${
            isActive ? styles.bottomIconsClosed : styles.bottomIconsOpened
          }`}
        >
          <NavLink className={styles.bottomIconNavLink}>
            <div>
              <img
                className={styles.profileIcon}
                src={profileIcon}
                alt="Profile"
              />
            </div>

            <div className={`${isActive ? styles.hideText : styles.showText}`}>
              Profile
            </div>
          </NavLink>
          <NavLink className={styles.bottomIconNavLink}>
            <div>
              <img
                className={styles.settingsIcon}
                src={settingsIcon}
                alt="Settings"
              />
            </div>
            <div className={`${isActive ? styles.hideText : styles.showText}`}>
              Settings
            </div>
          </NavLink>
          <NavLink className={styles.bottomIconNavLink}>
            <div>
              <img
                className={styles.logoutIcon}
                src={logoutIcon}
                alt="Logout"
              />
            </div>
            <div className={`${isActive ? styles.hideText : styles.showText}`}>
              Logout
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
