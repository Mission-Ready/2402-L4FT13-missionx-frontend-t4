import star from "../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
    <div className={styles.container}>
      <img src={star} width="10%" className={styles.star}/>
      <button className={styles.pinkBtn}>Help Center</button>
      <button className={styles.blueBtn}>More Projects</button>

      <img src={maoriFlag} alt="flag-img" className={styles.flag}/>
      <img src={nzFlag} alt="flag-img" className={styles.flag}/>
     
      <div className={styles.container}>
        <img src={star} width="10%" className={styles.star} />
        <button className={styles.pinkBtn}>Help Center</button>
        <button className={styles.blueBtn}>More Projects</button>

        <img src={maoriFlag} alt="flag-img" className={styles.flag} />
        <img src={nzFlag} alt="flag-img" className={styles.flag} />
      </div>
    </>
  );
}

export default NavBar;
