/** @format */
import React, { useState } from "react";



export default function ProjectLibSideBar() {
  const [isActive, setIsActive] = useState(false);
  const toggleSideBar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <ul>
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </div>
      <button onClick={toggleSideBar}>toggle</button>
    </>
  );
}


