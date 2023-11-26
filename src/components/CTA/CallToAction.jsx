import styles from "./CallToAction.module.css";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import web from "../../assets/web.png";
import mail from "../../assets/mail.png";
import donate from "../../assets/donate.png";
import handshake from "../../assets/handshake.png";
import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <ul>
        <li>
          <img className={styles.icon} src={handshake} alt="" />
          <a href="https://www.tfaforms.com/4927499?3v3n7Id">JOIN ILAN</a>
        </li>
        <li>
          <img className={styles.icon} src={donate} alt="" />
          <a href="https://www.jgive.co.il/new/en/ils/charity-organizations/444">
            DONATE TO ILAN
          </a>
        </li>
        <li>
          <img className={styles.icon} src={mail} alt="" />
          <Link to="/contact-us">CONTACT US</Link>
        </li>
        <li>
          <img className={styles.icon} src={linkedin} alt="" />
        </li>
        <li>
          <img
            className={styles.icon}
            src={instagram}
            alt="instagram-new--v1"
          />
        </li>
        <li>
          <img className={styles.icon} src={facebook} alt="" />
        </li>
        <li>
          <img className={styles.icon} src={web} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default CallToAction;
