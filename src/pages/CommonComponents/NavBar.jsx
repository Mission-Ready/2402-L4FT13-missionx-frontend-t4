import star from '../../assets/NavBar/LevelUpWorks-blue.png'
import nzFlag from '../../assets/NavBar/NZFlag.png'
import maoriFlag from '../../assets/NavBar/MaoriFlag.png'
import styles from './NavBar.module.css'

function NavBar() {


  return (
    <>
    <div>
      <img src={star} width="10%"/>
      <button>Help Center</button>
      <button>More Projects</button>


      <div className="flags">
      <img src={nzFlag} alt="flag-img" width="20px"/>
      <img src={maoriFlag} alt="flag-img" width="20px"/>
      </div>

      
      
    </div>
       
    </>
  )
}

export default NavBar
