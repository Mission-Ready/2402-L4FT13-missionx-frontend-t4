import React from "react";
import NavBar from "../CommonComponents/NavBar";
import styles from "./StudentProfileViewer.module.css"

function StudentProfileViewer(props) {

  const studentProfiles = [
    {
        name: "Aiden Andrews",
        gender: "male",
        image: '/images/students/AidenAndrews.png'
    },
    {
        name: "Alice Kindellan",
        gender: "female",
        image: '/images/students/AliceKindellan.png'
    },
    {
        name: "Courtney Bristol",
        gender: "female",
        image: '/images/students/CourtneyBristol.png'
    },
    {
        name: "Hanu Nepe",
        gender: "male",
        image: '/images/students/HanuNepe.png'
    },
    {
        name: "Harry McGrath",
        gender: "male",
        image: '/images/students/HarryMcGrath.png'
    },
    {
        name: "Javier Fuego",
        gender: "male",
        image: '/images/students/JavierFuego.png'
    },
    {
        name: "Lisa Horan",
        gender: "female",
        image: '/images/students/LisaHoran.png'
    },
    {
        name: "Lucia Mendez",
        gender: "female",
        image: '/images/students/LuciaMendez.png'
    },
    {
        name: "Mark OLeary",
        gender: "male",
        image: '/images/students/MarkOLeary.png'
    },
    {
        name: "Nagani Cortes",
        gender: "female",
        image: '/images/students/NaganiCortes.png'
    },
    {
        name: "Neveah Machenry",
        gender: "female",
        image: '/images/students/NeveahMachenry.png'
    },
    {
        name: "Rawiri Fletcher",
        gender: "male",
        image: '/images/students/RawiriFletcher.png'
    },
    {
        name: "Shane OMonahan",
        gender: "male",
        image: '/images/students/ShaneOMonahan.png'
    },
    {
        name: "Simon Laine",
        gender: "male",
        image: '/images/students/SimonLaine.png'
    },
    {
        name: "Tokio Han",
        gender: "male",
        image: '/images/students/TokioHan.png'
    },
];



  return (
    <>
    <NavBar/>

    {studentProfiles.map((profiles) => {
      return(
      <>
      <div className={styles.body}>

        <div className={styles.container}>
           <div className={styles.profiles}> <img src={profiles.image} alt="student-profiles"/>
        
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
        <img src={'/images/students/AidenAndrews.png'} alt="student-profile"/>
            <div className={styles.name}>
            Aiden Andrews
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/images/students/AliceKindellan.png'} alt="student-profile"/>
            <div className={styles.name}>
            Alice Kindellan
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/images/students/CourtneyBristol.png'} alt="student-profile"/>
            <div className={styles.name}>
            Courtney Bristol
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/images/students/HanuNepe.png'} alt="student-profile"/>
            <div className={styles.name}>
            Hanu Nepe
            </div>
        </div>
        <div className={styles.profiles}>
        <img src={'/images/students/HarryMcGrath.png'} alt="student-profile"/>
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
