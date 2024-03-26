import React from 'react'
import styles from './StudentComponent.module.css'

function StudentComponent(profiles) {

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
        <div className={styles.body}>
             <div className={styles.container}>
            {studentProfiles.map((profiles) => {
            console.log(profiles.name)
            return(
            <>
                <div className={styles.profiles}> <img src={profiles.img} alt="student-profiles"/>
                <div>{profiles.name}</div>
                </div>
            </>
                );  
            })}
        </div>
        </div>
    </>
  );
}

export default StudentComponent
