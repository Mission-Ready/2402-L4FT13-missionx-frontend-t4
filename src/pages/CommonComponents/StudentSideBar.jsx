import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./StudentSideBar.module.css";
import learningObjectivesIcon from "../../assets/StudentDashboard/learningObjectives.png";
import instructionsIcon from "../../assets/StudentDashboard/instructions.png";
import videoTutorialIcon from "../../assets/StudentDashboard/video.png";
import makeProjectIcon from "../../assets/StudentDashboard/makeProject.png";
import submitProjectIcon from "../../assets/StudentDashboard/submitProject.png";
import bonusChallengeIcon from "../../assets/StudentDashboard/bonusChallenge.png";
import takeTheQuizIcon from "../../assets/StudentDashboard/takeTheQuiz.png";
import arrowLeft from "../../assets/arrowLeft.png";
import studentPic from "../../../public/images/students/AidenAndrews.png";
import profileIcon from "../../assets/profile.png";
import settingsIcon from "../../assets/settings.png";
import logoutIcon from "../../assets/logout.png";

function studentSideBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSideBar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`${styles.studentSideBar} ${
          isActive ? styles.isActive : ""
        }`}
      >
        <div className={styles.studentSideBarList}>
          <img className={styles.studentPhoto} src={studentPic} alt="student" />
          <NavLink
            to="/learning-objectives"
            className={`${styles.sidebarLink} ${
              location.pathname === "/learning-objectives" ? styles.active : ""
            }`}
          >
            <img
              src={learningObjectivesIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              LEARNING OBJECTIVES
            </span>
          </NavLink>

          <NavLink
            to="/instructions"
            className={`${styles.sidebarLink} ${
              location.pathname === "/instructions" ? styles.active : ""
            }`}
          >
            <img
              src={instructionsIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />

            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              INSTRUCTIONS
            </span>
          </NavLink>
          <NavLink
            to="/video-tutorial"
            className={`${styles.sidebarLink} ${
              location.pathname === "/video-tutorial" ? styles.active : ""
            }`}
          >
            <img
              src={videoTutorialIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              VIDEO TUTORIAL
            </span>
          </NavLink>
          <NavLink
            to="/make-project"
            className={`${styles.sidebarLink} ${
              location.pathname === "/make-project" ? styles.active : ""
            }`}
          >
            <img
              src={makeProjectIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              MAKE PROJECT
            </span>
          </NavLink>
          <NavLink
            to="/submit-project"
            className={`${styles.sidebarLink} ${
              location.pathname === "/submit-project" ? styles.active : ""
            }`}
          >
            <img
              src={submitProjectIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              SUBMIT PROJECT
            </span>
          </NavLink>
          <NavLink
            to="/project-library"
            className={`${styles.sidebarLink} ${
              location.pathname === "/project-library" ? styles.active : ""
            }`}
          >
            <img
              src={bonusChallengeIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              BONUS CHALLENGE
            </span>
          </NavLink>
          <NavLink
            to="/project-library"
            className={`${styles.sidebarLink} ${
              location.pathname === "/project-library" ? styles.active : ""
            }`}
          >
            <img
              src={takeTheQuizIcon}
              className={`${
                isActive ? styles.closedIcons : styles.openedIcons
              }`}
              alt="icon"
            />
            <span className={`${isActive ? styles.hideText : styles.showText}`}>
              TAKE QUIZ
            </span>
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

export default studentSideBar;
