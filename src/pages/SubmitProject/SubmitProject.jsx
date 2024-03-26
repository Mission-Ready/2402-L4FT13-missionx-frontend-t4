import StudentSideBar from "../CommonComponents/StudentSideBar";
import Footer from "../CommonComponents/Footer.jsx";
import styles from "./SubmitProject.module.css";

function SubmitProject() {
  return (
    <div className="page-container">
      <div>{/* <NavBar /> */}</div>
      <div className={styles.content}>
        <StudentSideBar />
        <div className={styles.mainContent}>
          <div className={styles.innerBox}>Add your main content here??</div>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default SubmitProject;
