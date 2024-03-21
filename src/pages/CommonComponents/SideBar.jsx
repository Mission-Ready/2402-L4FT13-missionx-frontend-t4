import { useState } from "react";
import styles from "./SideBar.module.css";

function SideBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSideBar = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={`${styles.sidebar} ${isActive ? styles.isActive : ""}`}>
        <div>
          <ul>
            <li>PROGRESS TRACKER</li>
            <li>STUDENT PROFILES</li>
            <li>HELP REQUESTS</li>
            <li>PROJECT SUBMISSIONS</li>
            <li>PROJECT LIBRARY</li>
          </ul>
        </div>
        <button onClick={toggleSideBar}>toggle</button>
      </div>
    </>
  );
}

export default SideBar;
