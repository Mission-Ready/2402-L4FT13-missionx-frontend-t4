/** @format */

import "./App.css"
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer";
import NavBar from "./components/ProjectLibraryNavBar";
import SideBar from "./components/SideBar";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary"

function App() {
  return (
    <>
      <ProjectLibrary />
      <StudentProfileViewer />
      <NavBar />
      <SideBar />
    </>
  );
}

export default App;
