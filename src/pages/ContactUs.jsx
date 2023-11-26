import ContactForm from "../components/ContactForm/ContactForm";
import fax from "../assets/fax.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";
import styles from "./ContactUs.module.css";
const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <ContactForm />
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.title}>
            <div>Contact Details</div>
          </div>
          <div>
            <ul>
              <li>
                {" "}
                <img src={mail} alt="" />
                <p> ilan@ilan-israel.co.il </p>
              </li>
              <li>
                <img src={phone} alt="" />
                <p>03-5248141</p>
              </li>
              <li>
                <img src={fax} alt="" />
                <p>03-5249828</p>
              </li>
              <li>
                <img src={location} alt="" />
                <p> 5 Mota Gur Street PO Box 3092 Petach Tikvah 4951623</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>To Speak with Our Fundraising Center</p>
          <div>
            {" "}
            <img src={phone} alt="" />
            <p>1-800-399-999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
