/** @format */

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer - layout}>
      <div className="company">
        <h3>COMPANY</h3>
        <p>About us</p>
        <p>Careers</p>
        <p>Partners</p>
      </div>
      <div className="courses">
        <h3>COURSES</h3>
        <p>Register</p>
        <p>Login</p>
        <p>Projects</p>
        <p>Teachers</p>
        <p>Resources</p>
      </div>
      <div className="support">
        <h3>SUPPORT</h3>
        <p>FAQs</p>
        <p>Helpdesk</p>
        <p>Contact Us</p>
      </div>
      <div className="legal">
        <h3>LEGAL</h3>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="levelup">
        <p>LevelUp Works</p>
        <p>LevelUp works is an Auckland-based</p>
        <p>enterprise dedicated to developing game-</p>
        <p>based learning software to help teachers in</p>
        <p>response to the New Zealand Digital</p>
        <p>Technologies & Hangarau Matihiko.</p>
        <p>alan@levelupworks.com</p>
        <p>(021) 668 185</p>
      </div>
    </div>
  );
}
