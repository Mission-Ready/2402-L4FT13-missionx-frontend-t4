import star from "../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";
import styles from "./NavBar.module.css";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {

  function handleClickMaori(){
    alert("Māori")
  }
  function handleClickEnglish(){
    alert("English")
  }






  return (
    <>
      <div className={styles.container}>
        <img src={star} width="10%" className={styles.star} />
        <NavLink to="/help-requests">
        <button className={styles.pinkBtn}>Help Center</button>
        </NavLink>
        <NavLink to="/make-project">
        <button className={styles.blueBtn}>More Projects</button>
        </NavLink>

        <img onClick={handleClickMaori} src={maoriFlag} alt="flag-img" className={styles.flag} />
        <img onClick={handleClickEnglish} src={nzFlag} alt="flag-img" className={styles.flag} />
      </div>
    </>
  );
}

export default NavBar;
