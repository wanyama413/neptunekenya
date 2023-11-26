import styles from "./Call.module.css";
const Call = () => {
  return (
    <section className={styles.call}>
      <div>
        Even people with disabilities can be with everyone, like everyone{" "}
      </div>
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.jgive.co.il/new/en/ils/charity-organizations/444"
        >
          <button className={styles.donateBtn}>
            DONATE TO HELP US HELP THEM
          </button>
        </a>
      </div>
    </section>
  );
};

export default Call;
