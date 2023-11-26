import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../../services";
import styles from "./NewsArticle.module.css";

const NewsArticle = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const data = await getNews();

        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetcher();
  }, []);

  const { ID } = useParams();

  const finder = news?.find((old) => old?.node?.titleSlug === ID);
  return (
    <article className={styles.article}>
      <img className={styles.photo} src={finder?.node?.photo?.url} alt="" />
      <h4>{finder?.node?.title}</h4>
      <p>{finder?.node?.desc}</p>
    </article>
  );
};

export default NewsArticle;
