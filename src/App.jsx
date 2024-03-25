/** @format */


import { Routes, Route } from "react-router-dom";
import "./App.css";

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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
