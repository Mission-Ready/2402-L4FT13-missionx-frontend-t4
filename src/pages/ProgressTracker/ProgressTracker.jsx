import React from "react";
import NavBar from "../CommonComponents/NavBar";
import styles from './ProgressTracker.module.css'
import SideBar from "../CommonComponents/SideBar";
import Footer from "../CommonComponents/Footer";

function ProgressTracker() {
  return (
  <div>
    <NavBar/>
    <SideBar/>
    
        <div className={styles.body}>
             <div className={styles.container}>
              <h1 className={styles.title}>BEGINNER COURSE</h1> <p>EXPORT AS SPREADSHEET</p>
              <div className={styles.innerContainer}></div>
             </div>
        </div>




    <br></br>
    <br></br>
    <Footer/>
  

  </div>
  );
}

export default ProgressTracker;
