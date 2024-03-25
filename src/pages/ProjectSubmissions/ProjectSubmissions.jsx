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
        Add your main content here??
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default ProjectSubmissions;
