import React from "react";
import NavBar from "../CommonComponents/NavBar";
import styles from "./StudentProfileViewer.module.css"
import StudentProfiles from "../StudentProfiles/StudentProfiles";
import SideBar from "../CommonComponents/SideBar";

function StudentProfileViewer(profiles) {



  const studentProfiles = [
    {
        name: "Aiden Andrews",
        gender: "male",
        img: '/images/students/AidenAndrews.png'
    },
    {
        name: "Alice Kindellan",
        gender: "female",
        img: '/images/students/AliceKindellan.png'
    },
    {
        name: "Courtney Bristol",
        gender: "female",
        img: '/images/students/CourtneyBristol.png'
    },
    {
        name: "Hanu Nepe",
        gender: "male",
        img: '/images/students/HanuNepe.png'
    },
    {
        name: "Harry McGrath",
        gender: "male",
        img: '/images/students/HarryMcGrath.png'
    },
    {
        name: "Javier Fuego",
        gender: "male",
        img: '/images/students/JavierFuego.png'
    },
    {
        name: "Lisa Horan",
        gender: "female",
        img: '/images/students/LisaHoran.png'
    },
    {
        name: "Lucia Mendez",
        gender: "female",
        img: '/images/students/LuciaMendez.png'
    },
    {
        name: "Mark OLeary",
        gender: "male",
        img: '/images/students/MarkOLeary.png'
    },
    {
        name: "Nagani Cortes",
        gender: "female",
        img: '/images/students/NaganiCortes.png'
    },
    {
        name: "Neveah Machenry",
        gender: "female",
        img: '/images/students/NeveahMachenry.png'
    },
    {
        name: "Rawiri Fletcher",
        gender: "male",
        img: '/images/students/RawiriFletcher.png'
    },
    {
        name: "Shane OMonahan",
        gender: "male",
        img: '/images/students/ShaneOMonahan.png'
    },
    {
        name: "Simon Laine",
        gender: "male",
        img: '/images/students/SimonLaine.png'
    },
    {
        name: "Tokio Han",
        gender: "male",
        img: '/images/students/TokioHan.png'
    },
];
    
  

  return (
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
