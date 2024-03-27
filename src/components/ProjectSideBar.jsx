/** @format */
import styles from "../components/ProjectSideBar.module.css";

export default function ProjectSideBar() {
  const handleCheck = (e) => {
    console.log(e.target.checked);
  };

  return (
    <>
      <div className={styles.projectSideBar}>
        <h4 className={styles.h4}>SUBSCRIPTION</h4>
        <label>
          <input onChange={handleCheck} type="checkbox" /> Free
        </label>
        <label>
          <br />
          <input type="checkbox" /> Premium
        </label>
        <h4 className={styles.h4}>ACTIVITY TYPE</h4>
        <label>
          <input type="checkbox" /> Animation
        </label>
        <br />
        <label>
          <input type="checkbox" /> Game
        </label>
        <br />
        <label>
          <input type="checkbox" /> Chatbot
        </label>
        <br />
        <label>
          <input type="checkbox" /> Augmented Reality
        </label>
        <br />
        <h4 className={styles.h4}>YEAR LEVEL </h4>
        <label>
          <input type="checkbox" /> 1-4
        </label>
        <br />
        <label>
          <input type="checkbox" /> 5-6
        </label>
        <br />{" "}
        <label>
          <input type="checkbox" /> 7-8
        </label>
        <br />
        <label>
          <input type="checkbox" /> 9-13
        </label>
        <br />
        <h4 className={styles.h4}>SUBJECT MATTER</h4>
        <label>
          <input type="checkbox" /> Computer Science
        </label>
        <br />
        <label>
          <input type="checkbox" />
          Maths
        </label>
        <br />
        <label>
          <input type="checkbox" /> Science
        </label>
        <br />
        <label>
          <input type="checkbox" /> Language
        </label>
        <br />
        <label>
          <input type="checkbox" /> Art
        </label>
        <br />
        <label>
          <input type="checkbox" /> Music
        </label>
      </div>
    </>
  );
}
