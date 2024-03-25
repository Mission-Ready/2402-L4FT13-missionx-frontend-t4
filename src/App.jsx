
/** @format */

<<<<<<< Updated upstream
import "./App.css";
import ProjectSideBar from "./components/ProjectSideBar";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
<<<<<<< HEAD
=======
import { Routes, Route } from "react-router-dom";
import "./App.css";
=======
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./pages/CommonComponents/NavBar.jsx";

>>>>>>> e679ea7d071994aea698652ce36f8c1cf071d76c

//Import Components
import Home from "./pages/Home/Home";
import HelpRequests from "./pages/HelpRequests/HelpRequests";
import Instructions from "./pages/Instructions/Instructions";
import LearningObjectives from "./pages/LearningObjectives/LearningObjectives";
import Login from "./pages/Login/Login";
import MakeProject from "./pages/MakeProject/MakeProject";
import ProgressTracker from "./pages/ProgressTracker/ProgressTracker";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
import ProjectSubmissions from "./pages/ProjectSubmissions/ProjectSubmissions";
import StudentProfiles from "./pages/StudentProfiles/StudentProfiles";
import TeacherProfileViewer from "./pages/TeacherProfileViewer/TeacherProfileViewer";
import SubmitProject from "./pages/SubmitProject/SubmitProject";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial";
<<<<<<< HEAD
>>>>>>> Stashed changes
=======

>>>>>>> e679ea7d071994aea698652ce36f8c1cf071d76c

function App() {
  return (
    <>
<<<<<<< HEAD
<<<<<<< Updated upstream
      <ProjectLibrary />
=======
=======

      <ProjectLibrary />

      <h1>Mission X</h1>
>>>>>>> e679ea7d071994aea698652ce36f8c1cf071d76c
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-requests" element={<HelpRequests />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/learning-objectives" element={<LearningObjectives />} />
        <Route path="/login" element={<Login />} />
        <Route path="/make-project" element={<MakeProject />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/project-library" element={<ProjectLibrary />} />
        <Route path="/project-submissions" element={<ProjectSubmissions />} />
        <Route path="/student-profiles" element={<StudentProfiles />} />
        <Route
          path="/teacher-profile-viewer"
          element={<TeacherProfileViewer />}
        />
        <Route path="/submit-project" element={<SubmitProject />} />
        <Route
          path="/student-profile-viewer"
          element={<StudentProfileViewer />}
        />
        <Route path="/video-tutorial" element={<VideoTutorial />} />
        <Route path="/help-requests" element={<HelpRequests />} />
      </Routes>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> e679ea7d071994aea698652ce36f8c1cf071d76c
    </>
  );
}

export default App;
