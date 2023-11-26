import photo from "../../assets/a-KOBI5078.jpg";
import styles from "./Main.module.css";
import NewsTicket from "../Ticket/NewsTicket";
const Main = () => {
  return (
    <main className={styles.main}>
      <img className={styles.photo} src={photo} alt="" />
      <div className={styles.inforDiv}>
        <h2>Help Us, Help Them</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.jgive.co.il/new/en/ils/charity-organizations/444"
        >
          <button className={styles.donateBtn}>
            DONATE TO HELP US HELP THEM
          </button>
        </a>
      </div>
      <NewsTicket />
    </main>
  );
};

export default Main;
