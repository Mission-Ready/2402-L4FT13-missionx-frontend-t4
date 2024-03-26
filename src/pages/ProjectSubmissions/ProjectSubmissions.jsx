import SideBar from "../CommonComponents/SideBar";
import Footer from "../CommonComponents/Footer";
import styles from "./ProjectSubmissions.module.css";
import NavBar from "../CommonComponents/NavBar";

function ProjectSubmissions() {
  return (
    <div className="page-container">
      <div>
        <NavBar />
      </div>
      <div className={styles.content}>
        <SideBar />
        <div className={styles.mainContent}>
          <div className={styles.innerBox}>Add your main content here??</div>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default ProjectSubmissions;
