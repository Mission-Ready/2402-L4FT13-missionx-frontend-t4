/** @format */

import React from "react";
import star from '../assets/Home/star.png'


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
  ];

  return (
    <>
    <img src={star} alt='star' />
    {SDProjectLibraryData.map((project) => {
      return (
        <> 
        <div>{project.title}</div>
        <div>
          <img src={project.src} alt='project' />
        </div>
        </>
      )
    })}
    
    </>
  )};