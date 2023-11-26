import photo from "../../assets/b-summercamp.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.about}>
      <div>
        The Ilan Association strives to enable people with physical disabilities
        to live meaningful and high-quality lives. Since 1952, spurred by the
        polio virus outbreak, ILAN has been providing a wide range of activities
        for children and adults with disabilities.
      </div>
      <article>
        <img className={styles.photo} src={photo} alt="" />
      </article>
    </section>
  );
};

export default About;
