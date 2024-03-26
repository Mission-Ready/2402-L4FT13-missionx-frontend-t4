import React from "react";
import NavBar from "../CommonComponents/NavBar";
import SideBar from "../CommonComponents/SideBar";
import Footer from "../CommonComponents/Footer";
import StudentComponent from "../../components/StudentComponent";

function StudentProfileViewer() {
  return (
    <>
      <NavBar />
      <StudentComponent />
      <SideBar />
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default StudentProfileViewer;
