import React from "react";
import NavBar from "../CommonComponents/NavBar";
import SideBar from "../CommonComponents/SideBar";
import Footer from "../CommonComponents/Footer";
import StudentComponent from "../../components/StudentComponent";

function StudentProfileViewer() {

  return (

        <>
          <NavBar/>
          <StudentComponent/>
          <SideBar/>
          <br></br>
          <br></br>
          <Footer/>
        </>

      );

    <>

    <h1>Student Profile Viewer Page</h1>

    <NavBar/>
   
    {/* <SideBar/> */}
    
    
    {studentProfiles.map((profiles) => {
      console.log(profiles.name)
      return(
      <>
      {/* <div className={styles.body}/>
      <div className={styles.container}>
        <img className={styles.image} src={profiles.img}/>
        <div className={styles.name} >{profiles.name}</div>
      </div> */}

      <div className={styles.body}>

        <div className={styles.container}>
           <div className={styles.profiles}> <img src={profiles.img} alt="student-profiles"/>
        
              <div className={styles.name}>{profiles.name}</div>
          </div>
        
        </div>
      </div>
      
      </>
      )

    })}

      {/* <div className={styles.body}>
      <div className={styles.container}>
        
        <div className={styles.profiles}>
        <img src={'/imgs/students/AidenAndrews.png'} alt="student-profile"/>
            <div className={styles.name}>
            Aiden Andrews
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/imgs/students/AliceKindellan.png'} alt="student-profile"/>
            <div className={styles.name}>
            Alice Kindellan
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/imgs/students/CourtneyBristol.png'} alt="student-profile"/>
            <div className={styles.name}>
            Courtney Bristol
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/imgs/students/HanuNepe.png'} alt="student-profile"/>
            <div className={styles.name}>
            Hanu Nepe
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/imgs/students/HarryMcGrath.png'} alt="student-profile"/>
            <div className={styles.name}>
            Harry McGrath
            </div>
        </div>

      </div>
      </div> */}

    </>

  );

    }

export default StudentProfileViewer;
