import data from "../../data";
import { useParams } from "react-router-dom";
import styles from "./Article.module.css";
import { useState } from "react";
const Article = () => {
  const [datas, setDatas] = useState(data);
  const { title } = useParams();
  const datta = datas?.find((datas) => datas?.title === title);
  return (
    <article className={styles.card} key={datta?.title}>
      <img className={styles.photo} src={datta?.url} alt="" />
      <h2>{datta?.title}</h2>
      <p>{datta?.paragraph}</p>
    </article>
  );
};

export default Article;
