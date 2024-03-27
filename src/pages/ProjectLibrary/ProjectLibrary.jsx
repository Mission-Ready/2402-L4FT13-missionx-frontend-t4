/** @format */

import React from "react";
import ProjectNavBar from "../../components/ProjectNavBar.jsx";
import ProjectSideBar from "../../components/ProjectSideBar.jsx";
import Footer from "../../components/Footer.jsx";
import styles from "../ProjectLibrary/ProjectLibrary.module.css";
import { Link } from "react-router-dom";

export default function ProjectLibrary() {
  const introData = [
    {
      title: "Introduction",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project01.png",
    },
  ];
  const projectData = [
    {
      title: "My Birthday",
      level: "Beginner",
      activity_type: "Animation",
      src: "images/projects/Project02.png",
    },
    {
      title: "10 Block Challenge",
      level: "Beginner",
      activity_type: "Anitmation",
      src: "/images/projects/Project03.png",
    },
    {
      title: "Build a band",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project04.png",
    },
    {
      title: "The bear and the monkey",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project05.png",
    },
    {
      title: "Debugging",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project06.png",
    },
    {
      title: "About me",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project07.png",
    },
    {
      title: "I am here!",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project08.png",
    },
    {
      title: "Funny faces",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project09.png",
    },
    {
      title: "It tickles!",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project10.png",
    },
    {
      title: "Penguin in a Desert",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project11.png",
    },
    {
      title: "Time Travel",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project12.png",
    },
    {
      title: "Birthday Card",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project13.png",
    },
    {
      title: "The Lioon and the Mouse Part 1",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project14.png",
    },
    {
      title: "The Lion and the",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project15.png",
    },
  ];

  return (
    <>
      <ProjectNavBar />
      {/* <div className={styles.header}>
        <div className={styles.mainContainer}>
          <h1 className={styles.h1}>PROJECTS</h1>
          <br />
          <p>
            Welcome to the project library. You can use the Filter on the right
            to help you search for specific projects.
          </p>
        </div>
        <br />
      </div> */}
      {/* <div className={styles.btnContainer}>
        <button className={styles.projectBegBtn}>BEGINNER</button>
        <button className={styles.projectBtn}>INTERMEDIATE</button>
        <button className={styles.projectBtn}>ADVANCED</button>
        <div className={styles.projectBtns}>
          SHOW <button className={styles.projectNumBtns}>5</button>
          <button className={styles.projectBtns}>10</button>
          <button className={styles.projectBtns}>15</button>
        </div>
      </div> */}

      {/* <ProjectSideBar />  */}

      <div className={styles.imageContainer}>
        <div className={styles.introProjectImage}>
          {introData.map((project, index) => (
            <div key={index}>
              <Link to="/" className="intro-link"></Link>
              <img src={project.src} alt="intro"></img>
              <h2>Introduction</h2> BEGINNER | Animation
            </div>
          ))}
        </div>
        {/* <div className={styles.projectImages}>
        {projectData.map((project, index) => (
          <div key={index}>
            <img src={project.src} alt="prj"></img>
            <h2>{project.title}</h2> BEGINNER | Animation
          </div>
        ))}
        </div> */}
      </div>

      {/* <div className={styles.backBtn}>
        <button>BACK TO TOP</button>
      </div> */}

      {/* <Footer /> */}
    </>
  );
}
