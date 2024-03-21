/** @format */

import React from "react";
import ProjectNavBar from "../../components/ProjectNavBar";
import ProjectSideBar from "../../components/ProjectSideBar";

export default function ProjectLibrary() {
  const SDProjectLibraryData = [
    {
      title: "Introduction",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project01.png",
    },
    {
      title: "My Birthday",
      level: "Beginner",
      activity_type: "Animation",
      src: "/images/projects/Project02.png",
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
      <div className={styles.layout}></div>
      <ProjectSideBar />
      <div>Right Section</div>
      {SDProjectLibraryData.map((project) => {
        return (
          <>
            <img src={project.src} alt="project" />
            <div>{project.title}</div>
            <div>{project.level}</div> <div>{project.activity_type}</div>
          </>
        );
      })}

      <Footer />
    </>
  );
}
