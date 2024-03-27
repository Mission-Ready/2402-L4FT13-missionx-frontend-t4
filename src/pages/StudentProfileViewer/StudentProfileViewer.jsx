import React from "react";
import NavBar from "../CommonComponents/NavBar";
import SideBar from "../CommonComponents/SideBar";
import Footer from "../CommonComponents/Footer";
import StudentComponent from "../../components/StudentComponent";
import styles from './StudentProfileViewer.module.css'

function StudentProfileViewer() {
  return (
    <div className="page-container">
        <div>
        <NavBar />
        </div>
        <div className={styles.content}>
        <StudentComponent />
        <SideBar />
        </div>
    <br></br>
    <br></br>
    <div className={styles.footer}>
    <Footer />
    </div>
    </div>
  );
}

export default StudentProfileViewer;
