import { Link } from "react-router-dom";
import data from "../../../data";
import styles from "./Slider.module.css";
const Slider = () => {
  return (
    <section className={styles.slider}>
      {data?.map((dat) => {
        return (
          <article key={dat.title}>
            <Link to={`/articles/${dat?.title}`}>
              <img src={dat?.url} alt="" />
              <h2>{dat?.title}</h2>
              <p>{dat?.paragraph}</p>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Slider;
