// import SideBar from "../CommonComponents/SideBar";
// import Footer from "../CommonComponents/Footer";

// function ProjectSubmissions() {
//   return (
//     <>
//       <h1>ProjectSubmissions This is Mitch's page</h1>
//       <div>
//         <SideBar />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ProjectSubmissions;

import SideBar from "../CommonComponents/SideBar";
import Footer from "../CommonComponents/Footer";
import styles from "./ProjectSubmissions.module.css";

function ProjectSubmissions() {
  return (
    <div className="page-container">
      <h1>ProjectSubmissions This is Mitch's page</h1>
      <div className={styles.content}>
        <SideBar />
        {/* Add your main content here */}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default ProjectSubmissions;
